import { promises as fs } from "fs";
import path from "path";
import sharp from "sharp";

const publicDir = path.resolve(".output/public");
const srcImages = path.join(publicDir, "images");
const ipxParams = "w_2048&f_webp&q_80";
const destBase = path.join(publicDir, "_ipx", ipxParams, "images");

async function copyAndConvert(src, dest) {
	const entries = await fs.readdir(src, { withFileTypes: true });
	await fs.mkdir(dest, { recursive: true });
	for (const entry of entries) {
		const srcPath = path.join(src, entry.name);
		const destPath = path.join(dest, entry.name);
		if (entry.isDirectory()) {
			await copyAndConvert(srcPath, destPath);
		} else if (entry.isFile()) {
			// copy original to preserve /images/... path
			await fs.copyFile(srcPath, destPath);
			// convert to webp and write to the same _ipx path (Nuxt requests original filename)
			try {
				const buf = await sharp(srcPath).toFormat("webp", { quality: 80 }).toBuffer();
				await fs.writeFile(destPath, buf);
			} catch (e) {
				// if conversion fails, leave the copied original
				console.warn("sharp conversion failed for", srcPath, e.message);
			}
		}
	}
}

async function main() {
	try {
		const stat = await fs.stat(srcImages);
		if (!stat.isDirectory()) throw new Error("images folder missing");
		await copyAndConvert(srcImages, destBase);
		console.log("IPX static copy + webp conversion completed");
	} catch (err) {
		console.error("prepare-ipx-static failed:", err.message);
		process.exit(1);
	}
}

main();

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Deployment to GitHub Pages

This project is configured for deployment to GitHub Pages using GitHub Actions.

### Setup

1. In `nuxt.config.ts`, replace `/REPO_NAME/` with your repository name (e.g., `/my-repo/`) or `/` if it's a user/org pages repository.

2. Push your code to the `main` branch (or your default branch).

3. Go to your repository settings on GitHub, navigate to Pages, and set the source to "GitHub Actions".

The workflow will automatically build and deploy your site on every push to the main branch.

### Manual Deploy

To deploy manually from your local machine:

```bash
npm run deploy
```

This will generate the static site and push it to the `gh-pages` branch.

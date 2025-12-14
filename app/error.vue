<template>
	<UError
		:error="{
			statusCode: error.statusCode || 404,
			statusMessage: error.statusMessage || 'Page not found',
			message: 'Oops!',
		}"
	/>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
	error: NuxtError;
}>();
</script>

<template>
  <a
    class="max-w-sm rounded overflow-hidden shadow-lg"
    v-bind:href="`/games/${id}`"
  >
    <img
      v-if="thumbnail"
      class="w-full"
      v-bind:src="thumbnail"
      v-bind:alt="`${title} thumbnail`"
    />
    <div class="px-6 py-4 text-left">
      <div class="mb-2">
        <h2 class="font-bold text-xl">{{ title }}</h2>
        <h3 class="">{{ developer }}</h3>
        <span class="text-sx">{{ release }}</span>
      </div>
      <p class="text-gray-700 text-base line-clamp-3 min-h-[72px]">
        {{ description }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >{{ genre }}</span
      >
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >{{ platform }}</span
      >
    </div>
  </a>
</template>

<script lang="ts" setup>
defineProps({
  id: Number,
  title: String,
  description: String,
  thumbnail: String,
  developer: String,
  genre: String,
  release: String,
  platform: String,
})
</script>

<template>
  <div
    v-if="games.length"
    class="container flex justify-center flex-wrap gap-4 mt-10"
  >
    <Toast
      message="Here are some game for you!"
      v-bind:trigger="toastTrigger"
    />
    <Card
      v-for="game in games"
      v-bind:id="game.id"
      v-bind:key="`game-${game.id}`"
      class="hover:scale-105 transition-transform cursor-pointer"
      v-bind:title="game.title"
      v-bind:description="game.short_description"
      v-bind:thumbnail="game.thumbnail"
      v-bind:developer="game.developer"
      v-bind:genre="game.genre"
      v-bind:release="game.release_date"
      v-bind:platform="game.platform"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import type { Ref } from 'vue'
import Card from '../components/Card.vue'
import Toast from '../components/Toast.vue'

const API_URL = 'https://www.mmobomb.com/api1/games'

type GameListItem = {
  id: number
  title: string
  short_description: string
  thumbnail: string
  developer: string
  genre: string
  release_date: string
  platform: string
}

const games: Ref<GameListItem[]> = ref([])
const toastTrigger = ref(false)

watchEffect(async () => {
  const res = await fetch(API_URL)
  if (res.ok) {
    toastTrigger.value = true
    setTimeout(() => {
      toastTrigger.value = false
    }, 2000)
  }

  games.value = await res.json()
})
</script>

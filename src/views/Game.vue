<template>
  <div class="container">
    <Toast v-bind:message="'Got your game'" v-bind:trigger="toastTrigger" />
    <div v-if="game" class="flex flex-col lg:flex-row">
      <div class="mt-4 lg:mt-8">
        <h1 class="text-2xl">{{ game.title }}</h1>
        <span class="text-md mx-1">{{ game.developer }}</span>
        <span class="text-sm mx-1">{{ game.release_date }}</span>
        <p class="p-2 text-base text-left sm:px-4 lg:text-lg lg:mt-4">
          {{ descriptionHTMLStripped }}
        </p>
        <div class="px-6 pt-4 pb-2">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >{{ game.status }}</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >{{ game.genre }}</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >{{ game.platform }}</span
          >
        </div>
      </div>
      <div>
        <img
          v-for="screenshot in game.screenshots"
          v-bind:key="screenshot.id"
          v-bind:src="screenshot.image"
          v-bind:alt="`${game.title} screenshot`"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watchEffect } from 'vue'
import type { Ref } from 'vue'
import { useRoute } from 'vue-router'
import Toast from '../components/Toast.vue'

type Screenshot = {
  id: number
  image: string
}

type Game = {
  id: number
  title: string
  developer: string
  release_date: string
  status: string
  description: string
  genre: string
  platform: Screenshot[]
}

const router = useRoute()
const { id } = router.params

const API_URL = `https://www.mmobomb.com/api1/game?id=${id}`

const game: Ref<Game | undefined> = ref(undefined)
const toastTrigger = ref(false)

const descriptionHTMLStripped = computed(() => {
  if (game.value) return game.value.description.replace(/<\/?[^>]+>/gi, '')
  return ''
})

watchEffect(async () => {
  const url = API_URL
  const res = await fetch(url)

  if (res.ok) {
    toastTrigger.value = true
    setTimeout(() => {
      toastTrigger.value = false
    }, 2000)
  }

  game.value = await res.json()
  console.log(game)
})
</script>

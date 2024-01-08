<template>
  <div
    class="fixed top-20 right-12 px-4 py-2 rounded bg-green-700 text-white"
    v-bind:class="trigger ? 'block' : 'hidden'"
  >
    {{ message }}
  </div>
</template>

<script lang="ts" setup>
defineProps({
  message: {
    default: 'Toast!',
    type: String,
  },
  trigger: {
    default: false,
    type: Boolean,
  },
})
</script>

<script setup>
import { ref } from 'vue'

const list = ref([
  '2048.game',
  'hellofelipe.sats',
  'bitcoin.paper',
  'taprootwzrd.sats',
  'orpepen.sats',
  'cypherpunk.paper',
  'hellozin.sats',
])
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-lg">
        <h1 class="text-4xl font-bold">Type name, <kbd class="kbd">enter</kbd> to view</h1>
        <p class="py-6">Or trying clicking <router-link class="link link-primary" to="/ordinals.art">ordinals.art</router-link></p>
        <p class="py-12">Powered by <a class="link link-neutral" target="_blank" href="https://geniidata.com">Genii Data</a></p>
        <p 
          class="py-4"
          v-for="l in list"
          :key="l">
          <router-link class="link link-neutral" :to="`/${l}`">{{ l }}</router-link>
        </p>
      </div>
    </div>
  </div>
</template>
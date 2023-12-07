<script setup>
import { ref } from 'vue'

const list = ref([
  'p5paint.sats',
  '2048.game',
  'bitcoin.paper',
  'cypherpunk.paper',
])

const curatedList = ref([
  {
    title: 'The Ordinals Art Museum 1.0',
    sns: 'ordinals.art'
  },
  {
    title: 'P5Paint: Pixel Art Maker',
    sns: 'p5paint.sats'
  },
  {
    title: 'Play 2048 on Bitcoin',
    sns: '2048.game'
  },
  {
    title: 'Bitcoin Whitepaper, on Bitcoin',
    sns: 'bitcoin.paper'
  }, 
  {
    title: 'Cypherpunk Manifesto',
    sns: 'cypherpunk.paper'
  }
])
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-lg">
        <section 
          class="py-4"
          v-for="l in curatedList"
          :key="l.sns">
          <h6 class="text-xl font-bold text-primary">
            {{ l.title }}
          </h6>
          <p>
            <router-link class="link text-accent" :to="`/${l.sns}`">{{ l.sns }}</router-link>
          </p>
        </section>
        <p class="pt-12 pb-2">Orbit is made by <a class="link" target="_blank" href="https://twitter.com/thecolorblocks_">The Color Blocks</a></p>
        <p class="py-2">Powered by <a class="link" target="_blank" href="https://geniidata.com">Genii Data</a></p>
        <p class="pt-2">What are <a class="link" target="_blank" href="https://docs.satsnames.org/sats-names/about">Sats Names</a>?</p>
      </div>
    </div>
  </div>
</template>

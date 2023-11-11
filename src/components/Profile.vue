<script setup>
import * as compute from '../compute'

const props = defineProps({
  profile: Object
})
</script>

<template>
  <div class="my-0 mx-auto py-20 flex flex-wrap flex-col gap-1 justify-center items-center max-w-2xl">
    <div class="avatar mb-10">
      <div class="w-24 rounded-full">
        <img src=""/>
      </div>
    </div>
    <p>
      {{ profile.name }}
    </p>
    <p>
      {{ compute.shortenAddress(profile.address) }}
    </p>
  </div>
  <div class="my-0 mx-auto pb-20 flex flex-wrap gap-1 justify-center items-center max-w-2xl">
    <div 
      class="w-40 h-auto p-2 pb-0 bg-base-100 rounded-xl"
      v-for="item in props.profile.items"
      :key="item.inscriptionId">
      <div 
        class="w-36 h-36 relative">
        <span class="badge badge-sm absolute right-0.5 bottom-0.5">
          {{ item.utxoSize }} sats
        </span>
        <iframe
          sandbox="allow-scripts"
          scrolling="no"
          loading="lazy"
          class="rounded-lg"
          :src="item.previewUrl">
        </iframe>
      </div>
      <div class="w-36 h-10 flex flex-col justify-center">
        <a class="link link-primary" :href="`https://ordinals.com/inscription/${item.inscriptionId}`" target="_blank">{{ item.inscriptionNumber }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
iframe {
  width: 100%;
  height: 100%;
}
</style>
<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import * as api from '../api'

const route = useRoute()
const inscriptionId = ref()
const contentUrl = computed(() => 'https://ordinals.com/content/' + inscriptionId.value)
const contentFrame = ref()
const loading = ref(false)

const fetchRelay = async () => {
  loading.value = true
  inscriptionId.value = undefined
  let newName = route.params.name
  try {
    const response = await api.name.fetchNameInfo(newName)
    if (!!response.data.data && !!response.data.data.relay) {
      inscriptionId.value = response.data.data.relay
    }
  } catch (err) {
    console.log(err)
  }
  loading.value = false
}

watch(
  () => route.params.name,
  async newName => {
    await fetchRelay()
  }
)

onMounted(async () => {
  await fetchRelay()
})
</script>

<template>
  <div>
    <div v-if="!inscriptionId" class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <span v-if="loading" class="loading loading-infinity loading-lg"></span>
          <h1 v-if="!loading" class="text-lg font-bold">404 Not Found</h1>
        </div>
      </div>
    </div>
    <iframe 
      v-if="!!inscriptionId"
      ref="contentFrame"
      :src="contentUrl">
    </iframe>
  </div>
</template>

<style scoped>
iframe {
  width: 100vw;
  height: 100vh;
}
</style>
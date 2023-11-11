<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Profile from './Profile.vue'

import * as api from '../api'

const route = useRoute()
const inscriptionId = ref()
const address = ref()
const profile = ref()
const pagination = ref({
  cursor: 0,
  size: 48
})
const contentUrl = computed(() => 'https://ordinals.com/content/' + inscriptionId.value)
const contentFrame = ref()
const profileFrame = ref()
const loading = ref(false)

const fetchNameContent = async () => {
  loading.value = true

  // Clear inscription, address, profile data
  inscriptionId.value = undefined
  address.value = undefined
  profile.value = undefined

  let newName = route.params.name
  try {
    const response = await api.name.fetchNameInfo(newName)
    if (!!response.data.data && !!response.data.data.relay) {
      // If there is relay info
      inscriptionId.value = response.data.data.relay
    } else if (!!response.data.data && !response.data.data.relay) {
      // If there is no relay info, get address
      address.value = response.data.data.holder
    }
  } catch (err) {
    console.log(err)
  }

  // If address is filled, fetch profile
  if (!!address.value) await fetchNameProfile()

  loading.value = false
}

const fetchNameProfile = async () => {
  try {
    const response = await api.address.fetchInscriptionsUTXO(
      address.value, 
      pagination.value.cursor, 
      pagination.value.size
    )
    // populate profile
    profile.value = {
      name: route.params.name,
      address: address.value,
      items: []
    }
    profile.value.items = response.data.data.utxo.map((utxo) => {
      return {
        inscriptionId: utxo.inscriptions[0].inscriptionId,
        previewUrl: `https://ordinals.com/preview/${utxo.inscriptions[0].inscriptionId}`,
        inscriptionNumber: utxo.inscriptions[0].inscriptionNumber,
        utxoSize: utxo.satoshi
      }
    })
    console.log(profile.value)
  } catch (err) {
    console.log(err)
  }
}

watch(
  () => route.params.name,
  async newName => {
    await fetchNameContent()
  }
)

onMounted(async () => {
  await fetchNameContent()
})
</script>

<template>
  <div>
    <div v-if="!inscriptionId && !address" class="hero min-h-screen bg-base-200">
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
    <div
      v-if="!!profile"
      ref="profileFrame"
      class="min-w-screen min-h-screen bg-base-200">
      <profile :profile="profile"></profile>
    </div>
  </div>
</template>

<style scoped>
iframe {
  width: 100vw;
  height: 100vh;
}
</style>
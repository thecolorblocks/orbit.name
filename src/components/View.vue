<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'

import { name } from '../api/name'

const route = useRoute()

watch(
  () => route.params.name,
  async newName => {
    try {
      const response = await name.fetchNameInfo(newName)
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }
)
</script>

<template>
  {{ route.params.name }}
</template>
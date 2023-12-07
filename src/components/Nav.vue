<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const name = ref()
const displayName = computed(() => route.params.name)
</script>
<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <router-link class="btn btn-ghost normal-case text-lg btn-sm" to="/">Orbit</router-link>
    </div>
    <div class="navbar-center">
      <p class="text-xl text-primary">{{ displayName }}</p>
    </div>
    <div class="navbar-end">
      <div class="form-control">
        <div class="join">
          <button class="btn btn-primary btn-sm join-item">sns://</button>
          <input 
            type="text" 
            :placeholder="!!route.params.name ? route.params.name : 'names'" 
            class="input input-bordered input-sm w-24 md:w-auto join-item" 
            v-model="name" 
            @keyup.enter="router.push(`/${name}`)" />
        </div>
      </div>
    </div>
  </div>
</template>
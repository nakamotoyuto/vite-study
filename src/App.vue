<template>
    <div class="h-screen flex justify-between flex-col">
    <router-link to="/">
      <h1 class="h-24 p-3 flex items-center bg-green-500 text-white text-2xl font-bold"> TODO APP composition API </h1>
    </router-link>
    <router-view></router-view>
  </div>

</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

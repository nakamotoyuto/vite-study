<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <TodoList />
  <router-link to="/about">about</router-link>
  <router-link to="/">home</router-link>
  <router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { defineComponent, ref } from 'vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

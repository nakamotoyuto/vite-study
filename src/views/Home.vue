<template>
  <div class="flex justify-between flex-col h-full">
    <TodoList />
    <todoInput />
  </div>
</template>
<script>
import TodoList from '../components/TodoList.vue'
import TodoInput from '../components/TodoInput.vue'

export default {
  name: "Home",
  components: {
    TodoList,
    TodoInput
  }
};
</script>


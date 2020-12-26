<template>
  <div class="flex justify-between flex-col h-full">
    <TodoList />
    <todoInput />
  </div>
</template>
<script>
import TodoList from '../components/TodoList.vue'
import todoInput from '../components/todoInput.vue'

export default {
  name: "Home",
  components: {
    TodoList,
    todoInput
  }
};
</script>


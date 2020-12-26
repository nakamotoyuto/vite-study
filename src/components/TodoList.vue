<template>
  <ul class="p-1.5 h-full">
    <li class="flex justify-between items-center font-semibold" v-for="(todo, index) in state.todoList" :key="todo.id">
      {{ todo.todo }}
      <div>
        <router-link class="btn bg-gray-400 hover:bg-gray-600 mr-4" :to="{name: 'detail', params: {id: todo.id}}">詳細</router-link>
        <complete-button :index="index" @complete-todo="completeTodoAction" />
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, reactive} from 'vue'
import todoInput from '../components/todoInput.vue'
import CompleteButton from '../components/CompleteButton.vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'TodoList',
  components: {
    todoInput,
    CompleteButton
  },

  setup() {
    const store = useStore()
    const state = reactive<{todoList: Array<{id: number, value: string}>}>({
      todoList: store.state.todoList
    });


    const lastId = computed(() => {
      if(state.todoList.length === 0){
        return 1
      } else {
        const lastItem = state.todoList.slice(-1)[0]
        return lastItem.id + 1
      }
    })

    const completeTodoAction = (targetIndex) => {
      state.todoList.splice(targetIndex, 1)
    }

    return { state, completeTodoAction, lastId };
  }
});
</script>

<style scoped>
  ul {
    list-style: disc;
  }
  .btn {
    @apply py-2 px-4 font-semibold rounded-lg shadow-md;
  }
</style>

<template>
  <ul class="p-1.5 h-full">
    <li class="flex justify-between items-center font-semibold" v-for="(todo, index) in state.todoList" :key="todo.id">
      <p class="w-2/4 break-all text-left">
        {{ todo.todo }}
      </p>
      <div>
        <router-link class="btn bg-gray-400 hover:bg-gray-600 mr-4" :to="{name: 'detail', params: {id: todo.id}}">詳細</router-link>
        <complete-button :index="index" />
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, reactive} from 'vue'
import CompleteButton from '../components/CompleteButton.vue'
import { useController } from '../@use/useController'

export default defineComponent({
  name: 'TodoList',
  components: {
    CompleteButton
  },

  setup() {
    const { state } = useController()
    const lastId = computed(() => {
      if(state.todoList.length === 0){
        return 1
      } else {
        const lastItem = state.todoList.slice(-1)[0]
        return lastItem.id + 1
      }
    })


    return { state, lastId };
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

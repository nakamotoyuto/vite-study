<template>
  <div>
    <ul class="todolist">
      <li v-for="(todo, index) in state.todoList" :key="todo.id">
        <router-link :to="{name: 'detail', params: {id: todo.id}}" >{{ todo.todo }}</router-link>
        <complete-button :index="index" @complete-todo="completeTodoAction" />
      </li>
    </ul>
    <todo-input :lastId="lastId" @add-todo="addTodoAction" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive} from 'vue'
import todoInput from '../components/todoInput.vue'
import CompleteButton from '../components/CompleteButton.vue'

export default defineComponent({
  name: 'TodoList',
  components: {
    todoInput,
    CompleteButton
  },

  setup() {
    const state = reactive<{todoList: Array<{id: number, todo: string}>}>({
      todoList: []
    });

    const lastId = computed(() => {
      if(state.todoList.length === 0){
        return 1
      } else {
        const lastItem = state.todoList.slice(-1)[0]
        return lastItem.id + 1
      }
    })

    const addTodoAction = (id: number, value: string) => {
      state.todoList.push({id: id,  todo: value})
    };

    const completeTodoAction = (targetIndex) => {
      state.todoList.splice(targetIndex, 1)
    }

    return { state, addTodoAction, completeTodoAction, lastId };
  }
});
</script>

import { reactive } from 'vue';
import { useStore } from 'vuex'

export const useController = () => {
  const store = useStore()
  const state = reactive<{ todoList: Array<{ id: number, value: string }> }>({
    todoList: store.state.todoList
  });
  return { state }
}
import { ref } from 'vue';
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export const useAddData= () => {
  const store = useStore()
  const route = useRoute()
  const todoRef = ref<string>('')
  const commentRef = ref<string>('')

  const routePath = route.path

  const lastId = () => {
    if (store.state.todoList.length === 0) {
      return 1
    } else {
      const lastItem = store.state.todoList.slice(-1)[0]
      return lastItem.id + 1
    }
  }

  const getDate = () => {
    const today = new Date();
    const fullYear = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    return `${fullYear}/${month}/${date} ${hours}:${minutes}`
  }

  const add = (e) => {
    const value = todoRef.value
    const id = lastId()
    store.commit('increment', { id, value })
    todoRef.value = ''
  };


  const addComment = (e) => {
    const comment = commentRef.value
    const todoId = route.params.id
    const created_at = getDate()
    store.commit('addcomment', { todoId, comment, created_at })
    commentRef.value = ''
  }
  return { todoRef, commentRef, add, addComment, routePath }
}
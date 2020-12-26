<template>
  <div class="p-5 bg-gray-50 flex justify-between">
    <template v-if=" routePath === '/' ">
      <input v-model="todoRef" type="text" class="h-full w-screen mr-8 p-1.5 border-white focus:border-green-500" id="todo">
      <button class="btn btn-green w-52" @click="add">todo登録</button>
    </template>
    <template v-else>
      <input v-model="commentRef" type="text" class="h-full w-screen mr-8 p-1.5 border-white focus:border-green-500" id="comment">
      <button class="btn btn-green w-52" @click="addComment">コメント追加</button>
    </template>
  </div>
</template>

<script lang="ts">
  import { defineComponent, SetupContext, ref } from 'vue'

  import { useStore } from 'vuex'
  import { useRoute} from 'vue-router'

  export default defineComponent({

    setup(props, context: SetupContext) {
      const store = useStore()
      const route = useRoute()
      const todoRef = ref<string>('')
      const commentRef = ref<string>('')

    const routePath = route.path
    console.log(routePath)

    const lastId = () => {
      if(store.state.todoList.length === 0){
        return 1
      } else {
        const lastItem = store.state.todoList.slice(-1)[0]
        return lastItem.id + 1
      }
    }

    const add = (e) =>{
    const value = todoRef.value
    const comment = commentRef.value
    const id = lastId()
    store.commit('increment', {id, value})
      todoRef.value = ''
    };

    const addComment = (e) => {
      const comment = commentRef.value
      const todoId = route.params.id
      console.log(route.params.id)
      store.commit('addcomment', {todoId, comment})
      commentRef.value = ''
    }

    return { add, addComment, todoRef, commentRef, routePath};
  }
});
</script>

<style>
  .btn {
    @apply py-2 px-4 font-semibold rounded-lg shadow-md;
  }

  .btn-green {
    @apply text-white bg-green-500 hover:bg-green-700;
  }
</style>

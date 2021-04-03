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
  import { defineComponent, SetupContext,} from 'vue'
  import {useAddData } from '../@use/useAddData'

  export default defineComponent({

    setup() {
      const { todoRef, commentRef, add, addComment, routePath } = useAddData()

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

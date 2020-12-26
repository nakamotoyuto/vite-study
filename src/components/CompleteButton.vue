<template>
  <button class="btn btn-green" v-bind="props.index" @click="completed"> 完了</button>
</template>

<script lang="ts">
import { defineComponent, SetupContext, computed, reactive, ref } from 'vue'

export default defineComponent({
  name: 'CompleteButton',
  props: {
    index: {
      type: Number
    }
  },

  setup(props, context: SetupContext) {
    const todoRef = ref<number>(props.index)

    const completed = (e) =>{
      console.log(todoRef.value)
      context.emit('complete-todo', todoRef.value);
    };

    return { completed, todoRef, props};
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

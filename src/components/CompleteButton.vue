<template>
  <div>
    <button v-bind="props.index" @click="completed"> 完了</button>
  </div>
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
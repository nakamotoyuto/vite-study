<template>
  <button class="btn btn-green" @click="completed"> 完了</button>
</template>

<script lang="ts">
import { defineComponent, SetupContext, computed, reactive, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'CompleteButton',
  props: {
    index: {
      type: Number
    }
  },
  setup(props, context: SetupContext) {
    const store = useStore()

    const completed = (e) =>{
      const targetIndex = props.index
      store.commit('complete', targetIndex)
    };

    return { completed };
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

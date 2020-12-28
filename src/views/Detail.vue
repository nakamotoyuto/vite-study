<template>
  <div class="flex justify-between flex-col h-full">
    <template v-if="detailItem">
      <div class="text-left p-8">
        <h2>
          <p class="text-2xl font-bold">タイトル</p>
          <p class="p-4 bg-yellow-50 text-xl">{{ detailItem.todo }}</p>
        </h2>
        <div class="my-8">
          <h3 class="text-xl font-bold">
            コメント一覧
          </h3>
          <ul class="my-8">
            <li v-for="(comment) in detailItem.comment" :key="comment" class="mb-4 last:mb-0 flex justify-between items-center font-semibold p-4 border" >
              <div class="commentBox">
                <div class="date  font-normal text-sm text-gray-400">{{comment.created_at}}</div>
                <p>{{ comment.comment }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <todoInput />
    </template>
    <template v-else>
      <div class="p-8">
        <h2 class="mb-4 font-semibold text-2xl">データが存在しません</h2>
        <router-link to="/" class="btn bg-gray-400 hover:bg-gray-200">TOPへ</router-link>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, SetupContext} from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import todoInput from '../components/todoInput.vue'

export default defineComponent({
  name: 'Detail',

  components: {
    todoInput
  },
  setup() {
    const store = useStore()
    const route = useRoute()
    const routerId = route.params.id
    const detailItem = store.state.todoList.find(e => String(e.id) === routerId)
    return { detailItem }
  }
});
</script>


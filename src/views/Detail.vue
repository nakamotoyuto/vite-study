<template>
  <div class="flex justify-between flex-col h-full">
    <template v-if="detailItem">
      <div>
        <h2>タイトル {{ detailItem.todo }}</h2>
        <div>
          <h3>
            コメント一覧
          </h3>
          <ul>
            <li class="flex justify-between items-center font-semibold" v-for="(comment) in detailItem.comment" :key="comment">
              {{ comment }}
            </li>
          </ul>
        </div>
      </div>
      <todoInput />
    </template>
    <template v-else>
      <h2>データが存在しません</h2>
      <router-link to="/" class="btn bg-gray-400 hover:bg-gray-600">TOPへ</router-link>
    </template>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, SetupContext} from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import todoInput from '../components/todoInput.vue'
import Home from './Home.vue'

export default defineComponent({
  name: 'Detail',

  components: {
    todoInput,
    Home
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

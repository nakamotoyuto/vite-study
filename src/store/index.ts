import { createStore } from "vuex";

export interface State {
  todoList: Array<{ id: number, todo: string, comment: Array<string> }>
}
export const store = createStore<State>({
  state: {
    todoList: []
  },
  mutations: {
    increment(state, { id, value }) {
      state.todoList.push({ id: id, todo: value, comment: [] })
    },
    complete(state, targetIndex) {
      state.todoList.splice(targetIndex, 1)
    },
    addcomment(state, { todoId, comment }) {
      state.todoList[todoId - 1].comment.push(comment)
    }

  },
  actions: {},
  modules: {}
});

export default store

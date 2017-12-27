import history from './history.js'

import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: []
  },

  actions: { // async
    updateTodo: ({commit}, payload) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('updateTodo', payload)
          resolve()
        }, 500)
      })
    },
    createTodo: ({commit}, todo) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('createTodo', todo)
          resolve()
        }, 500)
      })
    },
    deleteTodo: ({commit}, todo) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('deleteTodo', todo)
          resolve()
        }, 500)
      })
    }
  },

  mutations: { // sync
    addTodo: (state, todo) => {
      state.todos.push(todo)
    },

    deleteTodo: (state, {id}) => {
      state.todos = state.todos.filter(t => t.id !== id)
    },

    createTodo: (state, todo) => {
      state.todos.push(todo)
    },

    updateTodo: (state, todo) => {
      state.todos.forEach((t, ind, arr) => {
        if (t.id === todo.id) arr.splice(ind, 1, todo)
      })
    }
  },

  getters: {
    getTodos: state => state.todos
  }
})

store.subscribe((mutation, state) => {
  let stateToSave = JSON.parse(JSON.stringify(state))
  history.add(stateToSave)
})

export default store

import './styles/colors.less'
import './styles/todo-item.less'

import Vue from 'vue'
import App from './App.vue'
import store from './store.js'

window.onload = function () {
  new Vue({
    el: '#app',
    store,
    render: h => h(App)
  })
}

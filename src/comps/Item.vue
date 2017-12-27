<template>
  <div>
    <div class="item-row" :class="{'completed': todo.done}">

      <input type="checkbox" class="todo-check" v-model="status">

      <input type="text" class="todo-name" v-model="todoText">

      <button v-if="!updating" type="button" class="todo-button" @click="deleteItem($event, todo)">
        <span style="font-size: 1.3em">&#10006;</span>
      </button>

      <spiner v-if="updating"
      ></spiner>

    </div>
  </div>
</template>

<script>
import Spiner from './Spiner.vue'

export default {
  name: 'item',
  components: { Spiner },
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
      updating: false,
      timer: null,
      todoText: this.todo.text,
      status: this.todo.done
    }
  },
  methods: {
    update: function () {
      this.todoText = this.todo.text
      this.status = this.todo.done
      // this.$forceUpdate()
    },
    updateTodo: function () {
      this.updating = true
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        let newTodo = {
          done: this.status,
          text: this.todoText,
          id: this.todo.id
        }
        this.$store.dispatch('updateTodo', newTodo).then(() => {
          this.updating = false
        })
      }, 500)
    },
    deleteItem: function (ev, todo) {
      this.updating = true
      this.$store.dispatch('deleteTodo', todo).then(() => {
        this.updating = false
      })
    }
  },
  watch: {
    todoText: function (val) {
      this.updateTodo()
    },
    status: function (val) {
      this.updateTodo()
    }
  }
}
</script>

<style lang="less">
// @import '~../styles/colors.less';

.completed {
  background-color: rgba(255, 255, 255, 0.8);
  opacity: .4;

  .todo-name {
    text-decoration: line-through;
    color: rgba(0, 0, 0, 0.6);
  }
}

</style>

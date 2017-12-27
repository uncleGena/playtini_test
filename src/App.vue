<template>
  <div class="content">
    <div class="centering">

      <div class="list-item" style="justify-content:center" v-if="!todos.length">
        <h3 style="opacity:.8">Please, create your todo.</h3>
      </div>

      <item v-for="todo of todos" :key="todo.id"
      ref="item"
      class="list-item"
      :todo="todo"
      ></item>

      <hr>

      <new-item
      class="list-item"
      ></new-item>

      <timetravel
      @rerender="rerender"
      class="list-item"
      ></timetravel>

    </div>
  </div>
</template>

<script>
import Item from './comps/Item.vue'
import NewItem from './comps/NewItem.vue'
import Timetravel from './comps/Timetravel.vue'
import initialTodos from './initialTodos.js'

export default {
  name: 'app',
  components: {Item, NewItem, Timetravel},
  mounted: function () {
    // sequentialy add initial todos to list
    // in ordder to have different timestamps in ids
    initialTodos.reduce((acc, todo) => {
      return acc.then(() => {
        todo.id = new Date().getTime()
        return this.$store.dispatch('createTodo', todo).then(resp => {
          return resp
        })
      })
    }, Promise.resolve())
  },
  methods: {
    rerender: function () {
      for (let comp of this.$refs.item) {
        comp.update()
      }
    }
  },
  computed: {
    todos: function () {
      return this.$store.getters.getTodos
    }
  }
}
</script>

<style lang="less">
@import '~./styles/colors.less';

html {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  background-color: @main-background;
  height: 100%;
}

.centering {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content {
  height: 100%;
  display: flex;
  flex-direction: column;
  // align-content: center;
  justify-content: center;
  align-items: center;
}

.list-item {
  display: flex;
  flex: 0 1 50px;
  width: 100%;
}

@media only screen
and (max-width : 480px) {
  .centering {
    // background-color: red;
    width: calc(100% - 5px);
  }
}

@media only screen
and (min-width : 481px)
and (max-width : 970px) {
  .centering {
    // background-color: green;
    width: 440px;
  }
}

@media only screen
and (min-width : 971px) {
  .centering {
    // background-color: yellow;
    width: 770px;
  }
}



</style>

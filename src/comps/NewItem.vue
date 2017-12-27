<template>
  <div>
    <div class="item-row">
      <div class="todo-check"></div>

      <input type="text" class="todo-name" placeholder="Your new task" v-model="text">

      <button v-if="!creating" type="button" class="todo-button" @click="createNew()">
        <span style="font-size: 1.3em">&#10010;</span>
      </button>

      <spiner v-if="creating"
      ></spiner>

    </div>
  </div>
</template>

<script>
import Spiner from './Spiner.vue'

export default {
  name: 'new-item',
  components: { Spiner },
  data: function () {
    return {
      creating: false,
      text: ''
    }
  },
  methods: {
    createNew: function () {
      this.creating = true
      let task = {
        text: this.text,
        done: false,
        id: new Date().getTime()
      }
      this.$store.dispatch('createTodo', task).then(() => {
        this.creating = false
        this.text = ''
      })
    }
  }
}
</script>

<style lang="less">

.todo-check {
  margin: 3px 3px 3px 4px;
}

</style>

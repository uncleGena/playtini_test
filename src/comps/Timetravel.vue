<template>
  <div class="buttons">
    <div class="tt-button" @click="undo()">
      undo
    </div>
    <div class="tt-button" @click="redo()">
      redo
    </div>
  </div>
</template>

<script>
import history from '../history.js'

export default {
  name: 'timetravel',
  methods: {
    undo: function () {
      this.$emit('rerender')
      this.$store.replaceState(history.undo())
    },
    redo: function () {
      this.$emit('rerender')
      this.$store.replaceState(history.redo())
    }
  }
}
</script>

<style lang="less">
@import '~../styles/colors.less';

.buttons {
  justify-content: space-around !important;
  align-items: center !important;
}
.tt-button {
  background-color: @item-background;
  padding: 10px;
  border: 1px  solid @border-color;
  border-radius: 3px;
  cursor: pointer;
  width: 100%;
  margin: 0 5px;
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
}

</style>

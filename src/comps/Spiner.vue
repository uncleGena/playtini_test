<template >
  <span class="todo-button spin" style="font-size: 1.3em">
    <span style="margin-left: 6px">&#8635;</span>
  </span>
</template>

<script>
export default {
  name: 'spiner'
}
</script>

<style lang="less">
.spin {
    width: 10px !important;
    display: flex;
    -webkit-animation: spin 3s infinite linear;
}

@-webkit-keyframes spin {
	0%  {-webkit-transform: rotate(0deg);}
	100% {-webkit-transform: rotate(360deg);}
}
</style>

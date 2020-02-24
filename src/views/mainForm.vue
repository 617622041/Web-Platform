<template>
  <div class="my-chart">
    <Unity ref="unity" src="static/Kss/Build/Kss.json" width="1920" height="1080" unityLoader="static/Kss/Build/UnityLoader.js"></Unity>
  </div>
</template>

<script>
import Unity from 'vue-unity-webgl'

export default {
  name: 'MainForm',
  components: {Unity},
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
.my-chart {
  width: 100%;
  height: 100% !important;
  background-color: cadetblue;
  .PieChart {
    width: 100%;
    height: 100%;
  }
}
</style>

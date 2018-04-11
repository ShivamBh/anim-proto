<template>
  <div id="anim-wrapper" class="anim-wrapper">

  </div>
</template>

<script>
  import { AnimationController1 } from '../../custom/custom-1.js'

  export default {
    name: "animation-container-1",
    mounted() {

      let animObj = document.getElementById('anim-wrapper');
      console.log('animObj: ', animObj);
      let animControl = new AnimationController1(animObj);
    }
  }
</script>

<style lang="scss">

  .anim-wrapper {
    position: relative;
    height: 100vh;
    width: 100vw;
    background-color: #151515;
    overflow: hidden;
    z-index: 5;
  }

</style>

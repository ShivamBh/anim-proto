<template>
  <div id="anim-wrapper" class="anim-wrapper">
    <div class="sidebar"></div>
    <div class="main-content">
      <div class="main-content-inner"></div>
    </div>
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

  //vars
  $yellow: #d2d498;
 $bgblack: #1e1e1e;

  //styles
  .anim-wrapper {
    position: relative;
    height: 100vh;
    width: 100vw;
    background-color: #1e1e1e;
    overflow: hidden;
    z-index: 5;
    display: flex;

    > div {
      display: inline-block;
    }
  }

  .sidebar {
    margin-top: 40px;
    margin-bottom: 40px;
    margin-right: 20px;
    width: 120px;
    height: calc(100% - 80px);
    border-top: 2px solid #d2d498;
    border-bottom: 2px solid #d2d498;
    border-right: 2px solid #d2d498;
  }

  .main-content {
    margin-top: 40px;
    margin-bottom: 40px;
    width: calc(100% - 140px);
    height: calc(100% - 80px);
    border-top: 2px solid #d2d498;
    border-bottom: 2px solid #d2d498;
    border-left : 2px solid #d2d498;
  }

  .main-content-inner {
    height: 100%;
    width: 100%;
    background-color: #d2d498;
    position: relative;
    z-index: 5;
    overflow-x: auto;
    overflow-y: hidden;
  }


</style>

<template>
  <div id="anim-wrapper" class="anim-wrapper">
    <div class="sidebar"></div>
    <div class="main-content">
      <div class="main-content-inner">
        <div class="item1"></div>
        <div class="item2"></div>
        <div class="item3"></div>
      </div>
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
  $coral: #ffb9a2;
  $blue: #6c7aff;
  $green: #54ffad;

  //styles
  .anim-wrapper {
    position: relative;
    height: 100vh;
    min-width: 100vw;
    background-color: #1e1e1e;
    overflow: hidden;


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
    position: absolute;
    z-index: 50;
  }

  .main-content {
    margin-top: 40px;
    margin-bottom: 40px;
    left: 140px;
    min-width: calc(100% - 140px);
    height: calc(100% - 80px);
    border-top: 2px solid #d2d498;
    border-bottom: 2px solid #d2d498;
    border-left : 2px solid #d2d498;
    position: absolute;

  }

  .main-content-inner {
    border-top: 2px solid #ff4f67;
    border-bottom: 2px solid #ff4f67;
    height: 60%;
    min-width: 100%;
    /*background-color: #d2d498;*/
    position: relative;
    /*z-index: 3;*/
    overflow-x: hidden;
    overflow-y: hidden;
    /*white-space: nowrap;*/
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    /*top: 50%;*/
    /*<!--transform: translate3d(0, -50%, 0);-->*/
    transform: translateX(-50%);

    > div {
      position: relative;
      /*z-index: 1;*/
      flex: 0 0 auto;
      display: inline-block;
    }
  }

  .item1 {
    width: 70vw;
    height: 85%;
    background-color: #54ffad;
    margin-right: 20px;

  }

  .item2 {
    width: 80vw;
    height: 85%;
    background-color: #6c7aff;
    margin-right: 20px;

  }

  .item3 {
    width: 80vw;
    height: 85%;
    background-color: #ffb9a2;
    margin-right: 20px;

  }

</style>

<template>
  <div id="app">
    <anim-main-1></anim-main-1>
  </div>
</template>


<script>

  import Main from '../src/components/Anim_1/Main';

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components : {
      "anim-main-1": Main
    }
  }
</script>

<style lang="scss">

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }

  body {
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin: 0;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  #test {
    opacity: 0;
    animation: anim 1s forwards infinite ease-in-out;
  }

  @keyframes anim {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>

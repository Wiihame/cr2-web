<template>
  <div id="app">
    <Index></Index>
  </div>
</template>

<script>
import Index from './pages/Index.vue'
export default {
  name: 'app',
  components: {
    Index
  }
}
</script>

<style>
body {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
  height: 100%;
}
</style>

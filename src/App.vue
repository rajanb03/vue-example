<template>
  <div id="app">
    <ButtonComponent text="TEST" type="button" />
  </div>
</template>

<script>
import  ButtonComponent from "./components/Button/ButtonComponent.vue";
export default {
  name: 'App',
  components: {
    ButtonComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <ButtonComponent @clickButton="clickButton" />
  </div>
</template>

<script>
import ButtonComponent from "../src/components/Button/ButtonComponent.vue";
export default {
  name: 'App',
  components: {
    ButtonComponent
  },

  methods: {
    clickButton () {
      alert('Clicked from child component');
    }
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

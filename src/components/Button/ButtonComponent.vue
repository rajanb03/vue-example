<template>
  <div>
    <!-- <button :type="type" v-bind="$attrs">
      {{ text }}
    </button> -->
    <v-btn elevation="2">
      {{ text }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    text: {
      type: String,
      required: true,
      default: ''
    },
    type: {
      type: String,
      required: true,
      default: 'button'
    },
  }
}
</script>

<style scoped>
.v-btn {
  color: white !important;
  background-color: darkcyan !important;
}
</style>
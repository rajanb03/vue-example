<template>
  <div>
    <v-btn @click="$emit('clickButton')">
      {{text}}
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
      default: 'Button'
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
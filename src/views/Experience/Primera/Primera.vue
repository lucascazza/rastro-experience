<template>
  <div class="primera">
    <p>Esta es la primera</p>
    <v-btn href="segunda">Segunda</v-btn>
  </div>
</template>

<script>

export default {
  name: 'ExpeciencePrimera',
  metaInfo() {
    return {
      title: 'Primera',
    }
  },
  components: {}
}
</script>

<style lang="scss">
    @import "./Primera";
</style>
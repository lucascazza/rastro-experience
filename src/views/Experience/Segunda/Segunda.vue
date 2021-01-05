<template>
  <div class="segunda">
    <p>Esta es la Segunda</p>
    <v-btn href="/">aca vemos que onda</v-btn>
  </div>
</template>

<script>

export default {
  name: 'ExpecienceSegunda',
  metaInfo() {
    return {
      title: 'Segunda',
    }
  },
  components: {}
}
</script>

<style lang="scss">
    @import "./Segunda";
</style>
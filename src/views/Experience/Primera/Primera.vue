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
  components: {},
  mounted(){
    this.loadData()    
  },
  methods: {
    async loadData() {
      try {
        await this.$store.dispatch('user/loadData', { vm: this })
      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>

<style lang="scss">
    @import "./Primera";
</style>
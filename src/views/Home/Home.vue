<template>
  <div class="home">
    <p>aca es donde comienza la experiencia</p>
    <v-btn href="/experience/primera">Comenzar experiencia</v-btn>
  </div>
</template>

<script>

import helperApp from '@/mixins/helperApp';
export default {
  name: 'Home',
  metaInfo() {
    return {
      title: 'Home',
    }
  },
  components: {},
  mixins: [helperApp],
  mounted() {
    this.loadData()
  },
  methods: {
    async loadData() {
      try {
        await this.$store.dispatch('user/loadData', {
          vm: this
        })
      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>

<style lang="scss">
    @import "./Home";
</style>
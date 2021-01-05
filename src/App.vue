<template>
  <v-app class="app-content">
    <router-view />
  </v-app>
</template>

<script>

export default {
  name: 'App',

  metaInfo() {
    return {
      title: 'Comenzar experiencia',
      titleTemplate: "%s | Experiencia Rastro"
    }
  },

  components: {},

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  @import "@/assets/sass/app";
</style>

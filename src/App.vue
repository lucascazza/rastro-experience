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
  computed: {
    windowWidth: {
      get() {
        return this.$store.getters['user/windowWidth'];
      },
      set(newValue) {
        this.$store.commit('user/setWindowWidth', newValue);
      }
    }
  },
  beforeMount(){
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize(){
      this.windowWidth = window.innerWidth;
    }
  }
};
</script>

<style lang="scss">
  @import "@/assets/sass/app";
</style>

<template>
  <div class="login">
    <p>aca es donde comienza la experiencia</p>
    <v-btn @click="loguearse()">Comenzar experiencia</v-btn>
  </div>
</template>

<script>

export default {
  name: 'Login',
  metaInfo() {
    return {
      title: 'Login',
    }
  },
  components: {

  },
  methods: {
    loguearse(){
      this.$store.commit('user/setToken', 'algo')
      this.$router.push({ path: 'experience/primera' })
    }
  }
}
</script>

<style lang="scss">
    @import "./Login";
</style>
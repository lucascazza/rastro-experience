<template>
  <div class="login">
    <transition name="fade-login">
      <div v-if="!showVideo" class="login__form">
        <v-form id="login-form" @submit.prevent="login()">
          <h2>Loguearse</h2>
          <p>Por favor ingrese sus datos</p>
          <div class="login__form--option">
            <label>Usuario</label>
            <v-text-field 
              solo 
              dense 
              outlined 
              hide-details 
              v-model="user.userName" 
              type="text">
            </v-text-field>
          </div>
          <div class="login__form--option">
            <label>Contraseña</label>
            <v-text-field 
              solo 
              dense 
              outlined 
              hide-details 
              v-model="user.password"
              :append-icon="showPassword ? 'ricon-visible' : 'ricon-invisible-1'"
              :type="showPassword ? 'text' : 'password'" 
              @click:append="showPassword = !showPassword"></v-text-field>
          </div>
          <v-btn 
            :loading="loading" 
            color="primary" 
            type="submit" 
            large 
            depressed 
            rounded 
            class="login__form--submit"
            :disabled="!submitEnabled">
            Iniciar sesión
          </v-btn>
          <router-link to="/register" class="login__form--register pt-5">No tengo usuario</router-link>
        </v-form>
      </div>
    </transition>
    <transition name="fade">
      <div class="login__video" v-if="showVideo">
        <div class="login__video--play" @click="playVideo">
          <h2>Click para arrancar</h2>
        </div>
        <video ref="video" autoplay @ended="ended" frameborder="0" @playing="playing">
          <source src="media/manifiesto.mp4" type="video/mp4">
        </video>
      </div>
    </transition>
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
  components: {},
  data() {
    return {
      startVideo: false,
      showVideo: true,
      loading: false,
      user: {
        userName: '',
        password: '',
      },
      showPassword: false
    };
  },
  computed: {
    submitEnabled(){
      return this.user.userName.length && this.user.password
    },
  },
  watch: {},
  mounted() {},
  methods: {
    async login() {
      this.loading = true
      try {
        await this.$store.dispatch('user/login', { vm: this, data: this.user })
        this.$router.push({ path: '/' })
        this.loading = false
      } catch (err) {
        console.log(err);
        this.loading = false
      }
    },
    playVideo(){
      this.$refs.video.play()      
    },
    playing(){
      this.startVideo = true
      this.$refs.video.requestFullscreen()      
    },
    ended(){
      this.showVideo = false
    }
  }
}
</script>

<style lang="scss" scoped>
    @import "./Login";
</style>
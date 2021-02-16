<template>
  <div class="login" :class="{'padding-content': !showVideo}">
    <transition name="fade-login">
      <div v-if="!showVideo" class="login__row">
        <div class="login__row--text">
          <h1>Bienvenidxs a la experiencia Rastro</h1>
          <img v-if="!isMobile" src="@/assets/img/login/logueate.svg" alt="Logueate">
        </div>
        <div class="login__row--form">
          <div class="login__form">
            <v-form id="login-form" @submit.prevent="login()">
            <div>
              <div class="d-flex align-center flex-column mb-3">
                <img src="@/assets/img/logo.svg" alt="Logo">
                <h2>INICIAR SESIÓN</h2>
              </div>
              <div class="login__form--option">
                <v-text-field
                  autocomplete="off" 
                  color="magenta" 
                  label="Usuario" 
                  hide-details 
                  v-model="user.userName" 
                  type="text">
                </v-text-field>
              </div>
              <div class="login__form--option">
                <v-text-field
                  autocomplete="off" 
                  color="magenta" 
                  label="Contraseña" 
                  hide-details 
                  v-model="user.password"
                  :append-icon="showPassword ? 'ricon-visible' : 'ricon-invisible-1'"
                  :type="showPassword ? 'text' : 'password'" 
                  @click:append="showPassword = !showPassword">
                </v-text-field>
              </div>
            </div>
            <div>
              <v-btn
                rounded
                :loading="loading" 
                color="magenta" 
                type="submit" 
                large 
                depressed 
                class="login__form--submit" 
                :disabled="!submitEnabled">
                Iniciar sesión
              </v-btn>
              <router-link to="/register" class="login__form--register pt-5">No tengo usuario</router-link>
            </div>
          </v-form>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="login__video" v-if="showVideo">
        <video ref="video" poster="@/assets/media/poster.jpg" controls autoplay @ended="ended" frameborder="0" @playing="playing">
          <source src="@/assets/media/manifiesto.mp4" type="video/mp4">
        </video>
      </div>
    </transition>
    <div class="login__video--play" @click="playVideo" v-if="!startVideo && showVideo"></div>
  </div>
</template>

<script>

import { mapState } from 'vuex';
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
    ...mapState({
      windowWidth: state => state.user.windowWidth
    }),
    submitEnabled() {
      return this.user.userName.length && this.user.password
    },
    isMobile() {
      return this.windowWidth < 992
    }
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
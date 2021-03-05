<template>
  <div class="login" :class="{'overflow-hidden': !scrolleable}" id="loginScroll">
    <loading v-if="loading"></loading>
    <div class="login__video">
      <div class="login__video--video">
        <video ref="video" poster="@/assets/media/posterteaser.jpg" controls frameborder="0" @ended="scrollBottom()">
          <source src="@/assets/media/teaser.mp4" type="video/mp4">
        </video>
      </div>
    </div>
    <div class="login__signin">
      <div class="button-top">
        <v-btn rounded color="yellow" @click="scrollTop()" :disabled="!enabledScrollTop"><v-icon>icon-arrow-up</v-icon></v-btn>
      </div>
      <div class="login__row">
        <div class="login__row--text">
          <h1>Bienvenidxs a la experiencia Rastro</h1>
          <img v-if="!isMobile" id="form" src="@/assets/img/login/logueate.svg" alt="Logueate">
        </div>
        <div class="login__row--form">
          <div class="login__form" id="form">
            <v-form @submit.prevent="login()" v-if="endVideo">
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
                    :append-icon="showPassword ? 'icon-ojo' : 'icon-ojocerrado'"
                    :type="showPassword ? 'text' : 'password'" 
                    @click:append="showPassword = !showPassword">
                  </v-text-field>
                </div>
              </div>
              <div>
                <v-btn 
                  rounded 
                  :loading="loadingSesion" 
                  color="magenta" 
                  type="submit" 
                  large 
                  depressed
                  class="login__form--submit" 
                  :disabled="!submitEnabled">
                  Iniciar sesión
                </v-btn>
                <!-- <router-link to="/register" class="login__form--register pt-5">No tengo usuario</router-link> -->
              </div>
            </v-form>
          </div>
        </div>
      </div>
    </div>
    <div class="img-prelogin" @click="initExperience()" v-if="!init">
      <img src="@/assets/img/login/pre-login.svg" alt="Pre-Login">
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';
import helperApp from '@/mixins/helperApp';
export default {
  name: 'Login',
  metaInfo() {
    return {
      title: 'Login',
    }
  },
  mixins: [helperApp],
  components: {},
  data() {
    return {
      init: false,
      endVideo: false,
      scrolleable: false,
      loading: true,
      loadingSesion: false,
      user: {
        userName: '',
        password: '',
      },
      showPassword: false,
      enabledScrollTop: false
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
  mounted(){
    setTimeout(() => {
      this.loading = false
    }, 2500);
  },
  methods: {
    initExperience(){
      this.init = true
      this.playVideo()
    },
    async login() {
      this.loadingSesion = true
      try {
        await this.$store.dispatch('user/login', { vm: this, data: this.user })
        this.$router.push({ path: '/' })
        this.loadingSesion = false
        this.$toastr.success('Inicio de sesión exitoso.');
      } catch (err) {
        console.log(err);
        this.loadingSesion = false
        this.$toastr.error('Contraseña incorrecta, volve a intentarlo.');
      }
    },
    playVideo(){
      this.$refs.video.play()
      this.$refs.video.requestFullscreen()
    },
    scrollBottom() {
      if (document.fullscreenElement){
        document.exitFullscreen();
      }
      this.endVideo = true
      setTimeout(() => {
        this.scrolleable = true
        document.getElementById("form").scrollIntoView({ behavior: 'smooth'});
        this.enabledScrollTop = true
      }, 500);
    },
    scrollTop(){
      let scroll = document.getElementById("loginScroll");
      scroll.scrollTo({top: 0, behavior: 'smooth'})
    }
  }
}
</script>

<style lang="scss" scoped>
    @import "./Login";
</style>
<template>
  <div class="webapps" :class="{'justify-center': showVideo}">
    <transition name="fade">
      <div v-if="showVideo" class="webapps__video">
        <video ref="video" poster="@/assets/media/poster.jpg" controls autoplay frameborder="0"
          @ended="showVideo = false">
          <source src="@/assets/media/manifiesto.mp4" type="video/mp4">
        </video>
      </div>
    </transition>
    <transition name="fade">
      <template v-if="!showVideo && !showBehance">
        <div class="webapps__content">
          <div class="webapps__text">
            <h1>¿Cómo te fue en los juegos, <span class="nombre">{{user.name}}?</span> Recordá que todavía <span class="camino">hay camino por
                recorrer.</span></h1>
            <h2>Supongo que ya te diste cuenta que la mochila tiene cosas que te pueden ayudar. Ahora vas a necesitar la
              <span class="libreta">libreta.</span></h2>
          </div>
          <div class="webapps__options">
            <h2>La libreta esta llena de frases. Sólo si descubris cúal es la correcta podrás continuar.</h2>
            <div class="webapps__options--options row">
              <div class="col-6 d-flex align-center justify-center" @click="selectOption(false)">
                <div class="webapps__options--item item-1">
                  <i class="icon-3d"></i>
                </div>
              </div>
              <div class="col-6 d-flex align-center justify-center" @click="selectOption(true)">
                <div class="webapps__options--item item-2">
                  <i class="icon-3d"></i>
                </div>
              </div> 
              <div class="col-6 d-flex align-center justify-center" @click="selectOption(false)">
                <div class="webapps__options--item item-3">
                  <i class="icon-3d"></i>
                </div>
              </div> 
              <div class="col-6 d-flex align-center justify-center" @click="selectOption(false)">
                <div class="webapps__options--item item-4">
                  <i class="icon-3d"></i>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </template>
    </transition>
    <transition name="fade">
      <template v-if="showBehance">
          <div class="webapps__behance">
            <div>
              <div class="webapps__behance--img">
              <img src="@/assets/img/webapps/behance.svg" alt="Behance" @click="goToBehance()">
            </div>
            <div class="webapps__behance--text">
              <h2>En épocas de gran virtualidad dejamos nuestro estilo, nuestro toque, nuestra marca y por sobre todo nuestro <span>Rastro</span> en cada web que realizamos.</h2>              
            </div>
            </div>
            <div class="webapps__behance--btn">
              <v-text-field
                class="input-code"
                color="magenta" 
                maxlength="4" 
                hide-details 
                rounded 
                background-color="white" 
                height="60"
                v-model="code">
              </v-text-field>
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn 
                    rounded 
                    x-large 
                    ripple 
                    color="yellow" 
                    @click="verifyCode()" 
                    v-on="on">
                    Seguir
                  </v-btn>
                </template>
                <span>¿Ya tenés tú código?</span>
              </v-tooltip>
            </div>
          </div>
      </template>
    </transition>
  </div>
</template>

<script>

import { mapState } from 'vuex';
import helperApp from '@/mixins/helperApp';
export default {
  name: 'ExpecienceWebsApps',
  metaInfo() {
    return {
      title: 'WebsApps',
    }
  },
  mixins: [helperApp],
  data() {
    return {
      loading: true,
      showVideo: false,
      showBehance: false,
      code: ''
    };
  },
  computed: {
    ...mapState({
      user: state => state.user.data
    })
  },
  beforeMount(){
    if(this.user.step < 5 ){
      this.$router.replace({ path: '/' })
    }
  },
  methods: {
    selectOption(option){
      if (option){
        this.showBehance = true
        this.$toastr.success('Opción correcta');
      } else{
        this.$toastr.error('No es está opción. Seguí intentando.');
      }
    },
    goToBehance(){
      window.open('https://www.behance.net/somosrastro', '_blank');
    },
    verifyCode() {
      if (this.code == '7514') {
        this.nextStep('fotomontajes', 6)
        this.$toastr.success('Contraseña correcta.');
      } else {
        this.$toastr.error('Contraseña incorrecta, volve a intentarlo.');
      }
    }
  }
}
</script>

<style lang="scss">
    @import "./WebsApps";
</style>
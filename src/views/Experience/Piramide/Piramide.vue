<template>
  <div class="piramide" :class="{'justify-center': showVideo}">
    <transition name="fade">
      <div v-if="showVideo" class="piramide__video">
        <video ref="video" poster="@/assets/media/poster.jpg" controls autoplay frameborder="0"
          @ended="showVideo = false">
          <source src="@/assets/media/manifiesto.mp4" type="video/mp4">
        </video>
      </div>
    </transition>
    <transition name="fade">
      <template v-if="!showVideo">
        <div class="piramide__content">
          <div class="piramide__text">
            <h1><span class="nombre">{{user.name}}</span>, sabemos que no fue fácil, pero si llegaste hasta acá es porque realmente tenés lo necesario.</h1>
            <h2>La <span class="piramideText">piramide</span> que acabas de ver está en tú mochila, utilizala como lo hariamos <span class="nosotros">nosotros</span> para poder abrir la caja.</h2>
          </div>
          <div class="piramide__qr">
            <img src="@/assets/img/visores/qr/qr-sinvisor.svg" alt="Piramide QR">
          </div>
          <div class="piramide__btn">
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn 
                  rounded 
                  x-large 
                  ripple 
                  color="yellow" 
                  @click="dialogCode = true" 
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
    <dialog-code 
      :active.sync="dialogCode" 
      title="Ingresá el código de la pirámide" 
      confirm-text="Validar código" 
      @confirm="verifyCode()">
      <v-text-field 
        class="dialog-content__input" 
        color="#ff445a" 
        maxlength="3" 
        hide-details 
        outlined 
        rounded
        background-color="#dddddd"
        v-model="code">
      </v-text-field>
    </dialog-code>
  </div>
</template>

<script>

import { mapState } from 'vuex';
import helperApp from '@/mixins/helperApp';
import DialogCode from '@/components/Dialogs/DialogCode';
export default {
  name: 'ExpeciencePiramide',
  metaInfo() {
    return {
      title: 'Piramide',
    }
  },
  mixins: [helperApp],
  components: {
    'dialog-code': DialogCode
  },
  data() {
    return {
      loading: true,
      dialogCode: false,
      showVideo: true,
      code: ''
    };
  },
  computed: {
    ...mapState({
      user: state => state.user.data
    })
  },
  beforeMount(){
    if(this.user.step < 6 ){
      this.$router.replace({ path: '/' })
    }
  },
  methods: {
    verifyCode() {
      if (this.code == '743') {
        this.nextStep('final', 7)
        this.$toastr.success('Contraseña correcta.');
      } else {
        this.$toastr.error('Contraseña incorrecta, volve a intentarlo.');
      }
    }
  }
}
</script>

<style lang="scss">
    @import "./Piramide";
</style>
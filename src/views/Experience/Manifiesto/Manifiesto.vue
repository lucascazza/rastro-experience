<template>
  <div class="manifiesto" :class="{'overflow-hidden': !scrolleable}">
    <div class="manifiesto__video row">
      <div class="manifiesto__content--video col-lg-9">
        <video ref="video" poster="@/assets/media/poster.jpg" controls autoplay frameborder="0"
          @ended="endVideo = true">
          <source src="@/assets/media/manifiesto.mp4" type="video/mp4">
        </video>
      </div>
      <div class="manifiesto__content--img col-lg-3">
        <img src="@/assets/img/manifiesto/manifiesto.svg" alt="Manifiesto">
      </div>
      <div class="col-12 manifiesto__content--btn">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn
              rounded
              x-large 
              :ripple="endVideo" 
              :class="{'disabled': !endVideo}"
              :color="!endVideo ? 'disabled' : 'yellow'" 
              v-on="on"
              @click="scrollBottom()">
              Seguir
            </v-btn>
          </template>
          <span v-if="!endVideo">Terminá el video para continuar</span>
          <span v-else>Seguí el camino</span>
        </v-tooltip>
      </div>
    </div>
    <div class="manifiesto__codigo">
      <div class="position-relative">
        <img src="@/assets/img/manifiesto/avanzar.svg" alt="Avanzar" class="img-avanzar">
        <img src="@/assets/img/manifiesto/flecha.svg" alt="Flecha" class="img-flecha">
        <h1 id="codigo">Ingresá el código</h1>
        <v-text-field
          color="#ff445a"
          maxlength="4"
          hide-details
          rounded
          background-color="white"
          height="60"
          v-model="code">
        </v-text-field>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import helperApp from '@/mixins/helperApp';
export default {
  name: 'ExpecienceManifiesto',
  metaInfo() {
    return {
      title: 'Somos Rastro',
    }
  },
  components: {},
  mixins:[helperApp],
  data() {
    return {
      endVideo: false,
      scrolleable: false,
      code: ''
    };
  },
  computed: {
    ...mapState({
      windowWidth: state => state.user.windowWidth
    }),
    isMobile() {
      return this.windowWidth < 992
    }
  },
  watch: {
    code(value){
      if(value.length == 4){
        this.verifyCode()
      }
    }
  },
  mounted(){},
  methods: {
    scrollBottom() {
      if (!this.endVideo) {
        return
      }
      this.scrolleable = true
      document.getElementById("codigo").scrollIntoView({ behavior: 'smooth'});
    },
    verifyCode(){
      if(this.code == '4507'){
        this.nextStep('visores')
      }
    }
  }
}
</script>

<style lang="scss">
    @import "./Manifiesto";
</style>
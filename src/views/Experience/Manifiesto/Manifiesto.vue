<template>
  <div class="manifiesto" :class="{'overflow-hidden': !scrolleable}">
    <div class="manifiesto__video">
      <div class="manifiesto__video--video">
        <video ref="video" poster="@/assets/media/postermanifiesto.jpg" controls autoplay frameborder="0"
          @ended="scrollBottom()">
          <source src="@/assets/media/manifiesto.mp4" type="video/mp4">
        </video>
      </div>
    </div>
    <div class="manifiesto__codigo">
      <div class="position-relative">
        <img src="@/assets/img/manifiesto/avanzar.svg" alt="Avanzar" class="img-avanzar">
        <img src="@/assets/img/manifiesto/flecha.svg" alt="Flecha" class="img-flecha">
        <h1 id="codigo">Ingresá el código <span v-if="codeEnabled">(4507)</span></h1>
        <v-text-field
          class="input-code"
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
      scrolleable: false,
      code: '',
      codeEnabled: false
    };
  },
  computed: {
    ...mapState({
      windowWidth: state => state.user.windowWidth,
      user: state => state.user.data
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
  beforeMount() {
    if (this.user.step < 2) {
      this.$router.replace({ path: '/' })
    }
    if (this.user.step > 2 || this.user.userInvite){
      this.codeEnabled = true
    }
  },
  mounted(){
    this.$refs.video.requestFullscreen()
  },
  methods: {
    scrollBottom() {
      if (document.fullscreenElement){
        document.exitFullscreen();
      }
      setTimeout(() => {
        this.scrolleable = true
        document.getElementById("codigo").scrollIntoView({ behavior: 'smooth'});
      }, 500);
    },
    verifyCode(){
      if(this.code == '4507'){
        this.nextStep('visores', 3)
        this.$toastr.success('Contraseña correcta.');
      } else{
        this.$toastr.error('Contraseña incorrecta, volve a intentarlo.');
      }
    }
  }
}
</script>

<style lang="scss">
    @import "./Manifiesto";
</style>
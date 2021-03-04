<template>
  <div class="manifiesto" :class="{'overflow-hidden': !scrolleable}">
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon @click="dialogLogout = true" large rounded class="logout" v-on="on">
          <v-icon color="white">icon-logout</v-icon>
        </v-btn>
      </template>
      <span>Cerrar sesión</span>
    </v-tooltip>
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
    <dialog-confirm
      :active.sync="dialogLogout"
      title="Estas por cerrar la sesión" 
      content="¿Desea hacerlo?"
      confirm-text="Confirmar"
      cancelText="No cerrar"
      @confirm="logout()">
    </dialog-confirm>
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
      code: ''
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
  beforeMount(){
    if(this.user.step < 2 ){
      this.$router.replace({ path: '/' })
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
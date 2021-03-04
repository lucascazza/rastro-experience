<template>
  <div class="instagram">
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon @click="dialogLogout = true" large rounded class="logout" v-on="on">
          <v-icon color="white">icon-logout</v-icon>
        </v-btn>
      </template>
      <span>Cerrar sesión</span>
    </v-tooltip>
    <div class="instagram__text content">
      <h1>¿Quiénes somos? ¿Qué hacemos? <br> <span>¿Qué %$@”!& es esto?</span></h1>
      <h2>En el camino fuimos dejando algunas respuestas, pero ustedes tienen que <br><span class="rastro">seguir el
          rastro</span> por su cuenta. Podés quedarte mirando nuestro Instagram pero no te cuelgues mucho, el camino es
        largo y seguimos adelante</h2>
      <p>Te dejamos algunos <span class="codigos">códigos</span> que te van a permitir seguirnos el ritmo</p>
    </div>
    <div class="instagram__logo content">
        <div class="instagram__logo--img">
          <img src="@/assets/img/instagram/instagram.svg" alt="Instagram" @click="goToInstagram()">
        </div>
    </div>
    <div class="instagram__logo content">
      <div class="instagram__logo--btn">
        <v-text-field 
          class="input-code" 
          color="#ff445a" 
          maxlength="4" 
          hide-details 
          rounded 
          background-color="white"
          height="60"
          placeholder="Ingresá el código acá"
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
  name: 'ExperienceInstagram',
  metaInfo() {
    return {
      title: 'Instagram',
    }
  },
  mixins: [helperApp],
  components: {},
  data() {
    return {
      loading: true,
      code: ''
    };
  },
  computed: {
    ...mapState({
      user: state => state.user.data
    })
  },
  beforeMount(){
    if(this.user.step < 1 ){
      this.$router.replace({ path: '/' })
    }
  },
  methods: {
    verifyCode() {
      if (this.code == '8585') {
        this.nextStep('manifiesto', 2)
        this.$toastr.success('Contraseña correcta.');
      } else {
        this.$toastr.error('Contraseña incorrecta, volve a intentarlo.');
      }
    },
    goToInstagram(){
      window.open('https://www.instagram.com/somos.rastro/', '_blank');
    }
  }
}
</script>

<style lang="scss">
    @import "./Instagram";
</style>
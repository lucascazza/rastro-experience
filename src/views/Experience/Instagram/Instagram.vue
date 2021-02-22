<template>
  <div class="instagram">
    <div class="instagram__text content">
      <h1>Seguí el <span>Rastro</span> en Instagram.</h1>
      <h2>No te vayas de Instagram sin tu código.</h2>
    </div>
    <div class="instagram__logo content">
            <div>
              <div class="instagram__logo--img">
              <img src="@/assets/img/instagram/instagram.svg" alt="Instagram" @click="goToInstagram()">
            </div>
            <!-- <div class="instagram__logo--text">
              <h2>En épocas de gran virtualidad dejamos nuestro estilo, nuestro toque, nuestra marca y por sobre todo nuestro <span>Rastro</span> en cada web que realizamos.</h2>              
            </div> -->
            </div>
            <div class="instagram__logo--btn">
              <h3>Ingresá el código que encontraste en Instagram</h3>
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
    }
  }
}
</script>

<style lang="scss">
    @import "./Instagram";
</style>
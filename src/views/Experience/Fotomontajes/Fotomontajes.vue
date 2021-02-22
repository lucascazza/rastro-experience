<template>
  <div class="fotomontajes">
    <div class="fotomontajes__text content">
      <h2>Texto desafiandolos a a que encuentren el codigo oculto en uno de los trabajos que les vamos a mostrar a continuacion para ver si estan aptos(?</h2>
    </div>
    <div class="fotomontajes__dragdrop">
      <div class="fotomontajes__dragdrop--recursos">
        
      </div>
      <div class="fotomontajes__dragdrop--lienzo">
        
      </div>
    </div>
    <div class="fotomontajes__btn">
      <v-text-field 
        class="input-code" 
        color="#ff445a" 
        maxlength="4" 
        hide-details 
        rounded background-color="white"
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

<script>

import { mapState } from 'vuex';
import helperApp from '@/mixins/helperApp';
export default {
  name: 'ExpecienceFotomontajes',
  metaInfo() {
    return {
      title: 'Fotomontajes',
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
    if(this.user.step < 6 ){
      this.$router.replace({ path: '/' })
    }
  },
  methods: {
    verifyCode() {
      if (this.code == '2369') {
        this.nextStep('piramide', 7)
        this.$toastr.success('Contraseña correcta.');
      } else {
        this.$toastr.error('Contraseña incorrecta, volve a intentarlo.');
      }
    }
  }
}
</script>

<style lang="scss">
    @import "./Fotomontajes";
</style>
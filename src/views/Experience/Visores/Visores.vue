<template>
  <div class="visores">
    <div class="visores__text">
      <h1><span class="name">{{user.name}}:</span><br> Otras perspectivas te dejan ver nuevas realidades... o <span class="rastro">RASTROS.</span></h1>
      <h2>No te vayas del estudio sin tu código.</h2>
    </div>
    <div class="visores__qr row">
      <div class="col-12 visores__qr--text">
        <h2>Alguién te está buscando, tiene información para importante.</h2>
        <h3>Mirá el video y enterate</h3>
      </div>
      <div class="visores__qr--visor col-md-6">
        <h2>VIDEO <span>CON</span> VISOR</h2>
        <img src="@/assets/img/visores/qr/qr-visores.svg" alt="Visores">
      </div>
      <div class="visores__qr--sinvisor col-md-6">
        <h2>VIDEO <span>SIN</span> VISOR</h2>
        <img src="@/assets/img/visores/qr/qr-sinvisor.svg" alt="Sin visores">
      </div>
      <div class="col-12 visores__qr--btn">
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
    <dialog-code 
      :active.sync="dialogCode" 
      title="¿Encontraste algún código?" 
      content="Mirá en el meet"
      confirm-text="Validar código" 
      @confirm="verifyCode()">
      <v-text-field 
        class="dialog-content__input" 
        color="#ff445a" 
        maxlength="4" 
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
  name: 'ExpecienceVisores',
  metaInfo() {
    return {
      title: 'Visores',
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
      code: ''
    };
  },
  computed: {
    ...mapState({
      user: state => state.user.data
    })
  },
  beforeMount(){
    if(this.user.step < 3 ){
      this.$router.replace({ path: '/' })
    }
  },
  methods: {
    verifyCode() {
      if (this.code == '5555') {
        this.nextStep('juegos', 4)
        this.$toastr.success('Contraseña correcta.');
      } else {
        this.$toastr.error('Contraseña incorrecta, volve a intentarlo.');
      }
    }
  }
}
</script>

<style lang="scss">
    @import "./Visores";
</style>
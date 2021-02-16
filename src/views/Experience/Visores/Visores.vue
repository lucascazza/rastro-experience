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
        <v-btn 
          rounded
          x-large 
          ripple 
          color="yellow"
          @click="dialogCode = true">
          Seguir
        </v-btn>
      </div>
    </div>
    <dialog-code 
      :active.sync="dialogCode" 
      title="¿Te llegó el código?" 
      content="Mirá en tu celular"
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
  methods: {
    verifyCode() {
      if (this.code == '5555') {
        this.nextStep('juegos')
      }
    }
  }
}
</script>

<style lang="scss">
    @import "./Visores";
</style>
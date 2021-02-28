<template>
  <div class="juegos">
    <div class="juegos__text">
      <h2>No todo es buscar codigos y abrir cajas, a veces es necesario <span class="descansar">descansar,</span> jugar un poco y recuperar <span class="energias">energias.</span></h2>
    </div>
    <div class="juegos__img">
      <img class="img-fluid" src="@/assets/img/juegos/logo-pixel.svg" alt="Rastro juegos">
    </div>
    <div class="juegos__text">
      <h2 class="text-2">En la mochila, tenes un pendrive.<br> La <span class="password">password</span> para abrirlo es:</h2>
      <h2 class="contrasena">ajugarconrastro</h2>
    </div>
    <div class="juegos__btn">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn 
            rounded 
            x-large 
            ripple 
            color="yellow" 
            @click="dialogConfirmation = true" 
            v-on="on">
            Seguir
          </v-btn>
        </template>
        <span class="d-flex text-center">¿Te divertiste, {{user.name}}? <br> Bueno es hora de seguir</span>
      </v-tooltip>
    </div>
    <dialog-confirm 
      :active.sync="dialogConfirmation"
      className="dialog-juegos"
      title="Ya terminaste con los juegos?" 
      content="Si lo hiciste podes continuar"
      confirm-text="Confirmar" 
      @confirm="nextStep('webapps', 5)">
    </dialog-confirm>
  </div>
</template>
<script>

import { mapState } from 'vuex';
import helperApp from '@/mixins/helperApp';
import DialogConfirm from '@/components/Dialogs/DialogConfirm';
export default {
  name: 'ExpecienceJuegos',
  metaInfo() {
    return {
      title: 'Juegos',
    }
  },
  mixins: [helperApp],
  components: {
    'dialog-confirm': DialogConfirm
  },
  data() {
    return {
      loading: true,
      dialogConfirmation: false
    };
  },
  computed: {
    ...mapState({
      user: state => state.user.data
    })
  },
  beforeMount(){
    if(this.user.step < 4 ){
      this.$router.replace({ path: '/' })
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
    @import "./Juegos";
</style>
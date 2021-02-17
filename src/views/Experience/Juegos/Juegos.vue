<template>
  <div class="juegos">
    <div class="juegos__text">
      <h1>No todo es buscar codigos y abrir cajas</h1>
      <h2>Es momento de descansar y jugar un poco</h2>
    </div>
    <div class="juegos__img">
      <img class="img-fluid" src="@/assets/img/juegos/logo-pixel.svg" alt="Rastro juegos">
    </div>
    <div class="juegos__text">
      <h2 class="text-2">En la mochila, tenes un USB. La password para abrirlo es:</h2>
      <h2 class="contrasena">Alpheido</h2>
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
      confirm-text="Continuar" 
      @confirm="nextStep('webapps')">
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
  methods: {
  }
}
</script>

<style lang="scss">
    @import "./Juegos";
</style>
<template>
  <div class="juegos">
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon @click="dialogLogout = true" large rounded class="logout" v-on="on">
          <v-icon color="white">icon-logout</v-icon>
        </v-btn>
      </template>
      <span>Cerrar sesión</span>
    </v-tooltip>
    <div style="maxWidth:100%">
      <div class="juegos__text">
        <h2>No todo es buscar codigos y abrir cajas, a veces es necesario <span class="descansar">descansar,</span>
          jugar un poco y recuperar <span class="energias">energias</span></h2>
      </div>
      <div class="juegos__img">
        <img class="img-fluid" src="@/assets/img/juegos/logo-pixel.svg" alt="Rastro juegos">
      </div>
      <div class="juegos__text">
        <h2 class="text-2">En la mochila, tenes un pendrive<br> La <span class="password">password</span> para abrirlo
          es:</h2>
        <h2 class="contrasena">ajugarconrastro</h2>
      </div>
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
    <dialog-confirm
      :active.sync="dialogLogout"
      className="dialog-juegos"
      title="Estas por cerrar la sesion" 
      content="¿Desea hacerlo?"
      confirm-text="Confirmar"
      cancelText="No cerrar"
      @confirm="logout()">
    </dialog-confirm>
    <audio ref="audio" src="@/assets/media/musicajuegos.mp4" autoplay class="musica"></audio>
    </div>
</template>

<script>

import { mapState } from 'vuex';
import helperApp from '@/mixins/helperApp';
export default {
  name: 'ExpecienceJuegos',
  metaInfo() {
    return {
      title: 'Juegos',
    }
  },
  mixins: [helperApp],
  components: {},
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
  }
}
</script>

<style lang="scss">
    @import "./Juegos";
</style>
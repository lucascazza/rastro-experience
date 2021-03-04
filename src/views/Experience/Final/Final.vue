<template>
  <div class="final">
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon @click="dialogLogout = true" large rounded class="logout" v-on="on">
          <v-icon color="white">icon-logout</v-icon>
        </v-btn>
      </template>
      <span>Cerrar sesión</span>
    </v-tooltip>
    <div class="final__content">
      <div class="final__text content">
        <h1 class="text-center">¡Felicidades <span>{{user.name}}!</span></h1>
        <h2>Pudiste completar el camino y conseguir el código más importante de todos. Con ese código, vas a poder
          descubrir qué hay dentro de la <span class="caja">caja</span> y encontrar esto que nunca querrías que se
          pierda, pero por suerte eso ya no va a ser un problema</h2>
        <p>¡No pierdas más tiempo y abrí la caja!</p>
      </div>
      <div class="final__btn">
        <div class="final__btn">
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn rounded x-large ripple color="yellow" @click="dialogCode = true" v-on="on">
                ¿Te olvidaste el código?
              </v-btn>
            </template>
            <span>¡Felicidades! acá esta de nuevo tú código</span>
          </v-tooltip>
          <v-btn rounded outlined x-large ripple color="magenta" to="/">Volver al inicio</v-btn>
        </div>
      </div>
    </div>
    <dialog-code 
      :active.sync="dialogCode" 
      title="El código de la caja es..." 
      content="743"
      confirm-text="¡Gracias RASTRO!">
    </dialog-code>
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
import DialogCode from '@/components/Dialogs/DialogCode';
export default {
  name: 'ExpecienceFinal',
  metaInfo() {
    return {
      title: 'Final',
    }
  },
  mixins: [helperApp],
  components: {
    'dialog-code': DialogCode
  },
  data() {
    return {
      loading: true,
      dialogCode: false
    };
  },
  computed: {
    ...mapState({
      user: state => state.user.data
    })
  },
  beforeMount(){
    if(this.user.step < 8 ){
      this.$router.replace({ path: '/' })
    }
  },
  methods: {}
}
</script>

<style lang="scss">
    @import "./Final";
</style>
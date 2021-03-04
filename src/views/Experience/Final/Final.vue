<template>
  <div class="final">
    <div class="final__text content">
      <h1 class="text-center">¡Felicidades <span>{{user.name}}!</span></h1>
      <h2>Pudiste completar el camino y conseguir el código más importante de todos. Con ese código, vas a poder descubrir qué hay dentro de la <span class="caja">caja</span> y encontrar esto que nunca querrías que se pierda, pero por suerte eso ya no va a ser un problema</h2>
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
    <dialog-code 
      :active.sync="dialogCode" 
      title="El código de la caja es..."
      content="743"
      confirm-text="¡Gracias RASTRO!">
    </dialog-code>
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
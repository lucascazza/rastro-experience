<template>
  <div class="final">
    <div class="final__text content">
      <h1>Hola de nuevo <br><span class="name">{{user.name}}</span></h1>
      <h2>Lograste completar el camino y bla bla bla bla bla bla, te acordas el código de recien? es un código maestro y
        sirve para poder descubrir que hay dentro de la caja. y cosas mas lindas y mejor escritas pero ya estoy
        cansadito y no tenia mas ganas de pensar y por eso tampoco volvi a poner un tilde :D</h2>
    </div>
    <div class="final__btn">
      <div class="final__btn">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn rounded x-large ripple color="yellow" @click="dialogCode = true" v-on="on">
              ¿Te olvidaste el código?
            </v-btn>
          </template>
          <span>¡Felicidades! acá esta de nuevo tú código.</span>
        </v-tooltip>
        <v-btn rounded x-large ripple color="green" to="/">Volver al inicio</v-btn>
      </div>
    </div>
    <dialog-code 
      :active.sync="dialogCode" 
      title="Tu código maestro es..."
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
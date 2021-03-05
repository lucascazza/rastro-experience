<template>
  <div class="home">
    <loading v-if="loading"></loading>
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon @click="dialogLogout = true" large rounded class="logout" v-on="on">
          <v-icon color="white">icon-logout</v-icon>
        </v-btn>
      </template>
      <span>Cerrar sesión</span>
    </v-tooltip>
    <div class="home__content">
      <transition name="fade">
        <div v-if="user.step !== 8">
          <h1 class="text-center">Hola <span class="nombre">{{user.name}}</span> ¿Cómo estás?</h1>
          <h2>Te trajimos acá porque queremos que recuperes algo que puede perderse fácilmente. Ese algo está dentro de esa linda <span class="caja">caja,</span> pero dártelo y ya haría que no le des la importancia que merece. <br>Por eso queremos mostrarte un recorrido que <span class="nosotros">nosotros ya hicimos</span>, y que sabemos que te va a ayudar</h2>
          <p>Una vez completado van a ser <span class="merecer">merecedores</span> de abrir la caja</p>
          <div class="d-flex justify-center">
            <v-btn v-if="user.step !== 0" :loading="loadingSesion" color="yellow" x-large ripple rounded outlined @click="loadingSesion = true; continueExperience()">Continuar
              recorrido</v-btn>
            <v-btn v-if="user.step == 0" :loading="loadingSesion" color="yellow" x-large ripple @click="loadingSesion = true; nextStep('experience/instagram', 1)"
              rounded>Comenzar experiencia</v-btn>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div v-if="user.step == 8">
          <h1 class="text-center seguis"><span>{{user.name}},</span>vemos que seguís por acá...</h1>
          <h2 class="fin">Con el botón <span class="ver">ver recorrido</span> podrás volver a ver cada momento que te perdiste,<br>y con el de <span class="reiniciar">reiniciar experiencia,</span> comenzarás de 0</h2>
          <div class="d-flex flex-column align-center">
            <v-btn color="yellow" x-large ripple rounded to="/experience/instagram">Ver recorrido</v-btn>
            <v-btn color="magenta" outlined x-large ripple @click="restartExperience()" rounded>Reiniciar experiencia</v-btn>
          </div>
        </div>
      </transition>
    </div>
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
export default {
  name: 'Home',
  metaInfo() {
    return {
      title: 'Inicio',
    }
  },
  components: {},
  mixins: [helperApp],
  data() {
    return {
      loadingSesion: false
    };
  },
  computed: {
    ...mapState({
      user: state => state.user.data
    })
  },
  mounted() {
    setTimeout(() => {
      this.loading = false      
    }, 2500);
    this.loadData()
  },
  methods: {
    async loadData() {
      try {
        await this.$store.dispatch('user/loadData', { vm: this })
        this.loadingSesion = false
      } catch (err) {
        console.log(err);
        this.loadingSesion = false
      }
    },
    continueExperience() {
      switch (this.user.step) {
        case 1:
          this.$router.push({ path: '/experience/instagram' });
          break
        case 2:
          this.$router.push({ path: '/experience/manifiesto' });
          break
        case 3:
          this.$router.push({ path: '/experience/visores' });
          break
        case 4:
          this.$router.push({ path: '/experience/juegos' });
          break
        case 5:
          this.$router.push({ path: '/experience/webapps' });
          break
        case 6:
          this.$router.push({ path: '/experience/fotomontajes' });
          break
        case 7:
          this.$router.push({ path: '/experience/piramide' });
          break
      }
    }
  }
}
</script>

<style lang="scss">
    @import "./Home";
</style>
<template>
  <transition name="fade">
    <div class="home" v-if="!loading">
      <div class="home__content">
        <h1>Hola <span>{{user.name}}</span> ¿Cómo estás?</h1>
        <p>Te elegimos por tus habilidades.<br> Esta es la experiencia <span>Rastro</span>, queremos mostrarles una
          aventura que ya recorrimos, y queremos que ustedes también la recorran. Si lo hacen, les daremos la
          posibilidad de abrir la caja.</p>
        <v-btn v-if="user.step !== 0" color="yellow" x-large ripple rounded @click="continueExperience()">Continuar recorrido</v-btn>
        <v-btn v-if="user.step == 0" color="yellow" x-large ripple @click="start()" rounded>Comenzar experiencia</v-btn>
      </div>
    </div>
  </transition>
</template>

<script>

import { mapState } from 'vuex';
import helperApp from '@/mixins/helperApp';
export default {
  name: 'Home',
  metaInfo() {
    return {
      title: 'Home',
    }
  },
  components: {},
  mixins: [helperApp],
  data() {
    return {
      loading: true
    };
  },
  computed: {
    ...mapState({
      user: state => state.user.data
    })
  },
  mounted() {
    this.loadData()
  },
  methods: {
    async loadData() {
      try {
        await this.$store.dispatch('user/loadData', {
          vm: this
        })
        this.loading = false
      } catch (err) {
        console.log(err);
        this.loading = false
      }
    },
    start(){
      this.$router.push({ path: '/experience/manifiesto' })
    },
    continueExperience() {
      let step = this.user.step
      if (step == 1) {
        this.$router.push({
          path: '/experience/manifiesto'
        })
      } else if (step == 2) {
        this.$router.push({
          path: '/experience/visores'
        })
      }
    }
  }
}
</script>

<style lang="scss">
    @import "./Home";
</style>
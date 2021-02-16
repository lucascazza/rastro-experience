<template>
  <div class="juegos">
    <div class="juegos__text">
      <h1>No todo es buscar codigos y abrir cajas</h1>
      <h2>Es momento de descansar y jugar un poco</h2>
    </div>
    <div class="juegos__img">
      <img class="img-fluid" src="@/assets/img/juegos/rastrojuegos.png" alt="Rastro juegos">
    </div>
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
  data() {
    return {
      loading: true,
      code: ''
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
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
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';
import helperApp from '@/mixins/helperApp';
export default {
  name: 'ExpecienceVisores',
  metaInfo() {
    return {
      title: 'Visores',
    }
  },
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
}
</script>

<style lang="scss">
    @import "./Visores";
</style>
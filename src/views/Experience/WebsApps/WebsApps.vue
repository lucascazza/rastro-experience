<template>
  <div class="webapps">
    <transition name="fade">
      <template v-if="!showBehance">
        <div class="webapps__content">
          <div class="webapps__text">
            <h2>¿Ya descansaste lo suficiente, <span class="nombre">{{user.name}}?</span><br> No te duermas que la <span class="caja">caja</span> te espera.</h2>
            <h3>Suponemos que ya te diste cuenta que la mochila tiene cosas útiles para el camino, como la <span class="libreta">libreta</span> que tiene la respuesta para el siguiente paso.</h3>
            <p>La libreta está llena de <span class="frases">frases.</span> Sólo si descubrís cuál nos representa podrás continuar.</p>
          </div>
          <div class="webapps__options">
            <div class="webapps__options--options row">
              <div class="col-6 d-flex align-center justify-center" @click="selectOption(false)">
                <div class="webapps__options--item item-1">
                  <i class="icon-toro"></i>
                </div>
              </div>
              <div class="col-6 d-flex align-center justify-center" @click="selectOption(true)">
                <div class="webapps__options--item item-2">
                  <i class="icon-rastro"></i>
                </div>
              </div> 
              <div class="col-6 d-flex align-center justify-center" @click="selectOption(false)">
                <div class="webapps__options--item item-3">
                  <i class="icon-punnix"></i>
                </div>
              </div> 
              <div class="col-6 d-flex align-center justify-center" @click="selectOption(false)">
                <div class="webapps__options--item item-4">
                  <i class="icon-lobo"></i>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </template>
    </transition>
    <transition name="fade">
      <template v-if="showBehance">
          <div class="webapps__behance">
            <div class="webapps__behance--text">
              <h2>En esta época de tanta virtualidad es importante que dejemos nuestro estilo, nuestra marca, <span>nuestro rastro</span> <br>en cada rincón del internet.</h2>
            </div>
            <div class="webapps__behance--img">
              <img src="@/assets/img/webapps/behance.svg" alt="Behance" @click="goToBehance()">
            </div>
            <div class="webapps__behance--btn">
              <v-text-field
                class="input-code"
                color="magenta" 
                maxlength="4" 
                hide-details 
                rounded 
                background-color="white" 
                height="60"
                v-model="code">
              </v-text-field>
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn 
                    rounded 
                    x-large 
                    ripple 
                    color="yellow" 
                    @click="verifyCode()" 
                    v-on="on">
                    Seguir
                  </v-btn>
                </template>
                <span>¿Ya tenés tú código?</span>
              </v-tooltip>
            </div>
          </div>
      </template>
    </transition>
  </div>
</template>

<script>

import { mapState } from 'vuex';
import helperApp from '@/mixins/helperApp';
export default {
  name: 'ExpecienceWebsApps',
  metaInfo() {
    return {
      title: 'WebsApps',
    }
  },
  mixins: [helperApp],
  data() {
    return {
      loading: true,
      showBehance: false,
      code: ''
    };
  },
  computed: {
    ...mapState({
      user: state => state.user.data
    })
  },
  beforeMount(){
    if(this.user.step < 5 ){
      this.$router.replace({ path: '/' })
    }
  },
  methods: {
    selectOption(option){
      if (option){
        this.showBehance = true
        this.$toastr.success('Opción correcta');
      } else{
        this.$toastr.error('No es está opción. Seguí intentando.');
      }
    },
    goToBehance(){
      window.open('https://www.behance.net/somosrastro', '_blank');
    },
    verifyCode() {
      if (this.code == '7514') {
        this.nextStep('fotomontajes', 6)
        this.$toastr.success('Contraseña correcta.');
      } else {
        this.$toastr.error('Contraseña incorrecta, volve a intentarlo.');
      }
    }
  }
}
</script>

<style lang="scss">
    @import "./WebsApps";
</style>
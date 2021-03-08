<template>
  <div class="visores">
    <loading v-if="loading"></loading>
    <div class="visores__text">
      <h2>Otras <span class="prespectivas">perspectivas</span> te dejan ver nuevas realidades, soluciones, o caminos</h2>
      <h3>No sos la única persona en esta <span class="busqueda">búsqueda</span>, alguien te está buscando y parece tener
        información importante. Mirá el video y enterate</h3>
      <p>Te recomendamos el uso de <span class="auriculares">auriculares</span> para mejorar la experiencia</p>
    </div>
    <div class="visores__qr row">
      <div class="visores__qr--visor col-md-12">
        <h2 class="mb-0">Video <span>con</span> visor</h2>
        <img src="@/assets/img/visores/qr/qr.svg" alt="Visores">
        <v-btn rounded outlined large color="white" @click="goToYoutube()" v-if="isMobile">¿Mirarlo sin visor? Ir a Youtube <v-icon class="ml-3" right>icon-arrow-right</v-icon></v-btn>
        <v-btn rounded outlined large color="white" @click="goToYoutube()" v-else>¿No tenés visor o te marea usarlo? Miralo en YouTube <v-icon class="ml-3" right>icon-arrow-right</v-icon></v-btn>
      </div>
    </div>
    <div class="visores__qr--btn">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn 
              rounded
              x-large 
              ripple 
              color="yellow"
              @click="dialogCode = true"
              v-on="on">
              Seguir
            </v-btn>
          </template>
          <span>¿Ya tenés tú código?</span>
        </v-tooltip>
      </div>
    <dialog-code 
      :active.sync="dialogCode" 
      title="¿Encontraste algún código?" 
      :content="user.userInvite ? '' : 'Mirá en el meet'"
      confirm-text="Validar código" 
      @confirm="verifyCode()">
      <v-text-field 
        class="dialog-content__input input-code" 
        color="#ff445a" 
        maxlength="4" 
        hide-details
        :disabled="disabledCode" 
        outlined 
        rounded
        placeholder="Ingresá el código"
        v-model="code">
      </v-text-field>
    </dialog-code>
  </div>
</template>

<script>

import { mapState } from 'vuex';
import helperApp from '@/mixins/helperApp';
import DialogCode from '@/components/Dialogs/DialogCode';
export default {
  name: 'ExpecienceVisores',
  metaInfo() {
    return {
      title: 'Visores',
    }
  },
  mixins: [helperApp],
  components: {
    'dialog-code': DialogCode
  },
  data() {
    return {
      dialogCode: false,
      code: ''
    };
  },
  computed: {
    ...mapState({
      user: state => state.user.data,
      windowWidth: state => state.user.windowWidth
    }),
    isMobile() {
      return this.windowWidth < 992
    }
  },
  beforeMount(){
    if(this.user.step < 3 ){
      this.$router.replace({ path: '/' })
    }
    if (this.user.step > 3 || this.user.userInvite){
      this.code = '5555'
      this.disabledCode = true
    }
  },
  mounted(){
    setTimeout(() => {
      this.loading = false      
    }, 2500);
  },
  methods: {
    verifyCode() {
      if (this.code == '5555') {
        this.nextStep('juegos', 4)
        this.$toastr.success('Contraseña correcta.');
      } else {
        this.$toastr.error('Contraseña incorrecta, volve a intentarlo.');
      }
    },
    goToYoutube(){
      window.open('https://youtu.be/rU_6Gn3BD9o', '_blank');
    }
  }
}
</script>

<style lang="scss">
    @import "./Visores";
</style>
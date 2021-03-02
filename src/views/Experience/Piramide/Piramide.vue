<template>
  <div class="piramide">
    <transition name="fade">
      <template>
        <div class="piramide__content">
          <div class="piramide__text">
            <h2><span class="name">{{user.name}},</span> ya casi estás listx para abrir la caja. El próximo paso va a ser el <span class="ultimo">último</span> de la experiencia.</h2>
            <h3>Si ya estuviste chusmeando la mochila seguramente viste la <span class="piramidetext">piramide,</span> esa es la llave para el último código.</h3>
            <p>Te dejamos una <span class="guia">guía</span> para ver cómo se usa la pirámide.</p>
          </div>
          <div class="piramide__qr">
            <img src="@/assets/img/visores/qr/qr-sinvisor.svg" alt="Piramide QR">
          </div>
          <div class="piramide__btn">
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
        </div>
      </template>
    </transition>
    <dialog-code 
      :active.sync="dialogCode" 
      title="Ingresá el código de la pirámide" 
      confirm-text="Validar código" 
      @confirm="verifyCode()">
      <v-text-field 
        class="dialog-content__input" 
        color="#ff445a" 
        maxlength="3" 
        hide-details 
        outlined 
        rounded
        background-color="#dddddd"
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
  name: 'ExpeciencePiramide',
  metaInfo() {
    return {
      title: 'Piramide',
    }
  },
  mixins: [helperApp],
  components: {
    'dialog-code': DialogCode
  },
  data() {
    return {
      loading: true,
      dialogCode: false,
      code: ''
    };
  },
  computed: {
    ...mapState({
      user: state => state.user.data
    })
  },
  beforeMount(){
    console.log(this.user.step)
    if(this.user.step < 7 ){
      this.$router.replace({ path: '/' })
    }
  },
  methods: {
    verifyCode() {
      if (this.code == '743') {
        this.nextStep('final', 8)
        this.$toastr.success('Contraseña correcta.');
      } else {
        this.$toastr.error('Contraseña incorrecta, volve a intentarlo.');
      }
    }
  }
}
</script>

<style lang="scss">
    @import "./Piramide";
</style>
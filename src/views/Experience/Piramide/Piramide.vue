<template>
  <div class="piramide">
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon @click="dialogLogout = true" large rounded class="logout" v-on="on">
          <v-icon color="white">icon-logout</v-icon>
        </v-btn>
      </template>
      <span>Cerrar sesión</span>
    </v-tooltip>
    <transition name="fade">
      <template>
        <div class="piramide__content">
          <div class="piramide__text">
            <h2>{{user.name}}, ya casi estás listx <br>para abrir <span class="caja">la caja.</span> El próximo paso<br> será el último</h2>
            <h3>Si ya estuviste chusmeando la mochila seguramente<br> viste la pirámide...</h3>
            <div class="piramide__text--guia">
              <p>¡Esa es la <span class="llave">llave</span> para el último código!</p>
              <v-btn
                outlined
                rounded 
                large 
                ripple 
                color="white"
                @click="dialogGuia = true">
                <v-icon left class="mr-3">icon-ojo</v-icon>
                Cómo usar la pirámide
              </v-btn>
            </div>
          </div>
          <div class="piramide__qr">
            <img src="@/assets/img/piramide/qr/qr.svg" alt="Pirámide QR">
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
        placeholder="Ingresá el código"
        background-color="#dddddd"
        v-model="code">
      </v-text-field>
    </dialog-code>
    <dialog-guia :active.sync="dialogGuia"></dialog-guia>
    <dialog-confirm
      :active.sync="dialogLogout"
      title="Estas por cerrar la sesion" 
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
import DialogGuia from '@/components/Dialogs/DialogGuia';
export default {
  name: 'ExpeciencePiramide',
  metaInfo() {
    return {
      title: 'Pirámide',
    }
  },
  mixins: [helperApp],
  components: {
    'dialog-code': DialogCode,
    'dialog-guia': DialogGuia
  },
  data() {
    return {
      loading: true,
      dialogCode: false,
      code: '',
      dialogGuia: false
    };
  },
  computed: {
    ...mapState({
      user: state => state.user.data
    })
  },
  beforeMount(){
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
<template>
  <div class="fotomontajes">
    <div class="fotomontajes__text content">
      <h2>Texto desafiandolos a a que encuentren el codigo oculto en uno de los trabajos que les vamos a mostrar a continuacion para ver si estan aptos(?</h2>
    </div>
    <div class="fotomontajes__dragdrop content">
      <div class="fotomontajes__dragdrop--select">
        <div v-for="(item, i) in fotomontajes" :key="i">
          <div class="select-fotomontaje" @click="selectFotomontaje(item)">
            {{i + 1}}
          </div>
        </div>
      </div>
      <transition name="fade">
        <div class="selectedFoto" v-if="selectedFoto.name">
          <div class="selectedFoto__recursos">
            <div class="selectedFoto__recursos--img" v-for="img in selectedFoto.recursos" :key="img._id">
              <img :src="`/fotomontajes/${selectedFoto.name}/${img.src}`" :alt="img.name">
            </div>
          </div>
          <div class="selectedFoto__lienzo content">
            <div class="selectedFoto__lienzo--empty" v-if="arrayFoto.length == 0">
              <div class="selectedFoto__lienzo--text">
                <h2>Arrastra las imágenes para ir descubriendo lo que esconden</h2>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div class="fotomontajes__btn">
      <v-text-field 
        class="input-code" 
        color="#ff445a" 
        maxlength="4" 
        hide-details 
        rounded background-color="white"
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

<script>

import { mapState } from 'vuex';
import helperApp from '@/mixins/helperApp';
export default {
  name: 'ExpecienceFotomontajes',
  metaInfo() {
    return {
      title: 'Fotomontajes',
    }
  },
  mixins: [helperApp],
  components: {},
  data() {
    return {
      loading: true,
      code: '',
      selectedFoto: {},
      arrayFoto: [],
      fotomontajes: [
        {
          name: 'alicia',
          type: 'image',
          recursos: [
            {
              src: 'alicia1.png',
              _id: 1,
              name: 'Alicia 1'
            },
            {
              src: 'alicia2.png',
              _id: 2,
              name: 'Alicia 2'
            },
            {
              src: 'alicia3.png',
              _id: 3,
              name: 'Alicia 3'
            },
            {
              src: 'alicia4.png',
              _id: 4,
              name: 'Alicia 4'
            },
            {
              src: 'alicia5.png',
              _id: 5,
              name: 'Alicia 5'
            }
          ]
        },
        {
          name: 'otro1',
          type: 'image',
          recursos: [
            {
              src: 'alicia1.png',
              _id: 1,
              name: 'Alicia 1'
            },
            {
              src: 'alicia2.png',
              _id: 2,
              name: 'Alicia 2'
            },
            {
              src: 'alicia3.png',
              _id: 3,
              name: 'Alicia 3'
            },
            {
              src: 'alicia4.png',
              _id: 4,
              name: 'Alicia 4'
            },
            {
              src: 'alicia5.png',
              _id: 5,
              name: 'Alicia 5'
            }
          ]
        },
        {
          name: 'otro2',
          type: 'image',
          recursos: [
            {
              src: 'alicia1.png',
              _id: 1,
              name: 'Alicia 1'
            },
            {
              src: 'alicia2.png',
              _id: 2,
              name: 'Alicia 2'
            },
            {
              src: 'alicia3.png',
              _id: 3,
              name: 'Alicia 3'
            },
            {
              src: 'alicia4.png',
              _id: 4,
              name: 'Alicia 4'
            },
            {
              src: 'alicia5.png',
              _id: 5,
              name: 'Alicia 5'
            }
          ]
        }
      ]
    };
  },
  computed: {
    ...mapState({
      user: state => state.user.data
    })
  },
  beforeMount(){
    if(this.user.step < 6 ){
      this.$router.replace({ path: '/' })
    }
  },
  methods: {
    selectFotomontaje(item){
      console.log(item)
      this.selectedFoto = item
    },
    verifyCode() {
      if (this.code == '2369') {
        this.nextStep('piramide', 7)
        this.$toastr.success('Contraseña correcta.');
      } else {
        this.$toastr.error('Contraseña incorrecta, volve a intentarlo.');
      }
    }
  }
}
</script>

<style lang="scss">
    @import "./Fotomontajes";
</style>
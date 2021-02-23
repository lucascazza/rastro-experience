<template>
  <div class="fotomontajes">
    <div class="fotomontajes__text content">
      <h2>Texto desafiandolos a a que encuentren el codigo oculto en uno de los trabajos que les vamos a mostrar a continuacion para ver si estan aptos(?</h2>
    </div>
    <div class="fotomontajes__dragdrop">
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
            <div class="selectedFoto__recursos--img" 
              v-for="(img, i) in selectedFoto.recursos" 
              :key="img.i"
              @click="selectImage(img)"
              :class="[
              {'disabled': imgSelected.i < i || (!imgSelected.i && i !== 0)},
              {'seleccionable': imgSelected.i == i || (!imgSelected.i && i == 0)},
              {'active':  imgSelected.i && imgSelected.i == i + 1}]">
              <img :src="`/fotomontajes/${selectedFoto.name}/${img.src}`" :alt="img.name">
            </div>
          </div>
          <div class="selectedFoto__lienzo">
            <div class="selectedFoto__lienzo--empty" v-if="!imgSelected.i">
              <div class="selectedFoto__lienzo--text">
                <h2>Arrastra las imágenes para ir descubriendo lo que esconden</h2>
              </div>
            </div>
            <div v-else class="selectedFoto__lienzo--img">
              <img :src="`/fotomontajes/${selectedFoto.name}/${imgSelected.src}`" :alt="imgSelected.name">
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
      imgSelected: {},
      fotomontajes: [
        {
          name: 'alicia',
          type: 'image',
          recursos: [
            {
              src: 'alicia1.jpg',
              i: 1,
              name: 'Alicia 1'
            },
            {
              src: 'alicia2.jpg',
              i: 2,
              name: 'Alicia 2'
            },
            {
              src: 'alicia3.jpg',
              i: 3,
              name: 'Alicia 3'
            },
            {
              src: 'alicia4.jpg',
              i: 4,
              name: 'Alicia 4'
            },
            {
              src: 'alicia5.jpg',
              i: 5,
              name: 'Alicia 5'
            }
          ]
        },
        {
          name: 'otro1',
          type: 'image',
          recursos: [
            {
              src: 'alicia1.jpg',
              i: 1,
              name: 'Alicia 1'
            },
            {
              src: 'alicia2.jpg',
              i: 2,
              name: 'Alicia 2'
            },
            {
              src: 'alicia3.jpg',
              i: 3,
              name: 'Alicia 3'
            },
            {
              src: 'alicia4.jpg',
              i: 4,
              name: 'Alicia 4'
            },
            {
              src: 'alicia5.jpg',
              i: 5,
              name: 'Alicia 5'
            }
          ]
        },
        {
          name: 'otro2',
          type: 'image',
          recursos: [
            {
              src: 'alicia1.jpg',
              i: 1,
              name: 'Alicia 1'
            },
            {
              src: 'alicia2.jpg',
              i: 2,
              name: 'Alicia 2'
            },
            {
              src: 'alicia3.jpg',
              i: 3,
              name: 'Alicia 3'
            },
            {
              src: 'alicia4.jpg',
              i: 4,
              name: 'Alicia 4'
            },
            {
              src: 'alicia5.jpg',
              i: 5,
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
  mounted(){
    this.selectedFoto = this.fotomontajes[0]
  },
  methods: {
    selectFotomontaje(item){
      this.imgSelected = {}
      this.selectedFoto = item
    },
    selectImage(img){
      if (!this.imgSelected.i && img.i > 1 || img.i == this.imgSelected.i){
        return
      }
      this.imgSelected = img
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
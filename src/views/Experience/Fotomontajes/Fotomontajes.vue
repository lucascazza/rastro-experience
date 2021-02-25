<template>
  <div class="fotomontajes">
    <div class="fotomontajes__text content">
      <h2>Texto desafiandolos a a que encuentren el codigo oculto en uno de los trabajos que les vamos a mostrar a continuacion para ver si estan aptos(?</h2>
    </div>
    <div class="fotomontajes__dragdrop">
      <div class="fotomontajes__dragdrop--select">
        <div v-for="(item, i) in fotomontajes" :key="i">
          <div class="select-fotomontaje" @click="selectFotomontaje(item)" :class="[{'disabled': !item.enabled}, {'active': selectedFoto._id == i +1}]">
            {{i + 1}}
          </div>
        </div>
      </div>
      <transition name="fade">
        <div class="selectedFoto" v-if="selectedFoto.name">
          <div class="selectedFoto__recursos">
              <drag 
                class="selectedFoto__recursos--img drag"
                v-for="(img, i) in selectedFoto.recursos" :key="img.i"
                :data="img" 
                :class="[
                {'disabled': imgSelected.i < i || (!imgSelected.i && i !== 0)},
                {'seleccionable': imgSelected.i == i || (!imgSelected.i && i == 0)},
                {'active':  imgSelected.i && imgSelected.i == i + 1}]">
                <img :src="`/fotomontajes/${selectedFoto.name}/${img.src}`" :alt="img.name">
              </drag>
          </div>
          <drop @drop="selectImage">
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
          </drop>
        </div>
      </transition>
    </div>
    <transition name="fade">
      <div v-if="enableVfx" class="vfx">
        <div class="vfx__select">
          <div v-for="(item, i) in fotomontajes" :key="i">
            <div class="vfx__select--selected">
              {{i + 1}}
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div class="fotomontajes__btn">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn 
            rounded 
            x-large 
            ripple 
            color="yellow" 
            @click="next()" 
            v-on="on"
            :class="{'disabled': !completePage}">
            Seguir
          </v-btn>
        </template>
        <span v-if="completePage">¡Bien hecho! Podés seguir</span>
        <span v-else>Terminá los desafíos para continuar...</span>
      </v-tooltip>
    </div>
  </div>
</template>

<script>

import { Drag, Drop, DropMask } from 'vue-easy-dnd';
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
  components: {
    Drag,
    Drop,
    DropMask
  },
  data() {
    return {
      loading: true,
      code: '',
      selectedFoto: {},
      imgSelected: {},
      enableVfx: false,
      completePage: false,
      fotomontajes: [
        {
          _id: 1, 
          name: 'alicia',
          type: 'image',
          enabled: true,
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
          _id: 2,
          name: 'otro1',
          type: 'image',
          enabled: false,
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
          _id: 3,
          name: 'otro2',
          type: 'image',
          enabled: false,
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
    next(){
      if (!completePage){
        return 
      } else {
        this.nextStep('piramide', 7)
      }
    },
    selectFotomontaje(item) {
      if (!item.enabled || item._id == this.selectedFoto._id) {
        return
      }
      this.imgSelected = {}
      this.selectedFoto = item
    },
    selectImage(img){
      if (!this.imgSelected.i && img.data.i > 1 || img.data.i > this.imgSelected.i + 1){
        return
      }
      this.imgSelected = img.data
      if (img.data.i == 5){
        let index = this.selectedFoto._id
        if (index < 3){
          this.fotomontajes[index].enabled = true
        } else if (index == 3){
          this.enableVfx = true
        }
      }
    }
  }
}
</script>

<style lang="scss">
    @import "./Fotomontajes";
</style>
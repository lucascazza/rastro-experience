<template>
  <div class="fotomontajes">
    <div class="fotomontajes__text content">
      <h2>“El todo es más que la suma de sus partes”</h2>
      <h3>Es importante siempre tener en cuenta el <span class="esfuerzo">esfuerzo</span> que realizamos para llegar a ese objetivo.</h3>
    </div>
    <div class="fotomontajes__dragdrop">
      <div class="fotomontajes__dragdrop--select">
        <div v-for="(item, i) in fotomontajes" :key="i">
          <div class="select-fotomontaje" @click="selectFotomontaje(item)" :class="[{'disabled': !item.enabled}, {'active': selectedFoto._id == i + 1}]">
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
                  <h2>Arrastrá acá las imágenes para ir descubriendo lo que esconden.</h2>
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
          <div v-for="(video, i) in videosArray" :key="i">
            <div class="vfx__select--selected"
              @click="selectVideo(video)"
              :class="[
              {'disabled': !video.enabled},
              {'active': videoPlaying._id == (i + 1)}]">
              {{i + 1}}
            </div>
          </div>
        </div>
        <transition name="fade">
          <div v-if="videoPlaying.name == 'taza'" class="vfx__selectVideo">
            <div class="vfx__btns">
              <div>
                <v-btn rounded large ripple color="yellow" @click="playVideo()" :disabled="loadVideo != 2"
                  :class="{'disabled': loadVideo != 2}">
                  Play
                </v-btn>
                <v-btn rounded large ripple color="magenta" @click="pauseVideo()" :disabled="loadVideo != 2"
                  :class="{'disabled': loadVideo != 2}">
                  Pausa
                </v-btn>
              </div>
            </div>
            <div class="vfx__videos content">
              <div class="vfx__videos--efectos" :style="{width: slide.val + '%'}" :class="{'drag-slide': dragSlide}">
                <video ref="video" loop frameborder="0" muted @loadeddata="loadFinish()">
                  <source src="@/assets/media/vfx/taza/taza-efecto.mp4" type="video/mp4">
                </video>
              </div>
              <div class="vfx__videos--sinefectos">
                <video ref="videoO" loop frameborder="0" muted @loadeddata="loadFinish()">
                  <source src="@/assets/media/vfx/taza/taza-sinefecto.mp4" type="video/mp4">
                </video>
              </div>
            </div>
            <v-slider @start="slideStart" @end="slideEnd" hide-details class="slide-vfx" v-model="slide.val" :color="slide.color" :track-color="slide.trackColor"></v-slider>
            <p class="mb-0 text-center"><i class="icon-compare-arrows mr-2"></i>Mové el slide y descrubrí</p>
          </div>
        </transition>
        <transition name="fade">
          <div v-if="videoPlaying.name == 'barco'" class="vfx__selectVideo">
            <div class="vfx__btns">
              <div>
                <v-btn rounded large ripple color="yellow" @click="playVideo()" :disabled="loadVideo != 2"
                  :class="{'disabled': loadVideo != 2}">
                  Play
                </v-btn>
                <v-btn rounded large ripple color="magenta" @click="pauseVideo()" :disabled="loadVideo != 2"
                  :class="{'disabled': loadVideo != 2}">
                  Pausa
                </v-btn>
              </div>
            </div>
            <div class="vfx__videos content">
              <div class="vfx__videos--efectos" :style="{width: slide.val + '%'}" :class="{'drag-slide': dragSlide}">
                <video ref="video" loop frameborder="0" muted @loadeddata="loadFinish()">
                  <source src="@/assets/media/vfx/barco/barco-efecto.mp4" type="video/mp4">
                </video>
              </div>
              <div class="vfx__videos--sinefectos">
                <video ref="videoO" loop frameborder="0" muted @loadeddata="loadFinish()">
                  <source src="@/assets/media/vfx/barco/barco-sinefecto.mp4" type="video/mp4">
                </video>
              </div>
            </div>
            <v-slider @start="slideStart" @end="slideEnd" hide-details class="slide-vfx" v-model="slide.val" :color="slide.color" :track-color="slide.trackColor"></v-slider>
            <p class="mb-0 text-center"><i class="icon-compare-arrows mr-2"></i>Mové el slide y descrubrí</p>
          </div>
        </transition>
        <transition name="fade">
          <div v-if="videoPlaying.name == 'milton'" class="vfx__selectVideo">
            <div class="vfx__btns">
              <div>
                <v-btn rounded large ripple color="yellow" @click="playVideo()" :disabled="loadVideo != 2"
                  :class="{'disabled': loadVideo != 2}">
                  Play
                </v-btn>
                <v-btn rounded large ripple color="magenta" @click="pauseVideo()" :disabled="loadVideo != 2"
                  :class="{'disabled': loadVideo != 2}">
                  Pausa
                </v-btn>
              </div>
            </div>
            <div class="vfx__videos content">
              <div class="vfx__videos--efectos" :style="{width: slide.val + '%'}" :class="{'drag-slide': dragSlide}">
                <video ref="video" loop frameborder="0" muted @loadeddata="loadFinish()">
                  <source src="@/assets/media/vfx/taza/taza-efecto.mp4" type="video/mp4">
                </video>
              </div>
              <div class="vfx__videos--sinefectos">
                <video ref="videoO" loop frameborder="0" muted @loadeddata="loadFinish()">
                  <source src="@/assets/media/vfx/taza/taza-sinefecto.mp4" type="video/mp4">
                </video>
              </div>
            </div>
            <v-slider @start="slideStart" @end="slideEnd" hide-details class="slide-vfx" v-model="slide.val" :color="slide.color" :track-color="slide.trackColor"></v-slider>
            <p class="mb-0 text-center"><i class="icon-compare-arrows mr-2"></i>Mové el slide y descrubrí</p>
          </div>
        </transition>
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
      slide: { val: 50, color: 'cyan', trackColor: 'magenta' },
      loading: true,
      code: '',
      selectedFoto: {},
      imgSelected: {},
      enableVfx: true,
      dragSlide: false,
      videoPlaying: {},
      videosArray: [
        {
          _id: 1,
          name: 'taza',
          enabled: true
        },
        {
          _id: 2,
          name: 'barco',
          enabled: true
        },
        {
          _id: 3,
          name: 'milton',
          enabled: false
        }
      ],
      completePage: false,
      loadVideo: 0,
      fotomontajes: [{
          _id: 1,
          name: 'alicia',
          type: 'image',
          enabled: true,
          recursos: [{
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
          name: 'alicia',
          type: 'image',
          enabled: false,
          recursos: [{
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
          name: 'alicia',
          type: 'image',
          enabled: false,
          recursos: [{
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
  beforeMount() {
    if (this.user.step < 6) {
      this.$router.replace({ path: '/' })
    }
  },
  mounted() {
    this.selectedFoto = this.fotomontajes[0]
    this.videoPlaying = this.videosArray[0]
  },
  methods: {
    loadFinish() {
      this.loadVideo += 1
    },
    playVideo() {
      this.$refs.video.play()
      this.$refs.videoO.play()
    },
    pauseVideo() {
      this.$refs.video.pause()
      this.$refs.videoO.pause()
    },
    next() {
      if (this.completePage) {
        this.$toastr.success('¡Bien hecho, pudiste terminar!');
        this.nextStep('piramide', 7)
      } else{
        this.$toastr.error('Primero tenés que terminar los desafíos.');
      }
    },
    selectFotomontaje(item) {
      if (!item.enabled || item._id == this.selectedFoto._id) {
        return
      }
      this.imgSelected = {}
      this.selectedFoto = item
    },
    selectImage(img) {
      if (!this.imgSelected.i && img.data.i > 1 || img.data.i > this.imgSelected.i + 1) {
        return
      }
      this.imgSelected = img.data
      if (img.data.i == 5) {
        let index = this.selectedFoto._id
        if (index < 3) {
          this.fotomontajes[index].enabled = true
        } else if (index == 3) {
          this.enableVfx = true
        }
      }
    },
    selectVideo(video) {
      let index = video._id
      if (index == this.videoPlaying._id || !video.enabled) {
        return
      }
      this.slide.val = 50
      this.loadVideo = 0
      this.videoPlaying = this.videosArray[index - 1]
      if (video._id == 2) {
        this.videosArray[index].enabled = true
      } else if (video._id == 3) {
        this.completePage = true
      }
    },
    slideStart(){
      this.dragSlide = true
    },
    slideEnd(){
      this.dragSlide = false
    }
  }
}
</script>

<style lang="scss">
    @import "./Fotomontajes";
</style>
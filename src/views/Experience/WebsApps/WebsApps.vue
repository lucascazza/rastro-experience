<template>
  <div class="webapps" :class="{'justify-center': showVideo}">
    <transition name="fade">
      <div v-if="showVideo" class="webapps__video">
        <video ref="video" poster="@/assets/media/poster.jpg" controls autoplay frameborder="0"
          @ended="showVideo = false">
          <source src="@/assets/media/manifiesto.mp4" type="video/mp4">
        </video>
      </div>
    </transition>
    <transition name="fade">
      <template v-if="!showVideo">
        <div class="webapps__content">
          <div class="webapps__text">
            <h1>¿Cómo te fue en los juegos, {{user.name}}? Recordá que todavía <span class="camino">hay camino por
                recorrer.</span></h1>
            <h2>Supongo que ya te diste cuenta que la mochila tiene cosas que te pueden ayudar. Ahora vas a necesitar la
              <span class="libreta">libreta.</span></h2>
          </div>
          <div class="webapps__options">
            <h2>La libreta esta llena de frases. Sólo si descubris cúal es la correcta podrás continuar.</h2>
            <div class="webapps__options--options row">
              <div class="col-6 d-flex align-center justify-center">
                <div class="webapps__options--item item-1">
                  <i class="ricon-captura-off"></i>
                </div>
              </div>
              <div class="col-6 d-flex align-center justify-center">
                <div class="webapps__options--item item-2">
                  <i class="ricon-captura-off"></i>
                </div>
              </div> 
              <div class="col-6 d-flex align-center justify-center">
                <div class="webapps__options--item item-3">
                  <i class="ricon-captura-off"></i>
                </div>
              </div> 
              <div class="col-6 d-flex align-center justify-center">
                <div class="webapps__options--item item-4">
                  <i class="ricon-captura-off"></i>
                </div>
              </div> 
            </div>
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
      showVideo: false
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
    @import "./WebsApps";
</style>
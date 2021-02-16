<template>
  <div class="webapps">
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
        <div class="webapps__behance">
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
          <p>askldjaslkdj</p>
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
      showVideo: true
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
<template>
  <div class="primera">
    <p>Esta es la primera</p>
    <v-btn @click="nextStep('Segunda')" >Segunda</v-btn>
  </div>
</template>

<script>
import helperApp from '@/mixins/helperApp';
export default {
  name: 'ExpeciencePrimera',
  metaInfo() {
    return {
      title: 'Primera',
    }
  },
  components: {},
  mixins:[helperApp],
  mounted(){},
  methods: {}
}
</script>

<style lang="scss">
    @import "./Primera";
</style>
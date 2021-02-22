<template>
  <router-view />
</template>

<script>

export default {
  name: 'Experience',
  components: {},
  beforeMount() {
    if (this.$router.currentRoute.name == 'Experience') {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style lang="scss">
</style>
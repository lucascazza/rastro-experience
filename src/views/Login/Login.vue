<template>
  <div class="login">
    <div class="login__form">
      <v-form id="login-form" @submit.prevent="login()">
        <h2>Loguearse</h2>
        <p>Por favor ingrese sus datos</p>
        <div class="login__form--option">
          <label>Email</label>
          <v-text-field 
            solo 
            dense 
            outlined 
            hide-details
            v-model="user.email" 
            type="email">
          </v-text-field>
        </div>
        <div class="login__form--option">
          <label>Contraseña</label>
          <v-text-field
            solo 
            dense 
            outlined 
            hide-details
            v-model="user.password"
            :append-icon="showPassword ? 'ricon-visible' : 'ricon-invisible-1'"
            :type="showPassword ? 'text' : 'password'" @click:append="showPassword = !showPassword"></v-text-field>
        </div>
        <v-btn 
          :loading="loading" 
          color="primary" 
          type="submit" 
          large 
          depressed 
          rounded 
          class="login__form--submit"
          :disabled="!submitEnabled">
          Iniciar sesión
        </v-btn>
        <router-link to="/register" class="login__form--register pt-5">No tengo usuario</router-link>
      </v-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  metaInfo() {
    return {
      title: 'Login',
    }
  },
  components: {},
  data() {
    return {
      loading: false,
      user: {
        email: '',
        password: '',
      },
      showPassword: false
    };
  },
  computed: {
    submitEnabled(){
      return this.user.email.length && this.user.password
    }
  },
  methods: {
    login() {
      this.$store.commit('user/setToken', 'algo')
      this.$router.push({
        path: 'experience/primera'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
    @import "./Login";
</style>
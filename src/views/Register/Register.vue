<template>
  <div class="register">
    <div class="register__form">
      <v-form ref="form" id="register-form" @submit.prevent="register()">
        <h2>Registarse</h2>
        <p>Por favor ingrese sus datos</p>
        <div class="register__form--option">
          <label>Nombre</label>
          <v-text-field
            color="magenta"
            solo 
            dense 
            outlined
            dark
            v-model="user.name"
            :rules="nameRules"  
            type="text">
          </v-text-field>
        </div>
        <div class="register__form--option">
          <label>Usuario</label>
          <v-text-field 
            color="magenta"
            solo 
            dense 
            outlined
            :rules="userNameRules"
            v-model="user.userName"
            type="text">
          </v-text-field>
        </div>
        <div class="register__form--option">
          <label>Contraseña</label>
          <v-text-field 
            color="magenta"
            solo 
            dense 
            outlined
            v-model="user.password"
            :rules="passwordRules"
            :append-icon="showPassword ? 'icon-ojo' : 'icon-ojocerrado'"
            :type="showPassword ? 'text' : 'password'" 
            @click:append="showPassword = !showPassword"></v-text-field>
        </div>
        <div class="register__form--option">
          <label>Repetir contraseña</label>
          <v-text-field 
            color="magenta"
            solo 
            dense 
            outlined
            :rules="passwordRepeatRule"
            v-model="checkPassword"
            :append-icon="showPassword ? 'icon-ojo' : 'icon-ojocerrado'"
            :type="showPassword ? 'text' : 'password'" 
            @click:append="showPassword = !showPassword"></v-text-field>
        </div>
        <v-btn 
          :loading="loading" 
          color="primary" 
          type="submit" 
          large 
          depressed 
          rounded 
          class="register__form--submit"
          :disabled="!submitEnabled">
          Crear
        </v-btn>
        <router-link to="/login" class="register__form--register pt-5">Ya tengo usuario</router-link>
      </v-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Register",
  metaInfo() {
    return {
      title: 'Registrarse'
    };
  },
  data() {
    return {
      user: {
        name: "",
        userName: "",
        password: ""
      },
      checkPassword: '',
      nameRules: [
        v => !!v || 'Éste campo obligatorio',
      ],
      userNameRules: [
        v => !!v || 'Éste campo obligatorio',
      ],
      passwordRules: [
        v => !!v || 'Éste campo obligatorio',
        v => (v && v.length >= 6) || 'La contraseña debe tener al menos 6 carácteres'
      ],
      passwordRepeatRule: [
        v => (v && this.user.password === this.checkPassword) || 'Las contraseñas no son iguales'
      ],
      loading: false,
      showPassword: false
    };
  },
  computed: {
    submitEnabled(){
      return this.user.name.length && this.user.userName.length && this.user.password.length >= 6 && this.user.password === this.checkPassword && this.checkPassword.length
    }
  },
  methods: {
    async register() {
      try {
        await this.$store.dispatch('user/register', { vm: this, userToSave: this.user })
      } catch (err) {
        console.log(err);
      }
    }
  },
  mounted() {}
}
</script>
<style lang="scss">
    @import './Register';
</style>
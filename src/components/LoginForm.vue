<template>
    <v-form class="form mx-auto mt-10">
        <h1>Login To Your Account</h1>
        <v-text-field
                data-cy-login-input
                label="login..."
                v-model="login"
        ></v-text-field>
        <v-text-field
                data-cy-password-input
                label="password..."
                type="password"
                v-model="password"
        ></v-text-field>
        <v-btn
                data-cy-submit-input
                @click="loginUser"
        >
            Login
        </v-btn>
        <v-alert v-if="error" class="mt-5" color="red" type="error">
            incorrect login or password
        </v-alert>
    </v-form>
</template>

<script>
export default {
  data () {
    return {
      validPassword: 'Pass123',
      validLogin: 'Login123',
      login: null,
      password: null,
      error: null
    }
  },
  methods: {
    loginUser () {
      if (this.login === this.validLogin && this.password === this.validPassword) {
        this.$router.push('/myProfile')
      } else {
        this.error = true
      }
    }
  }
}
</script>

<style lang="scss">
.form {
    width: 400px;
}
</style>
<template>
  <v-card class="pa-6 pa-sm-12 mx-6 mx-sm-auto my-6" max-width=" 500px">
    <v-card-title>Welcome back!</v-card-title>
    <v-card-subtitle>Please login to access the full capacity of the plateform!</v-card-subtitle>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field id='email' label="E-mail" placeholder='homer.simpsons@springfield.com' type='email' append-icon="mdi-account" clearable :rules="[rules.required, rules.email]" v-model="email">
      </v-text-field>
      <v-text-field id='password' label="Password" placeholder='Duh!' :type="showPassword? 'text':'password'" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required]" @click:append="showPassword = !showPassword" v-model = "password" clearable>
      </v-text-field>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Login
      </v-btn>
    </v-form>
  </v-card>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'login',
  data() {
    return {
      email: null,
      password: null,
      showPassword: false,
      valid: false,
      rules: {
        required: value => !!value || 'Required.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      }
    }
  },
  computed:{
    ...mapState('users', {loading: 'isAuthenticatePending'}),
  },

   methods: {
    ...mapActions('auth', ['authenticate']),
    validate() {
      // Check if the form's inputs are ready.
      this.$refs.form.validate()

      // If yes, place the API call
      if (this.$refs.form.validate()) {
          this.authenticate({
            strategy: 'local',
            email: this.email,
            password: this.password,
          })
         .then(() => {
            console.log('logged in');
         })
         .then(() => {
          // this.$router.push('/home');
         })
         .catch((e) => {
          console.error('Authentication error', e);
         })
      }
    },
  }
}

</script>

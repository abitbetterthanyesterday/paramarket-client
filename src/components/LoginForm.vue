<template>
  <v-card
    class = "pa-6 pa-sm-12 mx-6 mx-sm-auto my-6"
    max-width = " 500px"
    >
    <v-card-title>Welcome back!</v-card-title>
     <v-card-subtitle>Please login to access the full capacity of the plateform!</v-card-subtitle>

  <v-form
   ref="form"
    v-model="valid"
    lazy-validation>
    <v-text-field 
      id = 'email'
      label = "E-mail"
      placeholder = 'homer.simpsons@springfield.com'
      type='email'
      append-icon="mdi-account"
      clearable
      :rules="[rules.required, rules.email]"
    >
    </v-text-field>
        <v-text-field 
      id = 'password'
      label = "Password"
      placeholder = 'Duh!'
      :type="showPassword? 'text':'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required]"
      @click:append="showPassword = !showPassword"
      clearable
    >
  </v-text-field>
  <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
        Login
      </v-btn>
  </v-form>
</v-card>
</template>

<script>
  export default{
    data(){
      return{
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
    methods: {
      validate () {
        this.$refs.form.validate()
      },
    }
}
</script>
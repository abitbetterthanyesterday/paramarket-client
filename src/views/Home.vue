<template>
  <v-form>
    <v-container>
      <v-row>
        <div id="typed-strings">
  <p>Typed.js is a <strong>JavaScript</strong> library.</p>
  <p>It <em>types</em> out sentences.</p>
</div>
<span id="typed"></span>
        <v-col cols="12">
          <v-text-field
            v-model="message"
            outlined
            clearable
            :label=this.searchAnimation
            type="text"
          >
            <template v-slot:append>
              <v-fade-transition leave-absolute>
                <v-progress-circular
                  v-if="loading"
                  size="24"
                  color="info"
                  indeterminate
                ></v-progress-circular>
                <img v-else width="24" height="24" src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg" alt="">
              </v-fade-transition>
            </template>
          </v-text-field>
        </v-col>

      </v-row>
    </v-container>
  </v-form>
</template>
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.11"></script>
<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  mounted(){

  },
  data(){
    return{
      searchAnimation: 'here'
    }
  }
}
</script>

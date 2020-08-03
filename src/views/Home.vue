<template>
  <v-form>
    <v-container>

      <h2>No matter what you're looking for, we've got you covered!</h2>
      <v-row>
        <vue-typed-js :strings="['Advance Success 4', 'a square reserve', 'an EN-A Glider', 'a new vario', 'a lightweight mountain glider']" :shuffle="true" :backDelay="100" :backSpeed="100" :showCursor="true" :loop="true">
          <h1> I'm looking for <span class="typing"></span></h1>
      </vue-typed-js>
    </v-row>

    <v-row>
      <v-btn class="text-teal-200">Get started</v-btn>
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
    var typed = new Typed('#type', {
  strings: ["First sentence.", "Second sentence."],
  typeSpeed: 30
});

  },
  data(){
    return{
      searchAnimation: 'here'
    }
  }
}
</script>

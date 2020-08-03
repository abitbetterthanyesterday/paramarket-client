<template>
  <section id="main">
      <v-container class="wrapper" fluid>
    <div class="skewed"></div>
    <div class="over__divider">
    <v-row>
      <v-col cols=10 offset=1 class="d-flex justify-start">
        <h1 class='text-h1 amber--text text--lighten-5 title'><v-icon class="mr-2 text-h1 red--text mt-n4">mdi-cloud-circle</v-icon>Paramarket</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols=10 offset=1>
        <h2 class='overline mt-n4 subtitle'>No matter what you're looking for, we've got you covered!</h2>
      </v-col>
    </v-row>
    <v-row class="typedjs d-flex justify-center align-center ma-12">
        <h3 class="text-h4 mr-2 font-weight-thin"> I'm looking for </h3>
        <vue-typed-js 
        :strings="['Advance Success 4.', 'a square reserve.', 'an EN-A Glider.', 'a new vario.', 'a lightweight mountain glider.']" 
        :shuffle="true" 
        :backSpeed="100" 
        :backDelay="200" 
        :showCursor="false" 
        :startDelay="500"
        :typeSpeed="50"
        :loop="true"
        >
          <p class="typing text-h4"></p>
        </vue-typed-js>
    </v-row>
    <v-row>
      <router-link class="router mx-auto" to="/dashboard">
      <v-btn class=" mx-auto amber--text text--lighten-5" color="amber" x-large elevation=6>Start browsing <v-icon class="ml-3 red--text">mdi-rocket-launch</v-icon></v-btn>
    </router-link>
    </v-row>
  </div>
  </v-container>
  <v-footer id="footer">
    <v-spacer></v-spacer>
    <div class="black--text text--lighten-5 overline">Paramarket &copy; 2020 - Made on <v-icon>mdi-weather-rainy</v-icon> days by <a href="https://www.aloys.dev" target="_blank" class="red--text"> Alo </a></div>
  </v-footer>
</section>
</template>
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.11"></script>
<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  mounted() {
  },
  data() {
    return {
    }
  }
}

</script>
<style scoped lang='scss'>
.skewed {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: #FFB75E;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #ED8F03, #FFB75E);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #ED8F03, #FFB75E); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  opacity: .5;
  z-index: 1;
  transform: skewY(5deg);
  transform-origin: top right;
}

#main{
  min-height: 100vh;
  display: flex;
  flex-flow: column;
    background: url('https://images.unsplash.com/photo-1533736861214-1882c159f930?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80');
  background-size: cover;
}

.wrapper {
  flex: 1 1 100%;
  position: relative;
  z-index: 0;

  .over__divider {
    position:relative;
    z-index: 2;
  }
  
  .router{
    text-decoration: none;
  }

  .subtitle{
    font-size: .9rem !important;
  }
  .typedjs{
    min-height: 90px;
    // border: 1px solid rgba(255,255,255,.2);
    border-radius: 100px;
    *{
      margin: 0;
    }
  }
}

#footer{
  margin:0 ;
  padding:0;
  padding-right: 1em;
  opacity: .2;
  transition: all .3s ease-in-out;
  a{
  text-decoration: none;

}
  &:hover{
    opacity:.9;
    transition: all .3s ease-in-out;
      a:hover{
  text-decoration: underline;
}
  };
}
</style>

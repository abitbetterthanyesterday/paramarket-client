<template>
  <v-app class="App">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>

<style lang="scss">
#app {
  overflow: auto;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.main__container {
  background: #ece9e6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ffffff,
    #ece9e6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffffff,
    #ece9e6
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.v-list {
  a {
    text-decoration: none;
  }
}

#footer {
  background: orange;
  padding-right: 1em;
  opacity: 0.2;
  transition: all 0.3s ease-in-out;

  a {
    text-decoration: none;
  }

  &:hover {
    opacity: 1;
    transition: all 0.3s ease-in-out;

    a:hover {
      text-decoration: underline;
    }
  }
}
</style>

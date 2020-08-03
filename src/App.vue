<template>
  <v-app id="app">
    <transition name="fade">
    <router-view></router-view>
  </transition>
  </v-app>

</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
.fade-enter-active{
  transition: opacity .5s
}
.fade-leave-active{
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

</style>

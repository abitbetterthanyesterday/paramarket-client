<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <router-link to="/dashboard"
              ><v-list-item-title>Home</v-list-item-title></router-link
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-heart</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <router-link to="/Favorite"
              ><v-list-item-title class="blue-grey--text text--darken-4"
                >Favorite</v-list-item-title
              ></router-link
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="orange" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Paramarket</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height main__container ma-0 pa-0" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer id="footer" app>
      <v-spacer></v-spacer>
      <div class="black--text text--lighten-5 overline" color="orange">
        Paramarket &copy; 2020 - Made on <v-icon>mdi-weather-rainy</v-icon> days
        by
        <a href="https://www.aloys.dev" target="_blank" class="red--text">
          Alo
        </a>
      </div>
    </v-footer>
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

.v-list-item__content {
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

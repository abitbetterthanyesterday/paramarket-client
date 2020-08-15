<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      fixed
      :permanent="!$vuetify.breakpoint.xsOnly"
      expand-on-hover="true"
    >
      <v-list dense>
        <router-link to="/dashboard">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="button">Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/search">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-magnify</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="button">Search</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/favorite">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-heart</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="button">Favorite</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/sell">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-post</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="button">Sell</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/account">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="button">My account</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="orange" dark>
      <v-app-bar-nav-icon
        class="d-block d-sm-none"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4"
        >Paramarket</v-toolbar-title
      >

      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Quick search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height main__container ma-0 pa-0" fluid>
        <slot />
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
  components: {},
  props: {
    source: String
  },
  data: () => ({
    drawer: false
  })
};
</script>

<style lang="scss">
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

  .v-list-item__title {
    font-size: 0.875rem !important;
    letter-spacing: 0.078125rem !important;
    text-transform: uppercase;
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

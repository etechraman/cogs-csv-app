<template>
  <v-app>
    <v-app-bar app color="black" dark class="px-16">
      <div class="d-flex align-center px-16 mx-16 grey--text">
        Cogs Manager
      </div>
    </v-app-bar>

    <v-main>
      <v-row>
        <v-col cols="2">
          <side-bar />
        </v-col>
        <v-col cols="10"><router-view /></v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "./components/SideBar.vue";
export default {
  name: "App",

  components: { SideBar },

  data: () => ({}),
};
</script>

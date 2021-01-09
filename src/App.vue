<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <div class="d-flex align-center">
        <span>Cogs Manager</span>
      </div>
    </v-app-bar>

    <v-main>
      <v-row>
        <v-col cols="3">
          <side-bar />
        </v-col>
        <v-col cols="9"><router-view /></v-col>
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

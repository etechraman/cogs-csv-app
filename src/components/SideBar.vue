<template>
  <v-navigation-drawer absolute permanent left>
    <v-list dense>
      <v-list-item-group
        ><v-list-item v-for="item in sideBarItems" :key="item.title">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item></v-list-item-group
      >
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      sideBarItems: [
        { title: "Download CSV", to: "/download" },
        { title: "Upload CSV", to: "/upload" },
      ],
    };
  },
};
</script>

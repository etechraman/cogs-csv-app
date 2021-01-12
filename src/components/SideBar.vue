<template>
  <v-navigation-drawer absolute permanent left>
    <v-list dense>
      <v-list-item-group color="blue" @click="itemGroupClick()">
        <v-list-item class="tile" @click="download()">
          <v-list-item-content>Download CSV</v-list-item-content>
        </v-list-item>
        <v-list-item class="tile" @click="upload()">
          <v-list-item-content>Upload CSV</v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    download() {
      this.$router.push("/download");
    },
    upload() {
      this.$router.push("/upload");
    },
    itemGroupClick() {
      console.log(event);
    },
  },
};
</script>
<style>
.tile:hover {
  background: lightskyblue;
}
.v-list-item--link:before {
background-color: blue;
}

/* .tile:active {
  background: yellow;
} */
</style>

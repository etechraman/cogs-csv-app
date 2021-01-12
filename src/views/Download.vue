<template>
  <div>
    <h1>
      Download CSV Section
    </h1>
    <v-btn class="white--text" color="green">
      <vue-json-to-csv :json-data="mockJson" />
    </v-btn>
  </div>
</template>

<script>
// @ is an alias to /src
import VueJsonToCsv from "vue-json-to-csv";
import { mapGetters } from "vuex";
export default {
  name: "Download",
  data() {
    return {};
  },
  components: { VueJsonToCsv },
  computed: {
    ...mapGetters(["mockJson"]),
  },
  methods: {},
};
</script>

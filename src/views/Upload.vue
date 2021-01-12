<template>
  <v-container class="mx-0">
    <v-row>
      <v-col>
        <h2>
          Upload CSV Section
        </h2>
      </v-col>
    </v-row>
    <v-row
      ><v-col>
        <v-btn color="blue" class="white--text" @click="upload()">
          Upload
        </v-btn>
      </v-col>
      <v-col>
        <input
          class="d-none"
          ref="uploadCSV"
          id="csv"
          type="file"
          @change="source($event)"/></v-col
    ></v-row>

    <v-divider v-if="displayJsonData.length" class="mt-3"></v-divider>
    <v-row class="ml-14 pl-10">
      <v-row class="mt-4">
        <v-col>
          <h3 v-if="emptyCogs.length">Empty Cogs - {{ emptyCogs.length }}</h3>
        </v-col>
      </v-row>
      <v-row
        ><v-col class="border-style-inset">
          <v-list>
            <v-list-item
              class="secondary-light itemList"
              v-for="(item, index) in emptyCogs"
              :key="index"
            >
              <v-list-item-avatar>
                <v-img lazy-src="../assets/download.png" width="150px"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title class="wrapText">{{
                  item.title
                }}</v-list-item-title>
                <v-list-item-subtitle>
                  <br />
                  {{ item.variant }}<br />
                </v-list-item-subtitle>
                <v-list-item-subtitle class="font-italic">
                  SKU: {{ item.sku }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action class="my-0 pt-7"
                ><v-list-item-action-text
                  >$<br />
                  COGS<br />
                  <v-text-field
                    class="textArea"
                    v-model="enterCogs[index]"
                    v-on:keyup.enter="handleEnterCogs(item, index)"
                    outlined
                  ></v-text-field> </v-list-item-action-text
              ></v-list-item-action>
            </v-list-item>
          </v-list> </v-col
      ></v-row>
    </v-row>

    <v-row class="ml-14 my-4 pl-10">
      <v-row class="mt-4">
        <v-col class="mb-8">
          <h3 v-if="nonEmptyCogs.length">
            NON Empty Cogs-{{ nonEmptyCogs.length }}
          </h3>
        </v-col>
      </v-row>
      <v-row
        ><v-col>
          <v-list>
            <v-list-item
              class="secondary-light itemList"
              v-for="(item, index) in nonEmptyCogs"
              :key="index"
            >
              <v-list-item-avatar>
                <v-img lazy-src="../assets/download.png"></v-img>
              </v-list-item-avatar>

              <v-list-item-content v-if="item.cogs">
                <v-list-item-title class="wrapText">{{
                  item.title
                }}</v-list-item-title>
                <v-list-item-subtitle>
                  <br />
                  {{ item.variant }}
                </v-list-item-subtitle>
                <v-list-item-subtitle class="font-italic">
                  SKU: {{ item.sku }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action v-if="item.cogs"
                ><v-list-item-action-text>
                  <div class="cogsNonEmpty">{{ item.cogs }}</div>
                  <br /> </v-list-item-action-text
              ></v-list-item-action>
            </v-list-item>
          </v-list> </v-col
      ></v-row>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import Vue from "vue";
import VuePapaParse from "vue-papa-parse";
Vue.use(VuePapaParse);

export default {
  name: "Upload",
  components: {},
  data() {
    return {
      enterCogs: [],
      displayJsonData: [],
      emptyCogs: [],
      nonEmptyCogs: [],
    };
  },
  mounted() {},
  computed: { ...mapGetters(["mockJson"]) },
  watch: {
    displayJsonData(val) {
      this.generateEmptyAndNoEmptyCogs(val);
    },
  },
  methods: {
    upload() {
      this.$refs.uploadCSV.click();
    },
    source(e) {
      if (e === undefined) return;
      else {
        // var files = e;
        this.readFile();
      }
    },
    readFile() {
      /* return first object in FileList */
      var file = event.target.files[0];
      this.$papa.parse(file, {
        header: true,
        complete: (results) => {
          this.displayJsonData = results.data;
        },
      });
    },
    handleEnterCogs(item, index) {
      if (this.enterCogs[index] !== "") {
        this.displayJsonData.forEach((element) => {
          let cogs = "";

          if (element === item) {
            cogs = this.enterCogs[index];
            element.cogs = cogs;
            this.enterCogs[index] = "";
          }
        });
        this.generateEmptyAndNoEmptyCogs(this.displayJsonData);
      } else {
        alert("Cannot send empty value!! Sorry");
      }
    },
    generateEmptyAndNoEmptyCogs(val) {
      this.$store.commit("clearMockJson");
      this.$store.commit("updateMockJson", val);
      this.emptyCogs = [];
      this.nonEmptyCogs = [];
      val.forEach((item) => {
        if (item.cogs) {
          this.nonEmptyCogs.push(item);
        } else if (item.cogs === "") this.emptyCogs.push(item);
        else return;
      });
    },
  },
};
</script>

<style>
.itemList {
  background: white;
}
.itemList:nth-child(odd) {
  background: lightgray;
}
.wrapText {
  white-space: normal;
}
.cogsNonEmpty {
  width: 210px;
}
.v-text-field .v-input__control .v-input__slot {
  min-height: auto !important;
  display: flex !important;
  align-items: center !important;
}
</style>

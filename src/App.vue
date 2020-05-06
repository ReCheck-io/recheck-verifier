<template>
  <div id="app">
    <Header />
    <Verify />
    <viewer v-show="isModalVisible" @close="closeModal">
      <template #header>
        <h3>Document Info</h3>
      </template>
      <template #body>
        <h2 v-if="errorData">{{ errorData }}</h2>
        <div v-if="chainData !== '' && userData !== ''">
          <p>Sender ID: {{ userData.senderId }}</p>
          <p v-if="userData.actionType !== 'upload' && userData.receiverId">
            Receiver ID: {{ userData.receiverId }}
          </p>
          <p>Action type: {{ userData.actionType }}</p>
          <p>Trail: {{ chainData.trailHash }}</p>
          <p>Trail Signature: {{ chainData.trailHashSigHash }}</p>
          <p>Date: {{ chainData.date }}</p>
          <button type="button" class="downloadbtn" @click="downloadPdf">
            Download as PDF
          </button>
        </div>
      </template>
    </viewer>
  </div>
</template>

<script>
import Verify from "./components/Verify.vue";
import Header from "./components/Header.vue";
import viewer from "./components/modals/viewer.vue";
import { generateDocument } from "./scripts/document";
import { eventBus } from "./main";

export default {
  name: "App",

  components: {
    Verify,
    Header,
    viewer
  },
  data() {
    return {
      isModalVisible: false,
      chainData: {},
      userData: {},
      errorData: ""
    };
  },
  mounted() {
    eventBus.$on("checkSearch", res => {
      if (res) {
        this.showModal();
        if (typeof res === "object") {
          this.chainData = res;
          this.errorData = "";
        } else {
          this.errorData = res;
          this.chainData = "";
        }
      }
    });
    eventBus.$on("getUserdata", res => {
      if (res) {
        this.userData = res;
      }
    });
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    downloadPdf() {
      generateDocument(this.userData, this.chainData);
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  font-weight: 400;
}

#app {
  height: 100vh;
  background-color: #f0f0f0;
}
</style>

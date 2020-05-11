<template>
  <div id="app">
    <Header />
    <Verify />
    <viewer v-show="isModalVisible" @close="closeModal">
      <template #header>
        <h3>File Info</h3>
      </template>
      <template #body>
        <h2 v-if="errorData">{{ errorData }}</h2>
        <div v-if="chainData !== '' && userData !== ''">
          <p>
            <span class="modal-info">Sender ID: </span>
            <span
              v-if="userData.actionType !== 'bmd_register' && userData.senderId"
              class="modal-text"
            >
              {{ userData.senderId }}
            </span>
            <span v-else class="modal-text">
              ak_2C62L8rWH86FQ1ySaZbeCXYZz96cHeJALTfgTbKhVBa4dK5qTK
            </span>
          </p>
          <p
            v-if="
              userData.actionType !== 'upload' &&
                userData.actionType !== 'bmd_register' &&
                userData.receiverId
            "
          >
            <span class="modal-info"> Receiver ID: </span>
            <span class="modal-text"> {{ userData.receiverId }} </span>
          </p>
          <p>
            <span class="modal-info"> Action type: </span>
            <span class="modal-text"> {{ userData.actionType }} </span>
          </p>
          <p>
            <span class="modal-info">Data hash: </span>
            <span class="modal-text">{{ userData.dataId }} </span>
          </p>
          <p>
            <span class="modal-info">Trail: </span>
            <span class="modal-text">{{ chainData.trailHash }} </span>
          </p>
          <p>
            <span class="modal-info"> Trail Signature: </span>
            <span class="modal-text">{{ chainData.trailHashSigHash }} </span>
          </p>
          <p>
            <span class="modal-info"> Date: </span>
            <span class="modal-text"> {{ chainData.date }} </span>
          </p>
          <!-- <button type="button" class="downloadbtn" @click="downloadPdf">
            Download as PDF
          </button> -->
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

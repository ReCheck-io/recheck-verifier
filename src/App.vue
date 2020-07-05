<template>
  <div id="app">
    <Header />
    <Verify />
    <viewer v-show="isModalVisible" @close="closeModal">
      <template #header>
         <div class="result_svg">
          <p v-if="chainData !== '' && userData !== ''" class="svg_result">
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="rgba(131, 178, 78, 0.8)"
              stroke="none"
              stroke-width="1.5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </p>
          <p v-if="errorData" class="svg_result">
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="#F89191"
              stroke="none"
              stroke-width="1.5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </p>
        </div>
        <div class="result_title"><h3>Verified information</h3></div>
        <div class="result_blank"></div>
      </template>
      <template #body>
        <h2 v-if="errorData">{{ errorData }}</h2>
        <div v-if="chainData !== '' && userData !== ''">
          <p v-if="userData.senderId">
            <span class="modal-info">Sender ID: </span>
            <span class="modal-text">
              {{ userData.senderId }}
            </span>
          </p>
          <p
            v-if="
              userData.actionType !== 'upload' &&
                userData.actionType !== 'register' &&
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

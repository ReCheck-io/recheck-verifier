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
              />
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
            <span class="modal-text">{{ userData.senderId }}</span>
          </p>
          <p
            v-if="
              !['upload', 'register', 'sign', 'download', 'verify'].includes(
                userData.actionType
              ) && userData.recipientId
            "
          >
            <span class="modal-info">Recipient ID: </span>
            <span class="modal-text">{{ userData.recipientId }}</span>
          </p>
          <p>
            <span class="modal-info"> Action type: </span>
            <span class="modal-text">{{ userData.actionType }}</span>
          </p>
          <p>
            <span class="modal-info">Data hash: </span>
            <span class="modal-text">{{ chainData.recordId }}</span>
          </p>
          <p>
            <span class="modal-info">Trail: </span>
            <span class="modal-text">{{ chainData.trailHash }}</span>
          </p>
          <p>
            <span class="modal-info">Trail Signature: </span>
            <span class="modal-text">{{ chainData.trailHashSigHash }}</span>
          </p>
          <p>
            <span class="modal-info">Date: </span>
            <span class="modal-text">{{ chainData.date }}</span>
          </p>
        </div>
      </template>
    </viewer>
  </div>
</template>

<script>
import Verify from "./components/Verify.vue";
import Header from "./components/Header.vue";
import viewer from "./components/modals/viewer.vue";
import { eventBus } from "./main";
import { isNullAny } from "./scripts/utils";

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
      errorData: "",
      uriParams: null
    };
  },

  created() {
    let newUri = "";
    try {
      newUri = decodeURI(window.location.href);
    } catch (e) {
      console.error(e);
    }
    let uri = newUri.split("?");
    if (uri.length === 2) {
      let vars = uri[1].split("&");
      let getVars = {};
      let tmp = "";
      vars.forEach(function(v) {
        tmp = v.split("=");
        if (tmp.length === 2) getVars[tmp[0]] = tmp[1];
      });
      this.uriParams = getVars;
    }
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
    eventBus.$on("getUserData", res => {
      if (res) {
        this.userData = res;
      }
    });

    if (!isNullAny(this.uriParams)) {
      let children = this.$root.$children[0].$children[1];
      let isValidAction = children.options.filter(option => {
        return option.actionType === this.uriParams.type;
      });

      if (isValidAction) {
        children.actionAttributes = isValidAction[0];
      }

      const queryMap = {
        isB: "isBeta",
        net: "currentNetwork",
        type: "actionType",
        dId: "dataId",
        sId: "senderId",
        rId: "recipientId"
      };

      setTimeout(() => {
        for (const [key, value] of Object.entries(this.uriParams)) {
          // eslint-disable-next-line no-prototype-builtins
          if (queryMap.hasOwnProperty(key)) {
            let currentKey = queryMap[key];

            if (!["actionType"].includes(currentKey)) {
              if (!isNullAny(document.getElementById(currentKey))) {
                document.getElementById(currentKey).value = value;
              }
              children[currentKey] = value;
            }
          }
        }
      }, 200);
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
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

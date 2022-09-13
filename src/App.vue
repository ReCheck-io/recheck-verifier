<template>
  <div id="app">
    <Header />
    <Verify />
    <viewer v-show="isModalVisible" @close="closeModal">
      <template #header>
        <CircleIcon :isSuccess="chainData !== '' && userData !== ''" />
        <span v-if="chainData !== '' && userData !== ''">
          <h2>Successful validation!</h2>
        </span>
        <h2 v-else>Validation failed!</h2>
      </template>
      <template #body>
        <div v-if="chainData !== '' && userData !== ''">
          <p>
            This item is <b>{{ actionType }}ed</b> on
            <b>{{ network }}</b>
            blockchain on <b>{{ chainData.date }}</b> at
            <b>{{ chainData.time }} UTC</b> by <b>{{ userData.senderId }}</b
            >.
          </p>
          <p>
            Click below to see technical details about the recorded blockchain
            transaction.
          </p>

          <div>
            <button
              type="button"
              class="btn sm"
              style="margin-bottom: 12px;"
              @click="isVisibleTxDetails = !isVisibleTxDetails"
            >
              {{
                isVisibleTxDetails
                  ? "Hide Blockchain Details"
                  : "Show Blockchain Details"
              }}
            </button>
          </div>

          <div class="tx-details" v-show="isVisibleTxDetails">
            <p><span>Action Type: </span>{{ actionType }}</p>
            <p><span>Data Hash: </span> {{ chainData.recordId }}</p>
            <p><span>Trail Hash: </span> {{ chainData.trailHash }}</p>
            <p>
              <span>Trail Hash Signature: </span>
              {{ chainData.trailHashSigHash }}
            </p>
          </div>
        </div>
      </template>
    </viewer>
  </div>
</template>

<script>
import Verify from "./components/Verify.vue";
import Header from "./components/Header.vue";
import viewer from "./components/modals/viewer.vue";
import CircleIcon from "./components/circle-icon/index.vue";
import { isNullAny, decodeUriParams, capitalizeFirstLetter } from "./utils";
import { NETWORKS_LIST } from "./constants";
import { eventBus } from "./main";

export default {
  name: "App",

  components: {
    CircleIcon,
    Verify,
    Header,
    viewer
  },

  data() {
    return {
      isVisibleTxDetails: false,
      isModalVisible: false,
      chainData: {},
      userData: {},
      errorData: "",
      uriParams: null
    };
  },

  created() {
    this.uriParams = decodeUriParams();
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
      if (res) this.userData = res;
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

              // Toggle network change in the select menu
              if (currentKey === "currentNetwork") {
                eventBus.$emit("networkChange", value);
              }
            }
          }
        }
      }, 200);
    }
  },

  methods: {
    showModal() {
      this.isModalVisible = true;
      this.isVisibleTxDetails = false;
    },
    closeModal() {
      this.isModalVisible = false;
      this.isVisibleTxDetails = false;
    }
  },

  computed: {
    actionType: function() {
      return this.userData.actionType && this.userData.actionType !== ""
        ? capitalizeFirstLetter(this.userData?.actionType)
        : "";
    },
    network: function() {
      return this.$root.$children[0].$children[1].currentNetwork &&
        this.$root.$children[0].$children[1].currentNetwork !== ""
        ? NETWORKS_LIST[this.$root.$children[0].$children[1].currentNetwork]
        : "eth"; //TODO add polygon and avax
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

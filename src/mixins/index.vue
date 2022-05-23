<script>
import Web3 from "web3";
import { eventBus } from "../main";
import { getHash, isNullAny, readFileAsync } from "../utils";

const { checkTrailHash: checkTrailHashAE } = require("../chain/chain-ae");
const { checkTrailHash: checkTrailHashETH } = require("../chain/chain-eth");
const {checkTrailHash: checkTrailHashPOLY} = require("../chain/chain-poly");
const {checkTrailHash: checkTrailHashAVAX} = require("../chain/chain-avax");

export default {
  data() {
    return {
      file: {},
      isBeta: false,
      toggleValue: true,
      currentNetwork: "poly",

      web3: null,

      dataId: "",
      senderId: "",
      recipientId: "",
      actionAttributes: "",
      payload: "",
      options: [
        // {
        //   title: "Registered",
        //   desc: "Registered to the chain",
        //   img: "./register.svg",
        //   actionType: "register"
        // },
        {
          title: "Uploaded",
          desc: "Uploaded on chain",
          img: "./upload.svg",
          actionType: "upload"
        },
        {
          title: "Shared",
          desc: "Shared with someone",
          img: "./share.svg",
          actionType: "share"
        },
        {
          title: "Email Shared",
          desc: "Shared with someone by email",
          img: "./mail-line.svg",
          actionType: "email"
        },
        {
          title: "Signed",
          desc: "Signed by someone",
          img: "./edit.svg",
          actionType: "sign"
        },
        {
          title: "Decrypted",
          desc: "Decrypted by someone",
          img: "./unlock.svg",
          actionType: "verify"
        },
        {
          title: "Downloaded",
          desc: "Downloaded by someone",
          img: "./download.svg",
          actionType: "download"
        }
      ]
    };
  },
  mounted() {
    eventBus.$on("networkChange", res => {
      if (res) {
        this.currentNetwork = res;
        !this.options[0];
      }
    });

    const dropArea = document.querySelector(".dropbox");
    dropArea !== null
      ? dropArea.addEventListener("click", () => this.openFilePicker())
      : "";
  },

  methods: {
    openFilePicker: () => document.querySelector("#file-upload").click(),
    customLabel: ({ title, desc }) => `${title} – ${desc}`,

    async handleFileUpload(e) {
      const { file, payload } = await readFileAsync(e);
      this.file = file;
      this.payload = payload;
    },

    searchOnChain: async function() {
      const trailHash = this.generateTrailHash();

      const userObj = {
        senderId: this.senderId,
        recipientId: this.recipientId,
        actionType: this.actionAttributes.actionType
      };

      if (!isNullAny(trailHash)) {
        switch (this.currentNetwork) {
          case "eth":
            checkTrailHashETH(trailHash, this.isBeta);
            break;
          case "ae":
            await checkTrailHashAE(trailHash, this.isBeta);
            break;
          case "poly":
            checkTrailHashPOLY(trailHash, this.isBeta);
            break;
          case "avax":
            checkTrailHashAVAX(trailHash, this.isBeta);
            break;
        }

        eventBus.$emit("getUserData", userObj);
      } else {
        alert("Incorrect public address!");
      }
    },

    generateTrailHash() {
      // const isValid = address => isValidAddress(this.currentNetwork, address);
      const actionType = this.actionAttributes.actionType;

      if (
        ["upload", "register", "sign", "download", "verify"].includes(
          actionType
        )
      ) {
        this.recipientId = this.senderId;
      }

      const dataId = isNullAny(this.dataId)
        ? getHash(getHash(this.payload))
        : this.dataId;

      if (isNullAny(actionType, dataId)) {
        return null;
      }

      let trailHash = getHash(
        dataId + this.senderId + actionType + this.recipientId
      );

      return trailHash;
    },

    initWeb3: async function(idType) {
      if (window.ethereum) {
        try {
          // Request account access
          window.web3 = new Web3(window.web3.currentProvider);
          this.accounts = await window.ethereum.enable();

          this.web3 = window.web3;
          const currentWallet = await this.web3.eth.getAccounts();

          if (idType === "senderId") {
            this.senderId = currentWallet[0];
          } else if (idType === "recipientId") {
            this.recipientId = currentWallet[0];
          }
        } catch (error) {
          // User denied account access...
          console.error("User denied account access");
        }
      } else {
        // User doesn't have installed metamask extension
        window.open("https://metamask.io/download.html", "_blank");
      }
    },

    clearFileUpload() {
      this.file = {};
      this.payload = "";

      document.getElementById("file-upload").value = "";
      document.getElementById("add-document-container").style.display = "block";
    }
  }
};
</script>

<script>
import Web3 from "web3";
import { eventBus } from "../main";
import {
  getHash,
  isValidAddress,
  isValidEmail,
  isNullAny
} from "../scripts/utils";

const { checkTrailHash: checkTrailHashAE } = require("../chain/chain-ae");
const { checkTrailHash: checkTrailHashETH } = require("../chain/chain-eth");

export default {
  data() {
    return {
      file: {},
      isBeta: false,
      toggleValue: true,
      currentNetwork: "ae",
      web3: null,

      dataId: "",
      senderId: "",
      recipientId: "",
      actionAttributes: "",
      payload: "",
      options: [
        {
          title: "Registered",
          desc: "Registered to the chain",
          img: "./register.svg",
          actionType: "register"
        },
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
          title: "Downloaded",
          desc: "Downloaded by someone",
          img: "./download.svg",
          actionType: "download"
        },
        {
          title: "Decrypted",
          desc: "Decrypted by someone",
          img: "./unlock.svg",
          actionType: "verify"
        }
      ]
    };
  },
  mounted() {
    eventBus.$on("networkChange", res => {
      if (res) {
        this.currentNetwork = "eth";
        !this.options[0];
      } else if (!res) {
        this.currentNetwork = "ae";
      }
    });
    const dropArea = document.querySelector(".dropbox");
    dropArea.addEventListener("click", () => this.openFilePicker());
  },

  // beforeUpdate() {
  //   const dropArea = document.querySelector(".dropbox");
  //   dropArea.removeEventListener("click", () => this.openFilePicker());
  // },

  methods: {
    openFilePicker: () => document.querySelector("#file-upload").click(),

    customLabel({ title, desc }) {
      return `${title} – ${desc}`;
    },

    handleFileInput(e) {
      let files = e.target.files[0];
      let reader = new FileReader();
      if (!files) return;
      this.file = files;
      reader.onload = async function() {
        let rawData = reader.result;
        this.payload = btoa(rawData);
      }.bind(this);
      reader.readAsBinaryString(files);
      document.getElementById("add-document-container").style.display = "none";
    },

    handleFileDrop(e) {
      let droppedFiles = e.dataTransfer.files[0];
      let reader = new FileReader();
      if (!droppedFiles) return;
      this.file = droppedFiles;
      reader.onload = async function() {
        let rawData = reader.result;
        this.payload = btoa(rawData);
      }.bind(this);
      reader.readAsBinaryString(droppedFiles);
      document.getElementById("add-document-container").style.display = "none";
    },

    searchOnChain: async function() {
      const trailHash = this.generateTrailHash();
      console.log(trailHash);
      const userObj = {
        senderId: this.senderId,
        recipientId: this.recipientId,
        actionType: this.actionAttributes.actionType
      };
      if (!isNullAny(trailHash)) {
        if (this.currentNetwork === "eth") {
          checkTrailHashETH(trailHash);
        } else if (this.currentNetwork === "ae") {
          checkTrailHashAE(trailHash, this.isBeta);
        }
        eventBus.$emit("getUserData", userObj);
      } else {
        alert("Incorrect public address!");
      }
    },

    generateTrailHash() {
      const isValid = address => isValidAddress(this.currentNetwork, address);
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

      if (
        isNullAny(actionType, dataId) ||
        !isValid(this.senderId) ||
        (!isValid(this.recipientId) && !isValidEmail(this.recipientId))
      ) {
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

<script>
import Web3 from "web3";
import { eventBus } from "../main";
import { getHash, isValidAddress, isNullAny } from "../scripts/utils";

const { checkTrailHash: checkTrailHashAE } = require("../chain/chain-ae");
const { checkTrailHash: checkTrailHashETH } = require("../chain/chain-eth");

export default {
  data() {
    return {
      file: {},
      toggleValue: true,
      web3: null,
      senderId: "",
      receiverId: "",
      actionType: "",
      payload: "",
      currentNetwork: "ae",
      options: [
        {
          title: "Registered",
          desc: "Registered to the chain",
          img: "./register.svg",
          actionType: "register"
        },
        {
          title: "Shared",
          desc: "Shared with someone",
          img: "./share.svg",
          actionType: "share"
        },
        {
          title: "Uploaded",
          desc: "Uploaded on chain",
          img: "./upload.svg",
          actionType: "upload"
        },
        {
          title: "Opened",
          desc: "Opened by someone",
          img: "./eye.svg",
          actionType: "open"
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
    dropArea.addEventListener("click", () => {
      document.querySelector("#file-upload").click();
    });
  },
  methods: {
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
    },
    searchOnChain: async function() {
      const hash = this.generateHash();
      const userObj = {
        senderId: this.senderId,
        receiverId: this.receiverId,
        actionType: this.actionType.actionType,
        dataId: hash
      };
      if (hash !== null) {
        if (this.currentNetwork === "eth") {
          checkTrailHashETH(hash);
        } else if (this.currentNetwork === "ae") {
          checkTrailHashAE(hash);
        }
        eventBus.$emit("getUserdata", userObj);
      } else {
        alert("incorrect public address!");
      }
    },
    generateHash() {
      const isUpload = this.actionType.actionType === "upload";
      const isRegister = this.actionType.actionType === "register";
      const isValid = o => isValidAddress(this.currentNetwork, o);
      let docHash = getHash(getHash(this.payload));
      let trailHash = "";
      if (
        (isUpload || isRegister) &&
        !isNullAny(this.actionType.actionType, this.senderId)
      ) {
        if (isValid(this.senderId)) {
          trailHash = getHash(
            docHash + this.senderId + this.actionType.actionType + this.senderId
          );
        } else {
          return null;
        }
      } else if (
        !isNullAny(
          this.actionType.actionType,
          this.senderId,
          this.receiverId
        ) &&
        !isUpload &&
        !isRegister
      ) {
        if (isValid(this.senderId) && isValid(this.receiverId)) {
          trailHash = getHash(
            docHash +
              this.senderId +
              this.actionType.actionType +
              this.receiverId
          );
        } else {
          return null;
        }
      }

      return trailHash;
    },

    initWeb3: async function(input) {
      if (window.ethereum) {
        try {
          // Request account access
          window.web3 = new Web3(window.web3.currentProvider);
          this.accounts = await window.ethereum.enable();

          this.web3 = window.web3;
          const currentWallet = await this.web3.eth.getAccounts();
          if (input === "senderId") {
            this.senderId = currentWallet[0];
          } else if (input === "receiverId") {
            this.receiverId = currentWallet[0];
          }
        } catch (error) {
          // User denied account access...
          console.error("User denied account access");
        }
      }
    }
  }
};
</script>

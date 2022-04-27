import Web3 from "web3";
import { isNullAny, formatDate } from "../utils";
import globalConfig from "./config.js";
import { eventBus } from "../main.js";
import chainConfig from "./config";

let polyConfig = globalConfig.poly;

const getContractForPrivateKey = privateKey => {
  if (isNullAny(privateKey)) {
    privateKey = polyConfig.privateKey;
  }

  let web3 = new Web3(polyConfig.gateway);

  let account = web3.eth.accounts.privateKeyToAccount(privateKey);

  web3.eth.accounts.wallet.add(account.privateKey);
  web3.eth.defaultAccount = account.address;

  let contract = new web3.eth.Contract(
    polyConfig.contractAbi,
    polyConfig.contractAddress,
    {
      gasPrice: polyConfig.defaultGasPrice,
      from: account.address
    }
  );

  return {
    account: account,
    contract: contract,
    web3: web3
  };
};

export const checkTrailHash = (trailHash, isBeta = false) => {
  if (isBeta) {
    polyConfig = chainConfig.polyBeta;
  }

  let contractObj = getContractForPrivateKey(polyConfig.privateKey);

  contractObj.contract.methods
    .verifyTrail(trailHash)
    .call({
      from: contractObj.account.address,
      gasPrice: polyConfig.defaultGasPrice
    })
    .then(result => {
      const adaptedResult = {
        recordId: result.recordId,
        parentId: result.parentRecordType,
        trailHash: result.trail,
        trailHashSigHash: result.trailSignature,
        timestamp: result.timestamp,
        subRecords: result.subRecords,
        ...formatDate(result.timestamp)
      };
      if (result.trail.startsWith("0x0000000000")) {
        eventBus.$emit("checkSearch", "Doesn't exist");
      } else {
        eventBus.$emit("checkSearch", adaptedResult);
      }
    });
};

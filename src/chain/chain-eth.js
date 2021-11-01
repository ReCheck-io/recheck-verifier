import Web3 from "web3";
import { isNullAny, formatDate } from "../scripts";
import globalConfig from "./config.js";
import { eventBus } from "../main.js";
const ethConfig = globalConfig.eth;

export const getContractForPrivateKey = privateKey => {
  if (isNullAny(privateKey)) {
    privateKey = ethConfig.privateKey;
  }

  let web3 = new Web3(ethConfig.gateway);

  let account = web3.eth.accounts.privateKeyToAccount(privateKey);

  web3.eth.accounts.wallet.add(account.privateKey);
  web3.eth.defaultAccount = account.address;

  let contract = new web3.eth.Contract(
    ethConfig.contractAbi,
    ethConfig.contractAddress,
    {
      gasPrice: ethConfig.defaultGasPrice
    }
  );

  return {
    account: account,
    contract: contract,
    web3: web3
  };
};

export const checkTrailHash = trailHash => {
  let contractObj = getContractForPrivateKey(ethConfig.privateKey);

  contractObj.contract.methods
    .verifyTrail(trailHash)
    .call({ from: contractObj.account.address })
    .then(result => {
      const adaptedResult = {
        recordId: result.recordId,
        parentId: result.parentRecordType,
        trailHash: result.trail,
        trailHashSigHash: result.trailSignature,
        timestamp: result.timestamp,
        subRecords: result.subRecords,
        date: formatDate(result.timestamp)
      };
      if (result.trail.startsWith("0x0000000000")) {
        eventBus.$emit("checkSearch", "Doesn't exist");
      } else {
        eventBus.$emit("checkSearch", adaptedResult);
      }
    });
};

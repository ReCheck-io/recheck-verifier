// import Web3 from "web3";

// import { formatDate } from "@/utils";
// import chainConfig from "./config";

// let ethConfig = chainConfig.eth;

// const getContractForPrivateKey = (privateKey?: string) => {
//   if (!privateKey) {
//     privateKey = ethConfig.privateKey;
//   }

//   const web3 = new Web3(ethConfig.gateway);

//   const account = web3.eth.accounts.privateKeyToAccount(privateKey);

//   web3.eth.accounts.wallet.add(account.privateKey);
//   web3.eth.defaultAccount = account.address;

//   const contract = new web3.eth.Contract(
//     ethConfig.contractAbi,
//     ethConfig.contractAddress,
//     {
//       gasPrice: ethConfig.defaultGasPrice.toString(),
//       from: account.address,
//     },
//   );

//   return {
//     account: account,
//     contract: contract,
//     web3: web3,
//   };
// };

// export const checkTrailHash = (trailHash: string, isBeta = false) => {
//   ethConfig = isBeta ? chainConfig.ethBeta : chainConfig.eth;

//   const contractObj = getContractForPrivateKey(ethConfig.privateKey);

//   contractObj.contract.methods
//     .verifyTrail(trailHash)
//     .call({
//       from: contractObj.account.address,
//       gasPrice: ethConfig.defaultGasPrice.toString(),
//     })
//     .then((result: any) => {
//       const adaptedResult = {
//         recordId: result.recordId,
//         parentId: result.parentRecordType,
//         trailHash: result.trail,
//         trailHashSigHash: result.trailSignature,
//         timestamp: result.timestamp,
//         subRecords: result.subRecords,
//         ...formatDate(result.timestamp),
//       };
//       if (result.trail.startsWith("0x0000000000")) {
//         return { data: null, status: false };
//       } else {
//         return { data: adaptedResult, status: true };
//       }
//     });
// };

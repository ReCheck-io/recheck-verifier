// import Web3 from "web3";

// import config from "./config";
// import { adaptTrailResult, getEVMContract } from "./utils";

// let avaxConfig = config.avax;

// export const checkTrailHash = async (
//   trailHash: string,
//   isBeta = false,
// ): Promise<any> => {
//   avaxConfig = isBeta ? config.avaxBeta : config.avax;

//   const web3 = new Web3(avaxConfig.gateway);
//   const { account, contract } = getEVMContract(
//     web3,
//     avaxConfig.privateKey,
//     avaxConfig,
//   );

//   return contract.methods
//     .verifyTrail(trailHash)
//     .call({
//       from: account.address,
//       gasPrice: avaxConfig.defaultGasPrice.toString(),
//     })
//     .then((result: any) => {
//       if (result.trail.startsWith("0x0000000000")) {
//         return { data: null, status: false };
//       } else {
//         return { data: adaptTrailResult(result), status: true };
//       }
//     })
//     .catch((error: any) => {
//       console.error("avax_checkTrailHash ERROR:", error);
//       return { data: null, status: false };
//     });
// };

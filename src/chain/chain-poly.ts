// import Web3 from "web3";

// import config from "./config";
// import { adaptTrailResult, getEVMContract } from "./utils";

// let polyConfig = config.poly;

// export const checkTrailHash = async (
//   trailHash: string,
//   isBeta = false,
// ): Promise<any> => {
//   polyConfig = isBeta ? config.polyBeta : config.poly;

//   const web3 = new Web3(polyConfig.gateway);
//   const { account, contract } = getEVMContract(
//     web3,
//     polyConfig.privateKey,
//     polyConfig,
//   );

//   return contract.methods
//     .verifyTrail(trailHash)
//     .call({
//       from: account.address,
//       gasPrice: polyConfig.defaultGasPrice.toString(),
//     })
//     .then((result: any) => {
//       if (result.trail.startsWith("0x0000000000")) {
//         return { data: null, status: false };
//       } else {
//         return { data: adaptTrailResult(result), status: true };
//       }
//     })
//     .catch((error: any) => {
//       console.error("poly_checkTrailHash ERROR:", error);
//       return { data: null, status: false };
//     });
// };

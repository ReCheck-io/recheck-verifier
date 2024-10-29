// import { Universal } from "@aeternity/aepp-sdk";

// import config from "./config";
// import { adaptTrailResult, fixHashPrefix } from "./utils";

// let aeConfig = config.ae;

// export const checkTrailHash = async (
//   trailHash: string,
//   isBeta = false,
// ): Promise<any> => {
//   aeConfig = isBeta ? config.aeBeta : config.ae;

//   const client = await Universal({
//     url: aeConfig.gateway,
//     internalUrl: aeConfig.gateway,
//     networkId: aeConfig.networkId,
//     keypair: {
//       secretKey: aeConfig.privateKey,
//       publicKey: aeConfig.publicKey,
//     },
//     nativeMode: true,
//     compilerUrl: aeConfig.compiler,
//   });

//   const contractArgs = [fixHashPrefix(trailHash)];
//   try {
//     const calledRecord = await client.contractCallStatic(
//       aeConfig.contractPath,
//       aeConfig.addressReadWrite,
//       "verifyTrail",
//       contractArgs,
//       { gas: aeConfig.defaultGas, gasPrice: aeConfig.defaultGasPrice },
//     );

//     const decodedResult = await calledRecord.decode();
//     const result = adaptTrailResult(decodedResult, 1000); // Adjust for AE

//     if (result.trailHash.startsWith("0x0000000000")) {
//       return { data: null, status: false };
//     }

//     return { data: result, status: true };
//   } catch (error) {
//     console.error("ae_checkTrailHash ERROR:", error);
//     return { data: null, status: false };
//   }
// };

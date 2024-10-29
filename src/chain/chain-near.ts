import { KeyPairString } from "near-api-js/lib/utils";

import config from "./config";
import { fixHashPrefix, getNearContract, adaptTrailResult } from "./utils";

let nearConfig = config.near;

export const checkTrailHash = async (
  trailHash: string,
  isBeta = false,
): Promise<any> => {
  nearConfig = isBeta ? config.nearBeta : config.near;
  console.log(nearConfig);
  try {
    const contract = await getNearContract(
      nearConfig,
      nearConfig.privateKey as KeyPairString,
    );

    const contractResponse: any = await contract.verifyTrail({
      trail_str: fixHashPrefix(trailHash),
    });

    const result = adaptTrailResult(contractResponse, 1_000_000); // Adjust for NEAR's nanosecond timestamp

    if (result.trailHash === "0") {
      return { data: null, status: false };
    }

    return { data: result, status: true };
  } catch (error) {
    console.error("near_checkTrailHash ERROR:", error);
    return { data: null, status: false };
  }
};

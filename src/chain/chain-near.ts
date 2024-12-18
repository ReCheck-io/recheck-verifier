import { KeyPairString } from "near-api-js/lib/utils";

import config from "./config";
import { fixHashPrefix, getNearContract, adaptTrailResult } from "./utils";

let nearConfig = config.near;

export const checkTrailHash = async (
  trailHash: string,
  isBeta = false,
): Promise<any> => {
  nearConfig = isBeta ? config.nearBeta : config.near;

  try {
    const contract = await getNearContract(
      nearConfig,
      nearConfig.privateKey as KeyPairString,
    );

    // @ts-ignore
    const contractResponse: any = await contract.verifyTrail({
      trail_str: fixHashPrefix(trailHash),
    });

    const result = adaptTrailResult(contractResponse);

    if (result.trailHash === "0") {
      return { data: null, status: false };
    }

    return { data: result, status: true };
  } catch (error) {
    console.error("near_checkTrailHash ERROR:", error);
    return { data: null, status: false };
  }
};

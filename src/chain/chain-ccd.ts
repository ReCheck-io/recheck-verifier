import {
  Energy,
  AccountAddress,
  ContractAddress,
  ConcordiumGRPCWebClient,
} from "@concordium/web-sdk";

import chainConfig from "./config";
import * as RecheckContract from "@/contracts/ConcordiumAbi/module_recheck";
import { bytesToHex, fixHashPrefix } from "./utils";

interface TrailHashResult {
  recordId: string;
  parentId: string;
  trailHash: string;
  trailHashSigHash: string;
  creator: string;
  timestamp: number;
  subRecords: number;
}

interface CCDConfig {
  addressReadWrite: string;
  gateway: string;
  gatewayPort: number;
  contractAddressFirst: number;
  contractAddressSecond: number;
}

async function getContractForKeyPair(ccdConfig: CCDConfig) {
  const accountObject = AccountAddress.fromBase58(ccdConfig.addressReadWrite);

  const client = new ConcordiumGRPCWebClient(
    ccdConfig.gateway,
    ccdConfig.gatewayPort,
  );

  const contractAddress = ContractAddress.create(
    ccdConfig.contractAddressFirst,
    ccdConfig.contractAddressSecond,
  );

  const contractClient = await RecheckContract.create(client, contractAddress);

  return {
    client,
    contractClient,
    accountAddress: accountObject,
  };
}

export const checkTrailHash = async (
  trailHash: string,
  isBeta: boolean = false,
): Promise<{ data: TrailHashResult | null; status: boolean }> => {
  const ccdConfig = isBeta ? chainConfig.ccdBeta : chainConfig.ccd;

  try {
    const { contractClient, accountAddress } =
      await getContractForKeyPair(ccdConfig);

    const metadata = {
      invoker: accountAddress,
      energy: Energy.create(10000),
    };

    trailHash = fixHashPrefix(trailHash);

    const invokeResult = await RecheckContract.dryRunVerifyTrail(
      contractClient,
      trailHash,
      metadata,
    );

    const returnValue =
      RecheckContract.parseReturnValueVerifyTrail(invokeResult);

    if (!returnValue) {
      return { data: null, status: false };
    }

    const result: TrailHashResult = {
      recordId: fixHashPrefix(bytesToHex(returnValue.record_id)),
      parentId: fixHashPrefix(bytesToHex(returnValue.parent_record_id)),
      trailHash: fixHashPrefix(bytesToHex(returnValue.trail)),
      trailHashSigHash: fixHashPrefix(bytesToHex(returnValue.trail_signature)),
      creator: returnValue.creator.content.toString(),
      timestamp: Number(BigInt(returnValue.timestamp.value).toString()),
      subRecords: Number(BigInt(returnValue.sub_records_length).toString()),
    };

    if (result.trailHash !== fixHashPrefix(trailHash)) {
      return { data: null, status: false };
    } else {
      return { data: result, status: true };
    }
  } catch (error) {
    console.log("ccd_checkTrailHash ERROR", error);
    return { data: null, status: false };
  }
};

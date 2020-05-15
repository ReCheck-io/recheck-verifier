/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { Universal } from "@aeternity/aepp-sdk";
import chainConfig from "./config.js";
import { eventBus } from "../main.js";
import { formatDate } from "../scripts/utils";

const aeConfig = chainConfig.ae;

function fixHashPrefix(hash) {
  if (hash.startsWith("0x")) {
    return hash.replace("0x", "#");
  } else if (hash.startsWith("#")) {
    return hash.replace("#", "0x");
  } else {
    return hash;
  }
}

export const getContractForKeyPair = async keyPair => {
  if (!keyPair) {
    keyPair = {
      secretKey: aeConfig.privateKey,
      publicKey: aeConfig.publicKey
    };
  }

  

  let client = await Universal({
    url: aeConfig.gateway, 
    internalUrl: aeConfig.gateway,
    keypair: keyPair,
    networkId: aeConfig.networkId ? aeConfig.networkId : "ae_uat", //replace with ae_mainnet for mainnet
    nativeMode: true,
    compilerUrl: aeConfig.compiler
  });


  let contractSource = aeConfig.contractPath

  return {
    account: keyPair.publicKey,
    contractSource: contractSource,
    client: client
  };
};

export const checkTrailHash = async (trailHash) => {
  let contractObj = await getContractForKeyPair({
    secretKey: aeConfig.privateKey,
    publicKey: aeConfig.publicKey
  });
  trailHash = fixHashPrefix(trailHash);
  
  let result = {
    recordId: "0",
    parentId: "0",
    trailHash: "0",
    trailHashSigHash: "0",
    creator: "0",
    timestamp: 0,
    subRecords: 0
  };

  try {
    let contractArgs = [trailHash];
    const calledRecord = await contractObj.client.contractCallStatic(
      contractObj.contractSource,
      aeConfig.addressReadWrite,
      "verifyTrail",
      contractArgs,
      {
        gas: aeConfig.defaultGas,
        gasPrice: aeConfig.defaultGasPrice
      }
    );
    
    let decodedResult = await calledRecord.decode(
      "hash",
      "hash",
      "hash",
      "hash",
      "address",
      "int",
      "int"
    );
      

    result.recordId = fixHashPrefix(decodedResult.recordId);
    result.parentId = fixHashPrefix(decodedResult.parentId);
    result.trailHash = fixHashPrefix(decodedResult.trail);
    result.trailHashSigHash = fixHashPrefix(decodedResult.trailSig);
    result.creator = fixHashPrefix(decodedResult.creator);
    result.timestamp = decodedResult.timestamp / 1000;
    result.subRecords = decodedResult.subRecords;
    result.date = formatDate(result.timestamp);

    if (result.trailHash.startsWith("0x0000000000")) {
      eventBus.$emit("checkSearch", "Doesn't exist" );
    } else {
      eventBus.$emit("checkSearch", result);
    }
  } catch (error) {
    console.log("ae_checkTrailHash ERROR", error);
  }

  
};

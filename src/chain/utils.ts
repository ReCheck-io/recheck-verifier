import Web3 from "web3";
import { KeyPairString } from "near-api-js/lib/utils";
import { utils as nearUtils, keyStores, connect, Contract } from "near-api-js";

// Fix hash prefixes for any blockchain that uses "0x" or "ak_" or custom prefixes
export function fixHashPrefix(hash: string, prefix: string = "0x"): string {
  if (hash === "0") {
    return hash;
  }
  if (hash.startsWith(prefix)) {
    return hash.replace(prefix, "");
  }
  return `${prefix}${hash}`;
}

// Convert a byte array to a hex string
export function bytesToHex(bytes: any): string {
  return Array.from(bytes, (byte) =>
    (byte as any).toString(16).padStart(2, "0"),
  ).join("");
}

// Fetch contract for EVM-based blockchains (ETH, Polygon, AVAX, etc.)
export function getEVMContract(web3: Web3, privateKey: string, config: any) {
  const account = web3.eth.accounts.privateKeyToAccount(privateKey);
  web3.eth.accounts.wallet.add(account.privateKey);
  web3.eth.defaultAccount = account.address;

  const contract = new web3.eth.Contract(
    config.contractAbi,
    config.contractAddress,
    {
      gasPrice: config.defaultGasPrice,
      from: account.address,
    },
  );

  return { web3, account, contract };
}

// Fetch contract for NEAR
export async function getNearContract(config: any, privateKey: KeyPairString) {
  if (!privateKey.startsWith("ed25519:")) privateKey = "ed25519:" + privateKey;

  const keyPair = nearUtils.KeyPair.fromString(privateKey);
  const keyStore = new keyStores.InMemoryKeyStore();
  await keyStore.setKey(config.networkId, config.accountId, keyPair);

  const near = await connect({
    deps: { keyStore },
    nodeUrl: config.gateway,
    networkId: config.networkId,
  });

  const account = await near.account(config.accountId);
  return new Contract(account, config.addressReadWrite, config.contractMethods);
}

// Helper to standardize trail hash result
export function adaptTrailResult(result: any) {
  if (result.length) {
    return {
      recordId: fixHashPrefix(result[0]),
      parentId: fixHashPrefix(result[1]),
      trailHash: fixHashPrefix(result[2]),
      trailHashSigHash: fixHashPrefix(result[3]),
      creator: result[4] || "none.none",
      timestamp: result[5] / 1000 / 1000, // Convert to milliseconds if needed
      subRecords: result[6] || 0,
    };
  }

  return {
    recordId: fixHashPrefix(result.recordId),
    parentId: fixHashPrefix(result.parentRecordType),
    trailHash: fixHashPrefix(result.trail),
    trailHashSigHash: fixHashPrefix(result.trailSignature),
    creator: result.creator || "none.none",
    timestamp: result.timestamp / 1000 / 1000, // Convert to milliseconds if needed
    subRecords: result.subRecords || 0,
  };
}

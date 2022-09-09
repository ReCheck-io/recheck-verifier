/* eslint-disable no-undef */
import {utils, keyStores, connect, Contract} from "near-api-js";
import chainConfig from "./config.js";
import {eventBus} from "@/main";
import {formatDate} from "@/utils";

let nearConfig = chainConfig.near;

function fixHashPrefix(hash) {
    if (hash === "0") {
        return hash;
    } else if (hash.startsWith("0x")) {
        return hash.replace("0x", "");
    } else {
        return `0x${hash}`;
    }
}

const getContractForKeyPair = async secretKey => {
    if (!secretKey) {
        secretKey = nearConfig.privateKey;
    }

    const keyPair = utils.KeyPair.fromString(secretKey);

    const keyStore = new keyStores.InMemoryKeyStore();
    await keyStore.setKey(nearConfig.networkId, nearConfig.accountId, keyPair);

    const near = await connect({
        deps: {
            keyStore,
        },
        nodeUrl: nearConfig.gateway,
        networkId: nearConfig.networkId
    });

    const account = await near.account(nearConfig.accountId);

    return new Contract(
        account,
        nearConfig.addressReadWrite,
        nearConfig.contractMethods
    );
};

export const checkTrailHash = async (trailHash, isBeta = false) => {
    if (isBeta) {
        nearConfig = chainConfig.nearBeta;
    }

    let result = {
        recordId: "0",
        parentId: "0",
        trailHash: "0",
        trailHashSigHash: "0",
        creator: "none.none",
        timestamp: 0,
        subRecords: 0,
    };

    try {
        let contract = await getContractForKeyPair(nearConfig.privateKey);

        const contractResponse = await contract.verifyTrail({trail_str: fixHashPrefix(trailHash)});

        result.recordId = fixHashPrefix(contractResponse[0]);
        result.parentId = fixHashPrefix(contractResponse[1]);
        result.trailHash = fixHashPrefix(contractResponse[2]);
        result.trailHashSigHash = fixHashPrefix(contractResponse[3]);
        result.creator = contractResponse[4];
        result.timestamp = contractResponse[5] / 1000 / 1000;//nanoseconds to milliseconds
        result.subRecords = contractResponse[6];

        result = {...result, ...formatDate(result.timestamp / 1000)};//milliseconds to seconds

        if (result.trailHash === "0") {
            eventBus.$emit("checkSearch", "Doesn't exist");
        } else {
            eventBus.$emit("checkSearch", result);
        }
    } catch (error) {
        console.log("near_checkTrailHash ERROR", error);
    }
};

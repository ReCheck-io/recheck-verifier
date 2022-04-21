const web3 = {
  eth: {
    privateKey:
      "0x7ad6e1e8b00f9eff52b35fcc0bc94a6d7fcd52b0275609a808a736b3d31bff64",
    gateway: "https://n105.recheck.io",
    contractAddress: "0x4755Cf3f4009eC8591D5d196B82E954d75cEf015",
    addressReadWrite: "0x0aFc561fea32E26942E0D0e152b42d18410190eF",
    defaultGasPrice: 25000000000,
    contractAbi: require("../contracts/ETHContractAbi.js").contractAbi,
    addressPrefix: "0x"
  },
  ethBeta: {
    privateKey:
      "0x7ad6e1e8b00f9eff52b35fcc0bc94a6d7fcd52b0275609a808a736b3d31bff64",
    gateway: "https://n105.recheck.io",
    contractAddress: "0x0fdE2633F4e8ed2e00F5544EA44dC5DD9a73c147",
    addressReadWrite: "0x0fdE2633F4e8ed2e00F5544EA44dC5DD9a73c147",
    defaultGasPrice: 25000000000,
    contractAbi: require("../contracts/ETHContractAbi.js").contractAbi,
    addressPrefix: "0x"
  },
  poly: {
    privateKey:
      "0x7ad6e1e8b00f9eff52b35fcc0bc94a6d7fcd52b0275609a808a736b3d31bff64",
    gateway:
      "https://rpc-mainnet.maticvigil.com/v1/34b26294a1edd25d8236d397fa2194a5a6835e52",
    contractAddress: "0xF61ef53F6c775D6Cd7AB49FFc3b6b4aDC9671Faf",
    addressReadWrite: "0xF61ef53F6c775D6Cd7AB49FFc3b6b4aDC9671Faf",
    defaultGasPrice: 0,
    contractAbi: require("../contracts/ETHContractAbi.js").contractAbi,
    addressPrefix: "0x"
  },
  polyBeta: {
    privateKey:
      "0x7ad6e1e8b00f9eff52b35fcc0bc94a6d7fcd52b0275609a808a736b3d31bff64",
    gateway:
      "https://rpc-mumbai.maticvigil.com/v1/34b26294a1edd25d8236d397fa2194a5a6835e52",
    contractAddress: "0xF5C4b997BA23ea46ab1055bA4c7ce020d0C4E429",
    addressReadWrite: "0x0aFc561fea32E26942E0D0e152b42d18410190eF",
    defaultGasPrice: 25000000000,
    contractAbi: require("../contracts/POLYContractAbi.js").contractAbi,
    addressPrefix: "0x"
  },
  ae: {
    publicKey: "ak_2aFpvPdgDHdhcLUEtw8pykT3UDqK7R8R55aEE35aH9hB5Fx3jp",
    privateKey:
      "0032eea4216176c33b0f84cdb3eae52bfaa7dbd80826b17c36f31cbeee1f57a0cf3501ce4a2a2f39016496c1ec44ae6d251f411e07bbd6ac0895f66a4c3ea848",
    gateway: "https://sdk-mainnet.aepps.com",
    contractPath: require("../contracts/AEContract.js").default,
    compiler: "https://compiler.aepps.com",
    addressReadWrite: "ct_2UNN5BC2MxMWMqxpVs2fZZkb8rc2kZ98L2p5TZUsPWWeArPX7W",
    defaultGas: 100000,
    defaultGasPrice: 1000000000,
    networkId: "ae_mainnet",
    ttl: 55,
    addressPrefix: "ak_"
  },
  aeBeta: {
    publicKey: "ak_2aFpvPdgDHdhcLUEtw8pykT3UDqK7R8R55aEE35aH9hB5Fx3jp",
    privateKey:
      "0032eea4216176c33b0f84cdb3eae52bfaa7dbd80826b17c36f31cbeee1f57a0cf3501ce4a2a2f39016496c1ec44ae6d251f411e07bbd6ac0895f66a4c3ea848",
    gateway: "https://sdk-testnet.aepps.com",
    contractPath: require("../contracts/AEBetaContract.js").default,
    compiler: "https://compiler.aepps.com",
    addressReadWrite: "ct_tvJ4JQyYCnPfzwwTsAW54pykU1HGXotJb4uCow5WiYJeb1kiJ",
    defaultGas: 100000,
    defaultGasPrice: 1000000000,
    networkId: "ae_uat",
    ttl: 55,
    addressPrefix: "ak_"
  }
};

export default web3;

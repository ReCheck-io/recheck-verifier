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
  ae: {
    publicKey: "ak_2aFpvPdgDHdhcLUEtw8pykT3UDqK7R8R55aEE35aH9hB5Fx3jp",
    privateKey:
      "0032eea4216176c33b0f84cdb3eae52bfaa7dbd80826b17c36f31cbeee1f57a0cf3501ce4a2a2f39016496c1ec44ae6d251f411e07bbd6ac0895f66a4c3ea848",
    gateway: "https://sdk-testnet.aepps.com",
    contractPath: require("../contracts/AEContract.js").default,
    compiler: "https://compiler.aepps.com",
    addressReadWrite: "ct_2ppRrHyepkedky9VDDmLeWZ6NoPnnRgV8VjeGw8pQ7AsQGpYt5",
    defaultGas: 100000,
    defaultGasPrice: 1000000000,
    ttl: 55,
    addressPrefix: "ak_"
  }
};

export default web3;

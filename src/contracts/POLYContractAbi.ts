export const contractAbi = [
  {
    constant: true,
    inputs: [
      {
        name: "_recordId",
        type: "bytes32",
      },
    ],
    name: "records",
    outputs: [
      {
        name: "recordId",
        type: "bytes32",
      },
      {
        name: "parentRecordId",
        type: "bytes32",
      },
      {
        name: "trail",
        type: "bytes32",
      },
      {
        name: "trailSignature",
        type: "bytes32",
      },
      {
        name: "creator",
        type: "address",
      },
      {
        name: "timestamp",
        type: "uint256",
      },
      {
        name: "subRecords",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "recordId",
        type: "bytes32",
      },
      {
        name: "index",
        type: "uint256",
      },
    ],
    name: "subRecord",
    outputs: [
      {
        name: "subRecordId",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "user",
        type: "address",
      },
      {
        name: "role",
        type: "uint8",
      },
    ],
    name: "setRole",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "recordId",
        type: "string",
      },
      {
        name: "action",
        type: "string",
      },
      {
        name: "side1Address",
        type: "address",
      },
      {
        name: "side2Address",
        type: "address",
      },
    ],
    name: "encodeTrail",
    outputs: [
      {
        name: "trail",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "trailHash",
        type: "bytes32",
      },
    ],
    name: "verifyTrail",
    outputs: [
      {
        name: "recordId",
        type: "bytes32",
      },
      {
        name: "parentRecordId",
        type: "bytes32",
      },
      {
        name: "trail",
        type: "bytes32",
      },
      {
        name: "trailSignature",
        type: "bytes32",
      },
      {
        name: "creator",
        type: "address",
      },
      {
        name: "timestamp",
        type: "uint256",
      },
      {
        name: "subRecords",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "ROLE_NONE",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "user",
        type: "address",
      },
      {
        name: "action",
        type: "string",
      },
    ],
    name: "hasPermission",
    outputs: [
      {
        name: "has",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "user",
        type: "address",
      },
      {
        name: "role",
        type: "uint8",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        name: "has",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "recordId",
        type: "bytes32",
      },
      {
        name: "parentRecordId",
        type: "bytes32",
      },
      {
        name: "trail",
        type: "bytes32",
      },
      {
        name: "trailSignature",
        type: "bytes32",
      },
    ],
    name: "createSubRecord",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "role",
        type: "uint8",
      },
      {
        name: "action",
        type: "string",
      },
      {
        name: "permissionFlag",
        type: "bool",
      },
    ],
    name: "setPermission",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "_storage",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "ROLE_ADMIN",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "newOwner",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "recordId",
        type: "bytes32",
      },
      {
        name: "trail",
        type: "bytes32",
      },
      {
        name: "trailSignature",
        type: "bytes32",
      },
    ],
    name: "createRecord",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "initPermissions",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_storageAddress",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        name: "_to",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
];

const contractAbi = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "account",
                "type": "address"
            },
            {
                "name": "allowedAccess",
                "type": "bool"
            }
        ],
        "name": "setAllowedAccess",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "acceptOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "newOwner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "allowed",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_storageAddress",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "account",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "allowedAccess",
                "type": "bool"
            }
        ],
        "name": "AllowedAccess",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_to",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "recordId",
                "type": "bytes32"
            },
            {
                "name": "parentRecordId",
                "type": "bytes32"
            },
            {
                "name": "trail",
                "type": "bytes32"
            },
            {
                "name": "trailSignature",
                "type": "bytes32"
            }
        ],
        "name": "createSubRecord",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "recordId",
                "type": "bytes32"
            },
            {
                "name": "parentRecordId",
                "type": "bytes32"
            },
            {
                "name": "trail",
                "type": "bytes32"
            },
            {
                "name": "trailSignature",
                "type": "bytes32"
            },
            {
                "name": "extra0",
                "type": "bytes32"
            },
            {
                "name": "extra1",
                "type": "bytes32"
            }
        ],
        "name": "createSubRecordWithExtras2",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "recordId",
                "type": "bytes32"
            },
            {
                "name": "trail",
                "type": "bytes32"
            },
            {
                "name": "trailSignature",
                "type": "bytes32"
            }
        ],
        "name": "createRecord",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_recordId",
                "type": "bytes32"
            }
        ],
        "name": "records",
        "outputs": [
            {
                "name": "recordId",
                "type": "bytes32"
            },
            {
                "name": "parentRecordId",
                "type": "bytes32"
            },
            {
                "name": "trail",
                "type": "bytes32"
            },
            {
                "name": "trailSignature",
                "type": "bytes32"
            },
            {
                "name": "creator",
                "type": "address"
            },
            {
                "name": "timestamp",
                "type": "uint256"
            },
            {
                "name": "subRecords",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_recordId",
                "type": "bytes32"
            },
            {
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "subRecord",
        "outputs": [
            {
                "name": "recordId",
                "type": "bytes32"
            },
            {
                "name": "parentRecordId",
                "type": "bytes32"
            },
            {
                "name": "trail",
                "type": "bytes32"
            },
            {
                "name": "trailSignature",
                "type": "bytes32"
            },
            {
                "name": "creator",
                "type": "address"
            },
            {
                "name": "timestamp",
                "type": "uint256"
            },
            {
                "name": "subRecords",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "trailHash",
                "type": "bytes32"
            }
        ],
        "name": "verifyTrail",
        "outputs": [
            {
                "name": "recordId",
                "type": "bytes32"
            },
            {
                "name": "parentRecordId",
                "type": "bytes32"
            },
            {
                "name": "trail",
                "type": "bytes32"
            },
            {
                "name": "trailSignature",
                "type": "bytes32"
            },
            {
                "name": "creator",
                "type": "address"
            },
            {
                "name": "timestamp",
                "type": "uint256"
            },
            {
                "name": "subRecords",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "trailHash",
                "type": "bytes32"
            }
        ],
        "name": "verifyExtra0",
        "outputs": [
            {
                "name": "recordId",
                "type": "bytes32"
            },
            {
                "name": "parentRecordId",
                "type": "bytes32"
            },
            {
                "name": "trail",
                "type": "bytes32"
            },
            {
                "name": "trailSignature",
                "type": "bytes32"
            },
            {
                "name": "creator",
                "type": "address"
            },
            {
                "name": "timestamp",
                "type": "uint256"
            },
            {
                "name": "subRecords",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "trailHash",
                "type": "bytes32"
            }
        ],
        "name": "verifyExtra1",
        "outputs": [
            {
                "name": "recordId",
                "type": "bytes32"
            },
            {
                "name": "parentRecordId",
                "type": "bytes32"
            },
            {
                "name": "trail",
                "type": "bytes32"
            },
            {
                "name": "trailSignature",
                "type": "bytes32"
            },
            {
                "name": "creator",
                "type": "address"
            },
            {
                "name": "timestamp",
                "type": "uint256"
            },
            {
                "name": "subRecords",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

module.exports = {
    contractAbi: contractAbi
}
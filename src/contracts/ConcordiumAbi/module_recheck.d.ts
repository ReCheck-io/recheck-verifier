import * as SDK from "@concordium/web-sdk";
/** The reference of the smart contract module supported by the provided client. */
export declare const moduleReference: SDK.ModuleReference.Type;
/** Name of the smart contract supported by this client. */
export declare const contractName: SDK.ContractName.Type;
/** Smart contract client for a contract instance on chain. */
declare class RecheckContract {
  /** Having a private field prevents similar structured objects to be considered the same type (similar to nominal typing). */
  private __nominal;
  /** The gRPC connection used by this client. */
  readonly grpcClient: SDK.ConcordiumGRPCClient;
  /** The contract address used by this client. */
  readonly contractAddress: SDK.ContractAddress.Type;
  /** Generic contract client used internally. */
  readonly genericContract: SDK.Contract;
  constructor(
    grpcClient: SDK.ConcordiumGRPCClient,
    contractAddress: SDK.ContractAddress.Type,
    genericContract: SDK.Contract,
  );
}
/** Smart contract client for a contract instance on chain. */
export type Type = RecheckContract;
/**
 * Construct an instance of `RecheckContract` for interacting with a 'recheck' contract on chain.
 * Checking the information instance on chain.
 * @param {SDK.ConcordiumGRPCClient} grpcClient - The client used for contract invocations and updates.
 * @param {SDK.ContractAddress.Type} contractAddress - Address of the contract instance.
 * @param {SDK.BlockHash.Type} [blockHash] - Hash of the block to check the information at. When not provided the last finalized block is used.
 * @throws If failing to communicate with the concordium node or if any of the checks fails.
 * @returns {RecheckContract}
 */
export declare function create(
  grpcClient: SDK.ConcordiumGRPCClient,
  contractAddress: SDK.ContractAddress.Type,
  blockHash?: SDK.BlockHash.Type,
): Promise<RecheckContract>;
/**
 * Construct the `RecheckContract` for interacting with a 'recheck' contract on chain.
 * Without checking the instance information on chain.
 * @param {SDK.ConcordiumGRPCClient} grpcClient - The client used for contract invocations and updates.
 * @param {SDK.ContractAddress.Type} contractAddress - Address of the contract instance.
 * @returns {RecheckContract}
 */
export declare function createUnchecked(
  grpcClient: SDK.ConcordiumGRPCClient,
  contractAddress: SDK.ContractAddress.Type,
): RecheckContract;
/**
 * Check if the smart contract instance exists on the blockchain and whether it uses a matching contract name and module reference.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.BlockHash.Type} [blockHash] A optional block hash to use for checking information on chain, if not provided the last finalized will be used.
 * @throws {SDK.RpcError} If failing to communicate with the concordium node or if any of the checks fails.
 */
export declare function checkOnChain(
  contractClient: RecheckContract,
  blockHash?: SDK.BlockHash.Type,
): Promise<void>;
/** Parameter JSON type needed by the schema for update transaction for 'createSubRecordWithExtras2' entrypoint of the 'recheck' contract. */
type CreateSubRecordWithExtras2ParameterSchemaJson = {
  record_id: string;
  parent_record_id: string;
  trail: string;
  trail_signature: string;
  extra0: string;
  extra1: string;
};
/** Parameter type for update transaction for 'createSubRecordWithExtras2' entrypoint of the 'recheck' contract. */
export type CreateSubRecordWithExtras2Parameter = {
  record_id: string;
  parent_record_id: string;
  trail: string;
  trail_signature: string;
  extra0: string;
  extra1: string;
};
/**
 * Construct Parameter type used in update transaction for 'createSubRecordWithExtras2' entrypoint of the 'recheck' contract.
 * @param {CreateSubRecordWithExtras2Parameter} parameter The structured parameter to construct from.
 * @returns {SDK.Parameter.Type} The smart contract parameter.
 */
export declare function createCreateSubRecordWithExtras2Parameter(
  parameter: CreateSubRecordWithExtras2Parameter,
): SDK.Parameter.Type;
/**
 * Construct WebWallet parameter type used in update transaction for 'createSubRecordWithExtras2' entrypoint of the 'recheck' contract.
 * @param {CreateSubRecordWithExtras2Parameter} parameter The structured parameter to construct from.
 * @returns The smart contract parameter support by the WebWallet.
 */
export declare function createCreateSubRecordWithExtras2ParameterWebWallet(
  parameter: CreateSubRecordWithExtras2Parameter,
): {
  parameters: CreateSubRecordWithExtras2ParameterSchemaJson;
  schema: {
    type: "TypeSchema";
    value: any;
  };
};
/**
 * Send an update-contract transaction to the 'createSubRecordWithExtras2' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractTransactionMetadata} transactionMetadata - Metadata related to constructing a transaction for a smart contract.
 * @param {CreateSubRecordWithExtras2Parameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.AccountSigner} signer - The signer of the update contract transaction.
 * @throws If the entrypoint is not successfully invoked.
 * @returns {SDK.TransactionHash.Type} Hash of the transaction.
 */
export declare function sendCreateSubRecordWithExtras2(
  contractClient: RecheckContract,
  transactionMetadata: SDK.ContractTransactionMetadata,
  parameter: CreateSubRecordWithExtras2Parameter,
  signer: SDK.AccountSigner,
): Promise<SDK.TransactionHash.Type>;
/**
 * Dry-run an update-contract transaction to the 'createSubRecordWithExtras2' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractAddress.Type | SDK.AccountAddress.Type} invokeMetadata - The address of the account or contract which is invoking this transaction.
 * @param {CreateSubRecordWithExtras2Parameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.BlockHash.Type} [blockHash] - Optional block hash allowing for dry-running the transaction at the end of a specific block.
 * @throws {SDK.RpcError} If failing to communicate with the concordium node or if any of the checks fails.
 * @returns {SDK.InvokeContractResult} The result of invoking the smart contract instance.
 */
export declare function dryRunCreateSubRecordWithExtras2(
  contractClient: RecheckContract,
  parameter: CreateSubRecordWithExtras2Parameter,
  invokeMetadata?: SDK.ContractInvokeMetadata,
  blockHash?: SDK.BlockHash.Type,
): Promise<SDK.InvokeContractResult>;
/** Error message for dry-running update transaction for 'createSubRecordWithExtras2' entrypoint of the 'recheck' contract. */
export type ErrorMessageCreateSubRecordWithExtras2 =
  | {
      type: "ParseError";
    }
  | {
      type: "Unauthorized";
    }
  | {
      type: "ContractError";
    }
  | {
      type: "Custom";
      content: string;
    };
/**
 * Get and parse the error message from dry-running update transaction for 'createSubRecordWithExtras2' entrypoint of the 'recheck' contract.
 * Returns undefined if the result is not a failure.
 * @param {SDK.InvokeContractResult} invokeResult The result from dry-running the transaction.
 * @returns {ErrorMessageCreateSubRecordWithExtras2 | undefined} The structured error message or undefined if result was not a failure or failed for other reason than contract rejectedReceive.
 */
export declare function parseErrorMessageCreateSubRecordWithExtras2(
  invokeResult: SDK.InvokeContractResult,
): ErrorMessageCreateSubRecordWithExtras2 | undefined;
/** Parameter JSON type needed by the schema for update transaction for 'createSubRecord' entrypoint of the 'recheck' contract. */
type CreateSubRecordParameterSchemaJson = {
  record_id: string;
  parent_record_id: string;
  trail: string;
  trail_signature: string;
};
/** Parameter type for update transaction for 'createSubRecord' entrypoint of the 'recheck' contract. */
export type CreateSubRecordParameter = {
  record_id: string;
  parent_record_id: string;
  trail: string;
  trail_signature: string;
};
/**
 * Construct Parameter type used in update transaction for 'createSubRecord' entrypoint of the 'recheck' contract.
 * @param {CreateSubRecordParameter} parameter The structured parameter to construct from.
 * @returns {SDK.Parameter.Type} The smart contract parameter.
 */
export declare function createCreateSubRecordParameter(
  parameter: CreateSubRecordParameter,
): SDK.Parameter.Type;
/**
 * Construct WebWallet parameter type used in update transaction for 'createSubRecord' entrypoint of the 'recheck' contract.
 * @param {CreateSubRecordParameter} parameter The structured parameter to construct from.
 * @returns The smart contract parameter support by the WebWallet.
 */
export declare function createCreateSubRecordParameterWebWallet(
  parameter: CreateSubRecordParameter,
): {
  parameters: CreateSubRecordParameterSchemaJson;
  schema: {
    type: "TypeSchema";
    value: any;
  };
};
/**
 * Send an update-contract transaction to the 'createSubRecord' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractTransactionMetadata} transactionMetadata - Metadata related to constructing a transaction for a smart contract.
 * @param {CreateSubRecordParameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.AccountSigner} signer - The signer of the update contract transaction.
 * @throws If the entrypoint is not successfully invoked.
 * @returns {SDK.TransactionHash.Type} Hash of the transaction.
 */
export declare function sendCreateSubRecord(
  contractClient: RecheckContract,
  transactionMetadata: SDK.ContractTransactionMetadata,
  parameter: CreateSubRecordParameter,
  signer: SDK.AccountSigner,
): Promise<SDK.TransactionHash.Type>;
/**
 * Dry-run an update-contract transaction to the 'createSubRecord' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractAddress.Type | SDK.AccountAddress.Type} invokeMetadata - The address of the account or contract which is invoking this transaction.
 * @param {CreateSubRecordParameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.BlockHash.Type} [blockHash] - Optional block hash allowing for dry-running the transaction at the end of a specific block.
 * @throws {SDK.RpcError} If failing to communicate with the concordium node or if any of the checks fails.
 * @returns {SDK.InvokeContractResult} The result of invoking the smart contract instance.
 */
export declare function dryRunCreateSubRecord(
  contractClient: RecheckContract,
  parameter: CreateSubRecordParameter,
  invokeMetadata?: SDK.ContractInvokeMetadata,
  blockHash?: SDK.BlockHash.Type,
): Promise<SDK.InvokeContractResult>;
/** Error message for dry-running update transaction for 'createSubRecord' entrypoint of the 'recheck' contract. */
export type ErrorMessageCreateSubRecord =
  | {
      type: "ParseError";
    }
  | {
      type: "Unauthorized";
    }
  | {
      type: "ContractError";
    }
  | {
      type: "Custom";
      content: string;
    };
/**
 * Get and parse the error message from dry-running update transaction for 'createSubRecord' entrypoint of the 'recheck' contract.
 * Returns undefined if the result is not a failure.
 * @param {SDK.InvokeContractResult} invokeResult The result from dry-running the transaction.
 * @returns {ErrorMessageCreateSubRecord | undefined} The structured error message or undefined if result was not a failure or failed for other reason than contract rejectedReceive.
 */
export declare function parseErrorMessageCreateSubRecord(
  invokeResult: SDK.InvokeContractResult,
): ErrorMessageCreateSubRecord | undefined;
/** Parameter JSON type needed by the schema for update transaction for 'createRecord' entrypoint of the 'recheck' contract. */
type CreateRecordParameterSchemaJson = {
  record_id: string;
  trail: string;
  trail_signature: string;
};
/** Parameter type for update transaction for 'createRecord' entrypoint of the 'recheck' contract. */
export type CreateRecordParameter = {
  record_id: string;
  trail: string;
  trail_signature: string;
};
/**
 * Construct Parameter type used in update transaction for 'createRecord' entrypoint of the 'recheck' contract.
 * @param {CreateRecordParameter} parameter The structured parameter to construct from.
 * @returns {SDK.Parameter.Type} The smart contract parameter.
 */
export declare function createCreateRecordParameter(
  parameter: CreateRecordParameter,
): SDK.Parameter.Type;
/**
 * Construct WebWallet parameter type used in update transaction for 'createRecord' entrypoint of the 'recheck' contract.
 * @param {CreateRecordParameter} parameter The structured parameter to construct from.
 * @returns The smart contract parameter support by the WebWallet.
 */
export declare function createCreateRecordParameterWebWallet(
  parameter: CreateRecordParameter,
): {
  parameters: CreateRecordParameterSchemaJson;
  schema: {
    type: "TypeSchema";
    value: any;
  };
};
/**
 * Send an update-contract transaction to the 'createRecord' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractTransactionMetadata} transactionMetadata - Metadata related to constructing a transaction for a smart contract.
 * @param {CreateRecordParameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.AccountSigner} signer - The signer of the update contract transaction.
 * @throws If the entrypoint is not successfully invoked.
 * @returns {SDK.TransactionHash.Type} Hash of the transaction.
 */
export declare function sendCreateRecord(
  contractClient: RecheckContract,
  transactionMetadata: SDK.ContractTransactionMetadata,
  parameter: CreateRecordParameter,
  signer: SDK.AccountSigner,
): Promise<SDK.TransactionHash.Type>;
/**
 * Dry-run an update-contract transaction to the 'createRecord' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractAddress.Type | SDK.AccountAddress.Type} invokeMetadata - The address of the account or contract which is invoking this transaction.
 * @param {CreateRecordParameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.BlockHash.Type} [blockHash] - Optional block hash allowing for dry-running the transaction at the end of a specific block.
 * @throws {SDK.RpcError} If failing to communicate with the concordium node or if any of the checks fails.
 * @returns {SDK.InvokeContractResult} The result of invoking the smart contract instance.
 */
export declare function dryRunCreateRecord(
  contractClient: RecheckContract,
  parameter: CreateRecordParameter,
  invokeMetadata?: SDK.ContractInvokeMetadata,
  blockHash?: SDK.BlockHash.Type,
): Promise<SDK.InvokeContractResult>;
/** Error message for dry-running update transaction for 'createRecord' entrypoint of the 'recheck' contract. */
export type ErrorMessageCreateRecord =
  | {
      type: "ParseError";
    }
  | {
      type: "Unauthorized";
    }
  | {
      type: "ContractError";
    }
  | {
      type: "Custom";
      content: string;
    };
/**
 * Get and parse the error message from dry-running update transaction for 'createRecord' entrypoint of the 'recheck' contract.
 * Returns undefined if the result is not a failure.
 * @param {SDK.InvokeContractResult} invokeResult The result from dry-running the transaction.
 * @returns {ErrorMessageCreateRecord | undefined} The structured error message or undefined if result was not a failure or failed for other reason than contract rejectedReceive.
 */
export declare function parseErrorMessageCreateRecord(
  invokeResult: SDK.InvokeContractResult,
): ErrorMessageCreateRecord | undefined;
/** Parameter type for update transaction for 'records' entrypoint of the 'recheck' contract. */
export type RecordsParameter = string;
/**
 * Construct Parameter type used in update transaction for 'records' entrypoint of the 'recheck' contract.
 * @param {RecordsParameter} parameter The structured parameter to construct from.
 * @returns {SDK.Parameter.Type} The smart contract parameter.
 */
export declare function createRecordsParameter(
  parameter: RecordsParameter,
): SDK.Parameter.Type;
/**
 * Construct WebWallet parameter type used in update transaction for 'records' entrypoint of the 'recheck' contract.
 * @param {RecordsParameter} parameter The structured parameter to construct from.
 * @returns The smart contract parameter support by the WebWallet.
 */
export declare function createRecordsParameterWebWallet(
  parameter: RecordsParameter,
): {
  parameters: string;
  schema: {
    type: "TypeSchema";
    value: any;
  };
};
/**
 * Send an update-contract transaction to the 'records' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractTransactionMetadata} transactionMetadata - Metadata related to constructing a transaction for a smart contract.
 * @param {RecordsParameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.AccountSigner} signer - The signer of the update contract transaction.
 * @throws If the entrypoint is not successfully invoked.
 * @returns {SDK.TransactionHash.Type} Hash of the transaction.
 */
export declare function sendRecords(
  contractClient: RecheckContract,
  transactionMetadata: SDK.ContractTransactionMetadata,
  parameter: RecordsParameter,
  signer: SDK.AccountSigner,
): Promise<SDK.TransactionHash.Type>;
/**
 * Dry-run an update-contract transaction to the 'records' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractAddress.Type | SDK.AccountAddress.Type} invokeMetadata - The address of the account or contract which is invoking this transaction.
 * @param {RecordsParameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.BlockHash.Type} [blockHash] - Optional block hash allowing for dry-running the transaction at the end of a specific block.
 * @throws {SDK.RpcError} If failing to communicate with the concordium node or if any of the checks fails.
 * @returns {SDK.InvokeContractResult} The result of invoking the smart contract instance.
 */
export declare function dryRunRecords(
  contractClient: RecheckContract,
  parameter: RecordsParameter,
  invokeMetadata?: SDK.ContractInvokeMetadata,
  blockHash?: SDK.BlockHash.Type,
): Promise<SDK.InvokeContractResult>;
/** Return value for dry-running update transaction for 'records' entrypoint of the 'recheck' contract. */
export type ReturnValueRecords = {
  record_id: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ];
  parent_record_id: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ];
  trail: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ];
  trail_signature: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ];
  creator:
    | {
        type: "Account";
        content: SDK.AccountAddress.Type;
      }
    | {
        type: "Contract";
        content: SDK.ContractAddress.Type;
      };
  timestamp: SDK.Timestamp.Type;
  sub_records_length: number | bigint;
};
/**
 * Get and parse the return value from dry-running update transaction for 'records' entrypoint of the 'recheck' contract.
 * Returns undefined if the result is not successful.
 * @param {SDK.InvokeContractResult} invokeResult The result from dry-running the transaction.
 * @returns {ReturnValueRecords | undefined} The structured return value or undefined if result was not a success.
 */
export declare function parseReturnValueRecords(
  invokeResult: SDK.InvokeContractResult,
): ReturnValueRecords | undefined;
/** Parameter JSON type needed by the schema for update transaction for 'subRecord' entrypoint of the 'recheck' contract. */
type SubRecordParameterSchemaJson = {
  sub_record_id: string;
  index: bigint;
};
/** Parameter type for update transaction for 'subRecord' entrypoint of the 'recheck' contract. */
export type SubRecordParameter = {
  sub_record_id: string;
  index: number | bigint;
};
/**
 * Construct Parameter type used in update transaction for 'subRecord' entrypoint of the 'recheck' contract.
 * @param {SubRecordParameter} parameter The structured parameter to construct from.
 * @returns {SDK.Parameter.Type} The smart contract parameter.
 */
export declare function createSubRecordParameter(
  parameter: SubRecordParameter,
): SDK.Parameter.Type;
/**
 * Construct WebWallet parameter type used in update transaction for 'subRecord' entrypoint of the 'recheck' contract.
 * @param {SubRecordParameter} parameter The structured parameter to construct from.
 * @returns The smart contract parameter support by the WebWallet.
 */
export declare function createSubRecordParameterWebWallet(
  parameter: SubRecordParameter,
): {
  parameters: SubRecordParameterSchemaJson;
  schema: {
    type: "TypeSchema";
    value: any;
  };
};
/**
 * Send an update-contract transaction to the 'subRecord' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractTransactionMetadata} transactionMetadata - Metadata related to constructing a transaction for a smart contract.
 * @param {SubRecordParameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.AccountSigner} signer - The signer of the update contract transaction.
 * @throws If the entrypoint is not successfully invoked.
 * @returns {SDK.TransactionHash.Type} Hash of the transaction.
 */
export declare function sendSubRecord(
  contractClient: RecheckContract,
  transactionMetadata: SDK.ContractTransactionMetadata,
  parameter: SubRecordParameter,
  signer: SDK.AccountSigner,
): Promise<SDK.TransactionHash.Type>;
/**
 * Dry-run an update-contract transaction to the 'subRecord' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractAddress.Type | SDK.AccountAddress.Type} invokeMetadata - The address of the account or contract which is invoking this transaction.
 * @param {SubRecordParameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.BlockHash.Type} [blockHash] - Optional block hash allowing for dry-running the transaction at the end of a specific block.
 * @throws {SDK.RpcError} If failing to communicate with the concordium node or if any of the checks fails.
 * @returns {SDK.InvokeContractResult} The result of invoking the smart contract instance.
 */
export declare function dryRunSubRecord(
  contractClient: RecheckContract,
  parameter: SubRecordParameter,
  invokeMetadata?: SDK.ContractInvokeMetadata,
  blockHash?: SDK.BlockHash.Type,
): Promise<SDK.InvokeContractResult>;
/** Return value for dry-running update transaction for 'subRecord' entrypoint of the 'recheck' contract. */
export type ReturnValueSubRecord = {
  record_id: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ];
  parent_record_id: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ];
  trail: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ];
  trail_signature: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ];
  creator:
    | {
        type: "Account";
        content: SDK.AccountAddress.Type;
      }
    | {
        type: "Contract";
        content: SDK.ContractAddress.Type;
      };
  timestamp: SDK.Timestamp.Type;
  sub_records_length: number | bigint;
};
/**
 * Get and parse the return value from dry-running update transaction for 'subRecord' entrypoint of the 'recheck' contract.
 * Returns undefined if the result is not successful.
 * @param {SDK.InvokeContractResult} invokeResult The result from dry-running the transaction.
 * @returns {ReturnValueSubRecord | undefined} The structured return value or undefined if result was not a success.
 */
export declare function parseReturnValueSubRecord(
  invokeResult: SDK.InvokeContractResult,
): ReturnValueSubRecord | undefined;
/** Parameter type for update transaction for 'verifyTrail' entrypoint of the 'recheck' contract. */
export type VerifyTrailParameter = string;
/**
 * Construct Parameter type used in update transaction for 'verifyTrail' entrypoint of the 'recheck' contract.
 * @param {VerifyTrailParameter} parameter The structured parameter to construct from.
 * @returns {SDK.Parameter.Type} The smart contract parameter.
 */
export declare function createVerifyTrailParameter(
  parameter: VerifyTrailParameter,
): SDK.Parameter.Type;
/**
 * Construct WebWallet parameter type used in update transaction for 'verifyTrail' entrypoint of the 'recheck' contract.
 * @param {VerifyTrailParameter} parameter The structured parameter to construct from.
 * @returns The smart contract parameter support by the WebWallet.
 */
export declare function createVerifyTrailParameterWebWallet(
  parameter: VerifyTrailParameter,
): {
  parameters: string;
  schema: {
    type: "TypeSchema";
    value: any;
  };
};
/**
 * Send an update-contract transaction to the 'verifyTrail' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractTransactionMetadata} transactionMetadata - Metadata related to constructing a transaction for a smart contract.
 * @param {VerifyTrailParameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.AccountSigner} signer - The signer of the update contract transaction.
 * @throws If the entrypoint is not successfully invoked.
 * @returns {SDK.TransactionHash.Type} Hash of the transaction.
 */
export declare function sendVerifyTrail(
  contractClient: RecheckContract,
  transactionMetadata: SDK.ContractTransactionMetadata,
  parameter: VerifyTrailParameter,
  signer: SDK.AccountSigner,
): Promise<SDK.TransactionHash.Type>;
/**
 * Dry-run an update-contract transaction to the 'verifyTrail' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractAddress.Type | SDK.AccountAddress.Type} invokeMetadata - The address of the account or contract which is invoking this transaction.
 * @param {VerifyTrailParameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.BlockHash.Type} [blockHash] - Optional block hash allowing for dry-running the transaction at the end of a specific block.
 * @throws {SDK.RpcError} If failing to communicate with the concordium node or if any of the checks fails.
 * @returns {SDK.InvokeContractResult} The result of invoking the smart contract instance.
 */
export declare function dryRunVerifyTrail(
  contractClient: RecheckContract,
  parameter: VerifyTrailParameter,
  invokeMetadata?: SDK.ContractInvokeMetadata,
  blockHash?: SDK.BlockHash.Type,
): Promise<SDK.InvokeContractResult>;
/** Return value for dry-running update transaction for 'verifyTrail' entrypoint of the 'recheck' contract. */
export type ReturnValueVerifyTrail = {
  record_id: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ];
  parent_record_id: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ];
  trail: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ];
  trail_signature: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ];
  creator:
    | {
        type: "Account";
        content: SDK.AccountAddress.Type;
      }
    | {
        type: "Contract";
        content: SDK.ContractAddress.Type;
      };
  timestamp: SDK.Timestamp.Type;
  sub_records_length: number | bigint;
};
/**
 * Get and parse the return value from dry-running update transaction for 'verifyTrail' entrypoint of the 'recheck' contract.
 * Returns undefined if the result is not successful.
 * @param {SDK.InvokeContractResult} invokeResult The result from dry-running the transaction.
 * @returns {ReturnValueVerifyTrail | undefined} The structured return value or undefined if result was not a success.
 */
export declare function parseReturnValueVerifyTrail(
  invokeResult: SDK.InvokeContractResult,
): ReturnValueVerifyTrail | undefined;
/** Parameter type for update transaction for 'verifyExtra0' entrypoint of the 'recheck' contract. */
export type VerifyExtra0Parameter = string;
/**
 * Construct Parameter type used in update transaction for 'verifyExtra0' entrypoint of the 'recheck' contract.
 * @param {VerifyExtra0Parameter} parameter The structured parameter to construct from.
 * @returns {SDK.Parameter.Type} The smart contract parameter.
 */
export declare function createVerifyExtra0Parameter(
  parameter: VerifyExtra0Parameter,
): SDK.Parameter.Type;
/**
 * Construct WebWallet parameter type used in update transaction for 'verifyExtra0' entrypoint of the 'recheck' contract.
 * @param {VerifyExtra0Parameter} parameter The structured parameter to construct from.
 * @returns The smart contract parameter support by the WebWallet.
 */
export declare function createVerifyExtra0ParameterWebWallet(
  parameter: VerifyExtra0Parameter,
): {
  parameters: string;
  schema: {
    type: "TypeSchema";
    value: any;
  };
};
/**
 * Send an update-contract transaction to the 'verifyExtra0' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractTransactionMetadata} transactionMetadata - Metadata related to constructing a transaction for a smart contract.
 * @param {VerifyExtra0Parameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.AccountSigner} signer - The signer of the update contract transaction.
 * @throws If the entrypoint is not successfully invoked.
 * @returns {SDK.TransactionHash.Type} Hash of the transaction.
 */
export declare function sendVerifyExtra0(
  contractClient: RecheckContract,
  transactionMetadata: SDK.ContractTransactionMetadata,
  parameter: VerifyExtra0Parameter,
  signer: SDK.AccountSigner,
): Promise<SDK.TransactionHash.Type>;
/**
 * Dry-run an update-contract transaction to the 'verifyExtra0' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractAddress.Type | SDK.AccountAddress.Type} invokeMetadata - The address of the account or contract which is invoking this transaction.
 * @param {VerifyExtra0Parameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.BlockHash.Type} [blockHash] - Optional block hash allowing for dry-running the transaction at the end of a specific block.
 * @throws {SDK.RpcError} If failing to communicate with the concordium node or if any of the checks fails.
 * @returns {SDK.InvokeContractResult} The result of invoking the smart contract instance.
 */
export declare function dryRunVerifyExtra0(
  contractClient: RecheckContract,
  parameter: VerifyExtra0Parameter,
  invokeMetadata?: SDK.ContractInvokeMetadata,
  blockHash?: SDK.BlockHash.Type,
): Promise<SDK.InvokeContractResult>;
/** Return value for dry-running update transaction for 'verifyExtra0' entrypoint of the 'recheck' contract. */
export type ReturnValueVerifyExtra0 = {
  record_id: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ];
  parent_record_id: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ];
  trail: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ];
  trail_signature: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ];
  creator:
    | {
        type: "Account";
        content: SDK.AccountAddress.Type;
      }
    | {
        type: "Contract";
        content: SDK.ContractAddress.Type;
      };
  timestamp: SDK.Timestamp.Type;
  sub_records_length: number | bigint;
};
/**
 * Get and parse the return value from dry-running update transaction for 'verifyExtra0' entrypoint of the 'recheck' contract.
 * Returns undefined if the result is not successful.
 * @param {SDK.InvokeContractResult} invokeResult The result from dry-running the transaction.
 * @returns {ReturnValueVerifyExtra0 | undefined} The structured return value or undefined if result was not a success.
 */
export declare function parseReturnValueVerifyExtra0(
  invokeResult: SDK.InvokeContractResult,
): ReturnValueVerifyExtra0 | undefined;
/** Parameter type for update transaction for 'verifyExtra1' entrypoint of the 'recheck' contract. */
export type VerifyExtra1Parameter = string;
/**
 * Construct Parameter type used in update transaction for 'verifyExtra1' entrypoint of the 'recheck' contract.
 * @param {VerifyExtra1Parameter} parameter The structured parameter to construct from.
 * @returns {SDK.Parameter.Type} The smart contract parameter.
 */
export declare function createVerifyExtra1Parameter(
  parameter: VerifyExtra1Parameter,
): SDK.Parameter.Type;
/**
 * Construct WebWallet parameter type used in update transaction for 'verifyExtra1' entrypoint of the 'recheck' contract.
 * @param {VerifyExtra1Parameter} parameter The structured parameter to construct from.
 * @returns The smart contract parameter support by the WebWallet.
 */
export declare function createVerifyExtra1ParameterWebWallet(
  parameter: VerifyExtra1Parameter,
): {
  parameters: string;
  schema: {
    type: "TypeSchema";
    value: any;
  };
};
/**
 * Send an update-contract transaction to the 'verifyExtra1' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractTransactionMetadata} transactionMetadata - Metadata related to constructing a transaction for a smart contract.
 * @param {VerifyExtra1Parameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.AccountSigner} signer - The signer of the update contract transaction.
 * @throws If the entrypoint is not successfully invoked.
 * @returns {SDK.TransactionHash.Type} Hash of the transaction.
 */
export declare function sendVerifyExtra1(
  contractClient: RecheckContract,
  transactionMetadata: SDK.ContractTransactionMetadata,
  parameter: VerifyExtra1Parameter,
  signer: SDK.AccountSigner,
): Promise<SDK.TransactionHash.Type>;
/**
 * Dry-run an update-contract transaction to the 'verifyExtra1' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractAddress.Type | SDK.AccountAddress.Type} invokeMetadata - The address of the account or contract which is invoking this transaction.
 * @param {VerifyExtra1Parameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.BlockHash.Type} [blockHash] - Optional block hash allowing for dry-running the transaction at the end of a specific block.
 * @throws {SDK.RpcError} If failing to communicate with the concordium node or if any of the checks fails.
 * @returns {SDK.InvokeContractResult} The result of invoking the smart contract instance.
 */
export declare function dryRunVerifyExtra1(
  contractClient: RecheckContract,
  parameter: VerifyExtra1Parameter,
  invokeMetadata?: SDK.ContractInvokeMetadata,
  blockHash?: SDK.BlockHash.Type,
): Promise<SDK.InvokeContractResult>;
/** Return value for dry-running update transaction for 'verifyExtra1' entrypoint of the 'recheck' contract. */
export type ReturnValueVerifyExtra1 = {
  record_id: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ];
  parent_record_id: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ];
  trail: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ];
  trail_signature: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ];
  creator:
    | {
        type: "Account";
        content: SDK.AccountAddress.Type;
      }
    | {
        type: "Contract";
        content: SDK.ContractAddress.Type;
      };
  timestamp: SDK.Timestamp.Type;
  sub_records_length: number | bigint;
};
/**
 * Get and parse the return value from dry-running update transaction for 'verifyExtra1' entrypoint of the 'recheck' contract.
 * Returns undefined if the result is not successful.
 * @param {SDK.InvokeContractResult} invokeResult The result from dry-running the transaction.
 * @returns {ReturnValueVerifyExtra1 | undefined} The structured return value or undefined if result was not a success.
 */
export declare function parseReturnValueVerifyExtra1(
  invokeResult: SDK.InvokeContractResult,
): ReturnValueVerifyExtra1 | undefined;
export {};

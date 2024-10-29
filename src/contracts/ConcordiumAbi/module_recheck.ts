import * as SDK from "@concordium/web-sdk";
/** The reference of the smart contract module supported by the provided client. */
export const moduleReference: SDK.ModuleReference.Type =
  /*#__PURE__*/ SDK.ModuleReference.fromHexString(
    "3e3c617c89c1ea454df444f6c5fcece12c2f100646b9957e304b72f93caf24d5",
  );
/** Name of the smart contract supported by this client. */
export const contractName: SDK.ContractName.Type =
  /*#__PURE__*/ SDK.ContractName.fromStringUnchecked("recheck");

/** Smart contract client for a contract instance on chain. */
class RecheckContract {
  /** Having a private field prevents similar structured objects to be considered the same type (similar to nominal typing). */
  private __nominal = true;
  /** The gRPC connection used by this client. */
  public readonly grpcClient: SDK.ConcordiumGRPCClient;
  /** The contract address used by this client. */
  public readonly contractAddress: SDK.ContractAddress.Type;
  /** Generic contract client used internally. */
  public readonly genericContract: SDK.Contract;

  constructor(
    grpcClient: SDK.ConcordiumGRPCClient,
    contractAddress: SDK.ContractAddress.Type,
    genericContract: SDK.Contract,
  ) {
    this.grpcClient = grpcClient;
    this.contractAddress = contractAddress;
    this.genericContract = genericContract;
  }
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
export async function create(
  grpcClient: SDK.ConcordiumGRPCClient,
  contractAddress: SDK.ContractAddress.Type,
  blockHash?: SDK.BlockHash.Type,
): Promise<RecheckContract> {
  const genericContract = new SDK.Contract(
    grpcClient,
    contractAddress,
    contractName,
  );
  await genericContract.checkOnChain({
    moduleReference: moduleReference,
    blockHash: blockHash,
  });
  return new RecheckContract(grpcClient, contractAddress, genericContract);
}

/**
 * Construct the `RecheckContract` for interacting with a 'recheck' contract on chain.
 * Without checking the instance information on chain.
 * @param {SDK.ConcordiumGRPCClient} grpcClient - The client used for contract invocations and updates.
 * @param {SDK.ContractAddress.Type} contractAddress - Address of the contract instance.
 * @returns {RecheckContract}
 */
export function createUnchecked(
  grpcClient: SDK.ConcordiumGRPCClient,
  contractAddress: SDK.ContractAddress.Type,
): RecheckContract {
  const genericContract = new SDK.Contract(
    grpcClient,
    contractAddress,
    contractName,
  );
  return new RecheckContract(grpcClient, contractAddress, genericContract);
}

/**
 * Check if the smart contract instance exists on the blockchain and whether it uses a matching contract name and module reference.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.BlockHash.Type} [blockHash] A optional block hash to use for checking information on chain, if not provided the last finalized will be used.
 * @throws {SDK.RpcError} If failing to communicate with the concordium node or if any of the checks fails.
 */
export function checkOnChain(
  contractClient: RecheckContract,
  blockHash?: SDK.BlockHash.Type,
): Promise<void> {
  return contractClient.genericContract.checkOnChain({
    moduleReference: moduleReference,
    blockHash: blockHash,
  });
}
/** Base64 encoding of the parameter schema type for update transactions to 'createSubRecordWithExtras2' entrypoint of the 'recheck' contract. */
const base64CreateSubRecordWithExtras2ParameterSchema =
  "FAAGAAAACQAAAHJlY29yZF9pZBYCEAAAAHBhcmVudF9yZWNvcmRfaWQWAgUAAAB0cmFpbBYCDwAAAHRyYWlsX3NpZ25hdHVyZRYCBgAAAGV4dHJhMBYCBgAAAGV4dHJhMRYC";
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
 * Construct schema JSON representation used in update transaction for 'createSubRecordWithExtras2' entrypoint of the 'recheck' contract.
 * @param {CreateSubRecordWithExtras2Parameter} parameter The structured parameter to construct from.
 * @returns {CreateSubRecordWithExtras2ParameterSchemaJson} The smart contract parameter JSON.
 */
function createCreateSubRecordWithExtras2ParameterSchemaJson(
  parameter: CreateSubRecordWithExtras2Parameter,
): CreateSubRecordWithExtras2ParameterSchemaJson {
  const field1 = parameter.record_id;
  const field2 = parameter.parent_record_id;
  const field3 = parameter.trail;
  const field4 = parameter.trail_signature;
  const field5 = parameter.extra0;
  const field6 = parameter.extra1;
  const named0 = {
    record_id: field1,
    parent_record_id: field2,
    trail: field3,
    trail_signature: field4,
    extra0: field5,
    extra1: field6,
  };
  return named0;
}

/**
 * Construct Parameter type used in update transaction for 'createSubRecordWithExtras2' entrypoint of the 'recheck' contract.
 * @param {CreateSubRecordWithExtras2Parameter} parameter The structured parameter to construct from.
 * @returns {SDK.Parameter.Type} The smart contract parameter.
 */
export function createCreateSubRecordWithExtras2Parameter(
  parameter: CreateSubRecordWithExtras2Parameter,
): SDK.Parameter.Type {
  return SDK.Parameter.fromBase64SchemaType(
    base64CreateSubRecordWithExtras2ParameterSchema,
    createCreateSubRecordWithExtras2ParameterSchemaJson(parameter),
  );
}

/**
 * Construct WebWallet parameter type used in update transaction for 'createSubRecordWithExtras2' entrypoint of the 'recheck' contract.
 * @param {CreateSubRecordWithExtras2Parameter} parameter The structured parameter to construct from.
 * @returns The smart contract parameter support by the WebWallet.
 */
export function createCreateSubRecordWithExtras2ParameterWebWallet(
  parameter: CreateSubRecordWithExtras2Parameter,
) {
  return {
    parameters: createCreateSubRecordWithExtras2ParameterSchemaJson(parameter),
    schema: {
      type: "TypeSchema" as const,
      value: SDK.toBuffer(
        base64CreateSubRecordWithExtras2ParameterSchema,
        "base64",
      ),
    },
  };
}

/**
 * Send an update-contract transaction to the 'createSubRecordWithExtras2' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractTransactionMetadata} transactionMetadata - Metadata related to constructing a transaction for a smart contract.
 * @param {CreateSubRecordWithExtras2Parameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.AccountSigner} signer - The signer of the update contract transaction.
 * @throws If the entrypoint is not successfully invoked.
 * @returns {SDK.TransactionHash.Type} Hash of the transaction.
 */
export function sendCreateSubRecordWithExtras2(
  contractClient: RecheckContract,
  transactionMetadata: SDK.ContractTransactionMetadata,
  parameter: CreateSubRecordWithExtras2Parameter,
  signer: SDK.AccountSigner,
): Promise<SDK.TransactionHash.Type> {
  return contractClient.genericContract.createAndSendUpdateTransaction(
    SDK.EntrypointName.fromStringUnchecked("createSubRecordWithExtras2"),
    SDK.Parameter.toBuffer,
    transactionMetadata,
    createCreateSubRecordWithExtras2Parameter(parameter),
    signer,
  );
}

/**
 * Dry-run an update-contract transaction to the 'createSubRecordWithExtras2' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractAddress.Type | SDK.AccountAddress.Type} invokeMetadata - The address of the account or contract which is invoking this transaction.
 * @param {CreateSubRecordWithExtras2Parameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.BlockHash.Type} [blockHash] - Optional block hash allowing for dry-running the transaction at the end of a specific block.
 * @throws {SDK.RpcError} If failing to communicate with the concordium node or if any of the checks fails.
 * @returns {SDK.InvokeContractResult} The result of invoking the smart contract instance.
 */
export function dryRunCreateSubRecordWithExtras2(
  contractClient: RecheckContract,
  parameter: CreateSubRecordWithExtras2Parameter,
  invokeMetadata: SDK.ContractInvokeMetadata = {},
  blockHash?: SDK.BlockHash.Type,
): Promise<SDK.InvokeContractResult> {
  return contractClient.genericContract.dryRun.invokeMethod(
    SDK.EntrypointName.fromStringUnchecked("createSubRecordWithExtras2"),
    invokeMetadata,
    SDK.Parameter.toBuffer,
    createCreateSubRecordWithExtras2Parameter(parameter),
    blockHash,
  );
}

/** Error message for dry-running update transaction for 'createSubRecordWithExtras2' entrypoint of the 'recheck' contract. */
export type ErrorMessageCreateSubRecordWithExtras2 =
  | { type: "ParseError" }
  | { type: "Unauthorized" }
  | { type: "ContractError" }
  | { type: "Custom"; content: string };

/**
 * Get and parse the error message from dry-running update transaction for 'createSubRecordWithExtras2' entrypoint of the 'recheck' contract.
 * Returns undefined if the result is not a failure.
 * @param {SDK.InvokeContractResult} invokeResult The result from dry-running the transaction.
 * @returns {ErrorMessageCreateSubRecordWithExtras2 | undefined} The structured error message or undefined if result was not a failure or failed for other reason than contract rejectedReceive.
 */
export function parseErrorMessageCreateSubRecordWithExtras2(
  invokeResult: SDK.InvokeContractResult,
): ErrorMessageCreateSubRecordWithExtras2 | undefined {
  if (
    invokeResult.tag !== "failure" ||
    invokeResult.reason.tag !== "RejectedReceive"
  ) {
    return undefined;
  }

  if (invokeResult.returnValue === undefined) {
    throw new Error(
      "Unexpected missing 'returnValue' in result of invocation. Client expected a V1 smart contract.",
    );
  }

  const schemaJson = <
    | { ParseError: [] }
    | { Unauthorized: [] }
    | { ContractError: [] }
    | { Custom: [string] }
  >SDK.ReturnValue.parseWithSchemaTypeBase64(
    invokeResult.returnValue,
    "FQQAAAAKAAAAUGFyc2VFcnJvcgIMAAAAVW5hdXRob3JpemVkAg0AAABDb250cmFjdEVycm9yAgYAAABDdXN0b20BAQAAABYC",
  );
  let match7:
    | { type: "ParseError" }
    | { type: "Unauthorized" }
    | { type: "ContractError" }
    | { type: "Custom"; content: string };
  if ("ParseError" in schemaJson) {
    match7 = {
      type: "ParseError",
    };
  } else if ("Unauthorized" in schemaJson) {
    match7 = {
      type: "Unauthorized",
    };
  } else if ("ContractError" in schemaJson) {
    match7 = {
      type: "ContractError",
    };
  } else if ("Custom" in schemaJson) {
    const variant11 = schemaJson.Custom;
    match7 = {
      type: "Custom",
      content: variant11[0],
    };
  } else {
    throw new Error("Unexpected enum variant");
  }

  return match7;
}
/** Base64 encoding of the parameter schema type for update transactions to 'createSubRecord' entrypoint of the 'recheck' contract. */
const base64CreateSubRecordParameterSchema =
  "FAAEAAAACQAAAHJlY29yZF9pZBYCEAAAAHBhcmVudF9yZWNvcmRfaWQWAgUAAAB0cmFpbBYCDwAAAHRyYWlsX3NpZ25hdHVyZRYC";
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
 * Construct schema JSON representation used in update transaction for 'createSubRecord' entrypoint of the 'recheck' contract.
 * @param {CreateSubRecordParameter} parameter The structured parameter to construct from.
 * @returns {CreateSubRecordParameterSchemaJson} The smart contract parameter JSON.
 */
function createCreateSubRecordParameterSchemaJson(
  parameter: CreateSubRecordParameter,
): CreateSubRecordParameterSchemaJson {
  const field13 = parameter.record_id;
  const field14 = parameter.parent_record_id;
  const field15 = parameter.trail;
  const field16 = parameter.trail_signature;
  const named12 = {
    record_id: field13,
    parent_record_id: field14,
    trail: field15,
    trail_signature: field16,
  };
  return named12;
}

/**
 * Construct Parameter type used in update transaction for 'createSubRecord' entrypoint of the 'recheck' contract.
 * @param {CreateSubRecordParameter} parameter The structured parameter to construct from.
 * @returns {SDK.Parameter.Type} The smart contract parameter.
 */
export function createCreateSubRecordParameter(
  parameter: CreateSubRecordParameter,
): SDK.Parameter.Type {
  return SDK.Parameter.fromBase64SchemaType(
    base64CreateSubRecordParameterSchema,
    createCreateSubRecordParameterSchemaJson(parameter),
  );
}

/**
 * Construct WebWallet parameter type used in update transaction for 'createSubRecord' entrypoint of the 'recheck' contract.
 * @param {CreateSubRecordParameter} parameter The structured parameter to construct from.
 * @returns The smart contract parameter support by the WebWallet.
 */
export function createCreateSubRecordParameterWebWallet(
  parameter: CreateSubRecordParameter,
) {
  return {
    parameters: createCreateSubRecordParameterSchemaJson(parameter),
    schema: {
      type: "TypeSchema" as const,
      value: SDK.toBuffer(base64CreateSubRecordParameterSchema, "base64"),
    },
  };
}

/**
 * Send an update-contract transaction to the 'createSubRecord' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractTransactionMetadata} transactionMetadata - Metadata related to constructing a transaction for a smart contract.
 * @param {CreateSubRecordParameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.AccountSigner} signer - The signer of the update contract transaction.
 * @throws If the entrypoint is not successfully invoked.
 * @returns {SDK.TransactionHash.Type} Hash of the transaction.
 */
export function sendCreateSubRecord(
  contractClient: RecheckContract,
  transactionMetadata: SDK.ContractTransactionMetadata,
  parameter: CreateSubRecordParameter,
  signer: SDK.AccountSigner,
): Promise<SDK.TransactionHash.Type> {
  return contractClient.genericContract.createAndSendUpdateTransaction(
    SDK.EntrypointName.fromStringUnchecked("createSubRecord"),
    SDK.Parameter.toBuffer,
    transactionMetadata,
    createCreateSubRecordParameter(parameter),
    signer,
  );
}

/**
 * Dry-run an update-contract transaction to the 'createSubRecord' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractAddress.Type | SDK.AccountAddress.Type} invokeMetadata - The address of the account or contract which is invoking this transaction.
 * @param {CreateSubRecordParameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.BlockHash.Type} [blockHash] - Optional block hash allowing for dry-running the transaction at the end of a specific block.
 * @throws {SDK.RpcError} If failing to communicate with the concordium node or if any of the checks fails.
 * @returns {SDK.InvokeContractResult} The result of invoking the smart contract instance.
 */
export function dryRunCreateSubRecord(
  contractClient: RecheckContract,
  parameter: CreateSubRecordParameter,
  invokeMetadata: SDK.ContractInvokeMetadata = {},
  blockHash?: SDK.BlockHash.Type,
): Promise<SDK.InvokeContractResult> {
  return contractClient.genericContract.dryRun.invokeMethod(
    SDK.EntrypointName.fromStringUnchecked("createSubRecord"),
    invokeMetadata,
    SDK.Parameter.toBuffer,
    createCreateSubRecordParameter(parameter),
    blockHash,
  );
}

/** Error message for dry-running update transaction for 'createSubRecord' entrypoint of the 'recheck' contract. */
export type ErrorMessageCreateSubRecord =
  | { type: "ParseError" }
  | { type: "Unauthorized" }
  | { type: "ContractError" }
  | { type: "Custom"; content: string };

/**
 * Get and parse the error message from dry-running update transaction for 'createSubRecord' entrypoint of the 'recheck' contract.
 * Returns undefined if the result is not a failure.
 * @param {SDK.InvokeContractResult} invokeResult The result from dry-running the transaction.
 * @returns {ErrorMessageCreateSubRecord | undefined} The structured error message or undefined if result was not a failure or failed for other reason than contract rejectedReceive.
 */
export function parseErrorMessageCreateSubRecord(
  invokeResult: SDK.InvokeContractResult,
): ErrorMessageCreateSubRecord | undefined {
  if (
    invokeResult.tag !== "failure" ||
    invokeResult.reason.tag !== "RejectedReceive"
  ) {
    return undefined;
  }

  if (invokeResult.returnValue === undefined) {
    throw new Error(
      "Unexpected missing 'returnValue' in result of invocation. Client expected a V1 smart contract.",
    );
  }

  const schemaJson = <
    | { ParseError: [] }
    | { Unauthorized: [] }
    | { ContractError: [] }
    | { Custom: [string] }
  >SDK.ReturnValue.parseWithSchemaTypeBase64(
    invokeResult.returnValue,
    "FQQAAAAKAAAAUGFyc2VFcnJvcgIMAAAAVW5hdXRob3JpemVkAg0AAABDb250cmFjdEVycm9yAgYAAABDdXN0b20BAQAAABYC",
  );
  let match17:
    | { type: "ParseError" }
    | { type: "Unauthorized" }
    | { type: "ContractError" }
    | { type: "Custom"; content: string };
  if ("ParseError" in schemaJson) {
    match17 = {
      type: "ParseError",
    };
  } else if ("Unauthorized" in schemaJson) {
    match17 = {
      type: "Unauthorized",
    };
  } else if ("ContractError" in schemaJson) {
    match17 = {
      type: "ContractError",
    };
  } else if ("Custom" in schemaJson) {
    const variant21 = schemaJson.Custom;
    match17 = {
      type: "Custom",
      content: variant21[0],
    };
  } else {
    throw new Error("Unexpected enum variant");
  }

  return match17;
}
/** Base64 encoding of the parameter schema type for update transactions to 'createRecord' entrypoint of the 'recheck' contract. */
const base64CreateRecordParameterSchema =
  "FAADAAAACQAAAHJlY29yZF9pZBYCBQAAAHRyYWlsFgIPAAAAdHJhaWxfc2lnbmF0dXJlFgI=";
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
 * Construct schema JSON representation used in update transaction for 'createRecord' entrypoint of the 'recheck' contract.
 * @param {CreateRecordParameter} parameter The structured parameter to construct from.
 * @returns {CreateRecordParameterSchemaJson} The smart contract parameter JSON.
 */
function createCreateRecordParameterSchemaJson(
  parameter: CreateRecordParameter,
): CreateRecordParameterSchemaJson {
  const field23 = parameter.record_id;
  const field24 = parameter.trail;
  const field25 = parameter.trail_signature;
  const named22 = {
    record_id: field23,
    trail: field24,
    trail_signature: field25,
  };
  return named22;
}

/**
 * Construct Parameter type used in update transaction for 'createRecord' entrypoint of the 'recheck' contract.
 * @param {CreateRecordParameter} parameter The structured parameter to construct from.
 * @returns {SDK.Parameter.Type} The smart contract parameter.
 */
export function createCreateRecordParameter(
  parameter: CreateRecordParameter,
): SDK.Parameter.Type {
  return SDK.Parameter.fromBase64SchemaType(
    base64CreateRecordParameterSchema,
    createCreateRecordParameterSchemaJson(parameter),
  );
}

/**
 * Construct WebWallet parameter type used in update transaction for 'createRecord' entrypoint of the 'recheck' contract.
 * @param {CreateRecordParameter} parameter The structured parameter to construct from.
 * @returns The smart contract parameter support by the WebWallet.
 */
export function createCreateRecordParameterWebWallet(
  parameter: CreateRecordParameter,
) {
  return {
    parameters: createCreateRecordParameterSchemaJson(parameter),
    schema: {
      type: "TypeSchema" as const,
      value: SDK.toBuffer(base64CreateRecordParameterSchema, "base64"),
    },
  };
}

/**
 * Send an update-contract transaction to the 'createRecord' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractTransactionMetadata} transactionMetadata - Metadata related to constructing a transaction for a smart contract.
 * @param {CreateRecordParameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.AccountSigner} signer - The signer of the update contract transaction.
 * @throws If the entrypoint is not successfully invoked.
 * @returns {SDK.TransactionHash.Type} Hash of the transaction.
 */
export function sendCreateRecord(
  contractClient: RecheckContract,
  transactionMetadata: SDK.ContractTransactionMetadata,
  parameter: CreateRecordParameter,
  signer: SDK.AccountSigner,
): Promise<SDK.TransactionHash.Type> {
  return contractClient.genericContract.createAndSendUpdateTransaction(
    SDK.EntrypointName.fromStringUnchecked("createRecord"),
    SDK.Parameter.toBuffer,
    transactionMetadata,
    createCreateRecordParameter(parameter),
    signer,
  );
}

/**
 * Dry-run an update-contract transaction to the 'createRecord' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractAddress.Type | SDK.AccountAddress.Type} invokeMetadata - The address of the account or contract which is invoking this transaction.
 * @param {CreateRecordParameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.BlockHash.Type} [blockHash] - Optional block hash allowing for dry-running the transaction at the end of a specific block.
 * @throws {SDK.RpcError} If failing to communicate with the concordium node or if any of the checks fails.
 * @returns {SDK.InvokeContractResult} The result of invoking the smart contract instance.
 */
export function dryRunCreateRecord(
  contractClient: RecheckContract,
  parameter: CreateRecordParameter,
  invokeMetadata: SDK.ContractInvokeMetadata = {},
  blockHash?: SDK.BlockHash.Type,
): Promise<SDK.InvokeContractResult> {
  return contractClient.genericContract.dryRun.invokeMethod(
    SDK.EntrypointName.fromStringUnchecked("createRecord"),
    invokeMetadata,
    SDK.Parameter.toBuffer,
    createCreateRecordParameter(parameter),
    blockHash,
  );
}

/** Error message for dry-running update transaction for 'createRecord' entrypoint of the 'recheck' contract. */
export type ErrorMessageCreateRecord =
  | { type: "ParseError" }
  | { type: "Unauthorized" }
  | { type: "ContractError" }
  | { type: "Custom"; content: string };

/**
 * Get and parse the error message from dry-running update transaction for 'createRecord' entrypoint of the 'recheck' contract.
 * Returns undefined if the result is not a failure.
 * @param {SDK.InvokeContractResult} invokeResult The result from dry-running the transaction.
 * @returns {ErrorMessageCreateRecord | undefined} The structured error message or undefined if result was not a failure or failed for other reason than contract rejectedReceive.
 */
export function parseErrorMessageCreateRecord(
  invokeResult: SDK.InvokeContractResult,
): ErrorMessageCreateRecord | undefined {
  if (
    invokeResult.tag !== "failure" ||
    invokeResult.reason.tag !== "RejectedReceive"
  ) {
    return undefined;
  }

  if (invokeResult.returnValue === undefined) {
    throw new Error(
      "Unexpected missing 'returnValue' in result of invocation. Client expected a V1 smart contract.",
    );
  }

  const schemaJson = <
    | { ParseError: [] }
    | { Unauthorized: [] }
    | { ContractError: [] }
    | { Custom: [string] }
  >SDK.ReturnValue.parseWithSchemaTypeBase64(
    invokeResult.returnValue,
    "FQQAAAAKAAAAUGFyc2VFcnJvcgIMAAAAVW5hdXRob3JpemVkAg0AAABDb250cmFjdEVycm9yAgYAAABDdXN0b20BAQAAABYC",
  );
  let match26:
    | { type: "ParseError" }
    | { type: "Unauthorized" }
    | { type: "ContractError" }
    | { type: "Custom"; content: string };
  if ("ParseError" in schemaJson) {
    match26 = {
      type: "ParseError",
    };
  } else if ("Unauthorized" in schemaJson) {
    match26 = {
      type: "Unauthorized",
    };
  } else if ("ContractError" in schemaJson) {
    match26 = {
      type: "ContractError",
    };
  } else if ("Custom" in schemaJson) {
    const variant30 = schemaJson.Custom;
    match26 = {
      type: "Custom",
      content: variant30[0],
    };
  } else {
    throw new Error("Unexpected enum variant");
  }

  return match26;
}
/** Base64 encoding of the parameter schema type for update transactions to 'records' entrypoint of the 'recheck' contract. */
const base64RecordsParameterSchema = "FgI=";
/** Parameter JSON type needed by the schema for update transaction for 'records' entrypoint of the 'recheck' contract. */
type RecordsParameterSchemaJson = string;
/** Parameter type for update transaction for 'records' entrypoint of the 'recheck' contract. */
export type RecordsParameter = string;

/**
 * Construct schema JSON representation used in update transaction for 'records' entrypoint of the 'recheck' contract.
 * @param {RecordsParameter} parameter The structured parameter to construct from.
 * @returns {RecordsParameterSchemaJson} The smart contract parameter JSON.
 */
function createRecordsParameterSchemaJson(
  parameter: RecordsParameter,
): RecordsParameterSchemaJson {
  return parameter;
}

/**
 * Construct Parameter type used in update transaction for 'records' entrypoint of the 'recheck' contract.
 * @param {RecordsParameter} parameter The structured parameter to construct from.
 * @returns {SDK.Parameter.Type} The smart contract parameter.
 */
export function createRecordsParameter(
  parameter: RecordsParameter,
): SDK.Parameter.Type {
  return SDK.Parameter.fromBase64SchemaType(
    base64RecordsParameterSchema,
    createRecordsParameterSchemaJson(parameter),
  );
}

/**
 * Construct WebWallet parameter type used in update transaction for 'records' entrypoint of the 'recheck' contract.
 * @param {RecordsParameter} parameter The structured parameter to construct from.
 * @returns The smart contract parameter support by the WebWallet.
 */
export function createRecordsParameterWebWallet(parameter: RecordsParameter) {
  return {
    parameters: createRecordsParameterSchemaJson(parameter),
    schema: {
      type: "TypeSchema" as const,
      value: SDK.toBuffer(base64RecordsParameterSchema, "base64"),
    },
  };
}

/**
 * Send an update-contract transaction to the 'records' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractTransactionMetadata} transactionMetadata - Metadata related to constructing a transaction for a smart contract.
 * @param {RecordsParameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.AccountSigner} signer - The signer of the update contract transaction.
 * @throws If the entrypoint is not successfully invoked.
 * @returns {SDK.TransactionHash.Type} Hash of the transaction.
 */
export function sendRecords(
  contractClient: RecheckContract,
  transactionMetadata: SDK.ContractTransactionMetadata,
  parameter: RecordsParameter,
  signer: SDK.AccountSigner,
): Promise<SDK.TransactionHash.Type> {
  return contractClient.genericContract.createAndSendUpdateTransaction(
    SDK.EntrypointName.fromStringUnchecked("records"),
    SDK.Parameter.toBuffer,
    transactionMetadata,
    createRecordsParameter(parameter),
    signer,
  );
}

/**
 * Dry-run an update-contract transaction to the 'records' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractAddress.Type | SDK.AccountAddress.Type} invokeMetadata - The address of the account or contract which is invoking this transaction.
 * @param {RecordsParameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.BlockHash.Type} [blockHash] - Optional block hash allowing for dry-running the transaction at the end of a specific block.
 * @throws {SDK.RpcError} If failing to communicate with the concordium node or if any of the checks fails.
 * @returns {SDK.InvokeContractResult} The result of invoking the smart contract instance.
 */
export function dryRunRecords(
  contractClient: RecheckContract,
  parameter: RecordsParameter,
  invokeMetadata: SDK.ContractInvokeMetadata = {},
  blockHash?: SDK.BlockHash.Type,
): Promise<SDK.InvokeContractResult> {
  return contractClient.genericContract.dryRun.invokeMethod(
    SDK.EntrypointName.fromStringUnchecked("records"),
    invokeMetadata,
    SDK.Parameter.toBuffer,
    createRecordsParameter(parameter),
    blockHash,
  );
}

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
    | { type: "Account"; content: SDK.AccountAddress.Type }
    | { type: "Contract"; content: SDK.ContractAddress.Type };
  timestamp: SDK.Timestamp.Type;
  sub_records_length: number | bigint;
};

/**
 * Get and parse the return value from dry-running update transaction for 'records' entrypoint of the 'recheck' contract.
 * Returns undefined if the result is not successful.
 * @param {SDK.InvokeContractResult} invokeResult The result from dry-running the transaction.
 * @returns {ReturnValueRecords | undefined} The structured return value or undefined if result was not a success.
 */
export function parseReturnValueRecords(
  invokeResult: SDK.InvokeContractResult,
): ReturnValueRecords | undefined {
  if (invokeResult.tag !== "success") {
    return undefined;
  }

  if (invokeResult.returnValue === undefined) {
    throw new Error(
      "Unexpected missing 'returnValue' in result of invocation. Client expected a V1 smart contract.",
    );
  }

  const schemaJson = <
    {
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
        | { Account: [SDK.AccountAddress.SchemaValue] }
        | { Contract: [SDK.ContractAddress.SchemaValue] };
      timestamp: SDK.Timestamp.SchemaValue;
      sub_records_length: bigint;
    }
  >SDK.ReturnValue.parseWithSchemaTypeBase64(invokeResult.returnValue, "FAAHAAAACQAAAHJlY29yZF9pZBMgAAAAAhAAAABwYXJlbnRfcmVjb3JkX2lkEyAAAAACBQAAAHRyYWlsEyAAAAACDwAAAHRyYWlsX3NpZ25hdHVyZRMgAAAAAgcAAABjcmVhdG9yFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADAkAAAB0aW1lc3RhbXANEgAAAHN1Yl9yZWNvcmRzX2xlbmd0aAU=");
  const field31 = schemaJson.record_id;
  const field34 = schemaJson.parent_record_id;
  const field37 = schemaJson.trail;
  const field40 = schemaJson.trail_signature;
  const field43 = schemaJson.creator;
  let match44:
    | { type: "Account"; content: SDK.AccountAddress.Type }
    | { type: "Contract"; content: SDK.ContractAddress.Type };
  if ("Account" in field43) {
    const variant45 = field43.Account;
    const accountAddress46 = SDK.AccountAddress.fromSchemaValue(variant45[0]);
    match44 = {
      type: "Account",
      content: accountAddress46,
    };
  } else if ("Contract" in field43) {
    const variant47 = field43.Contract;
    const contractAddress48 = SDK.ContractAddress.fromSchemaValue(variant47[0]);
    match44 = {
      type: "Contract",
      content: contractAddress48,
    };
  } else {
    throw new Error("Unexpected enum variant");
  }

  const field49 = schemaJson.timestamp;
  const timestamp50 = SDK.Timestamp.fromSchemaValue(field49);
  const field51 = schemaJson.sub_records_length;
  const named52 = {
    record_id: field31,
    parent_record_id: field34,
    trail: field37,
    trail_signature: field40,
    creator: match44,
    timestamp: timestamp50,
    sub_records_length: field51,
  };
  return named52;
}
/** Base64 encoding of the parameter schema type for update transactions to 'subRecord' entrypoint of the 'recheck' contract. */
const base64SubRecordParameterSchema =
  "FAACAAAADQAAAHN1Yl9yZWNvcmRfaWQWAgUAAABpbmRleAU=";
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
 * Construct schema JSON representation used in update transaction for 'subRecord' entrypoint of the 'recheck' contract.
 * @param {SubRecordParameter} parameter The structured parameter to construct from.
 * @returns {SubRecordParameterSchemaJson} The smart contract parameter JSON.
 */
function createSubRecordParameterSchemaJson(
  parameter: SubRecordParameter,
): SubRecordParameterSchemaJson {
  const field54 = parameter.sub_record_id;
  const field55 = parameter.index;
  const number56 = BigInt(field55);
  const named53 = {
    sub_record_id: field54,
    index: number56,
  };
  return named53;
}

/**
 * Construct Parameter type used in update transaction for 'subRecord' entrypoint of the 'recheck' contract.
 * @param {SubRecordParameter} parameter The structured parameter to construct from.
 * @returns {SDK.Parameter.Type} The smart contract parameter.
 */
export function createSubRecordParameter(
  parameter: SubRecordParameter,
): SDK.Parameter.Type {
  return SDK.Parameter.fromBase64SchemaType(
    base64SubRecordParameterSchema,
    createSubRecordParameterSchemaJson(parameter),
  );
}

/**
 * Construct WebWallet parameter type used in update transaction for 'subRecord' entrypoint of the 'recheck' contract.
 * @param {SubRecordParameter} parameter The structured parameter to construct from.
 * @returns The smart contract parameter support by the WebWallet.
 */
export function createSubRecordParameterWebWallet(
  parameter: SubRecordParameter,
) {
  return {
    parameters: createSubRecordParameterSchemaJson(parameter),
    schema: {
      type: "TypeSchema" as const,
      value: SDK.toBuffer(base64SubRecordParameterSchema, "base64"),
    },
  };
}

/**
 * Send an update-contract transaction to the 'subRecord' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractTransactionMetadata} transactionMetadata - Metadata related to constructing a transaction for a smart contract.
 * @param {SubRecordParameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.AccountSigner} signer - The signer of the update contract transaction.
 * @throws If the entrypoint is not successfully invoked.
 * @returns {SDK.TransactionHash.Type} Hash of the transaction.
 */
export function sendSubRecord(
  contractClient: RecheckContract,
  transactionMetadata: SDK.ContractTransactionMetadata,
  parameter: SubRecordParameter,
  signer: SDK.AccountSigner,
): Promise<SDK.TransactionHash.Type> {
  return contractClient.genericContract.createAndSendUpdateTransaction(
    SDK.EntrypointName.fromStringUnchecked("subRecord"),
    SDK.Parameter.toBuffer,
    transactionMetadata,
    createSubRecordParameter(parameter),
    signer,
  );
}

/**
 * Dry-run an update-contract transaction to the 'subRecord' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractAddress.Type | SDK.AccountAddress.Type} invokeMetadata - The address of the account or contract which is invoking this transaction.
 * @param {SubRecordParameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.BlockHash.Type} [blockHash] - Optional block hash allowing for dry-running the transaction at the end of a specific block.
 * @throws {SDK.RpcError} If failing to communicate with the concordium node or if any of the checks fails.
 * @returns {SDK.InvokeContractResult} The result of invoking the smart contract instance.
 */
export function dryRunSubRecord(
  contractClient: RecheckContract,
  parameter: SubRecordParameter,
  invokeMetadata: SDK.ContractInvokeMetadata = {},
  blockHash?: SDK.BlockHash.Type,
): Promise<SDK.InvokeContractResult> {
  return contractClient.genericContract.dryRun.invokeMethod(
    SDK.EntrypointName.fromStringUnchecked("subRecord"),
    invokeMetadata,
    SDK.Parameter.toBuffer,
    createSubRecordParameter(parameter),
    blockHash,
  );
}

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
    | { type: "Account"; content: SDK.AccountAddress.Type }
    | { type: "Contract"; content: SDK.ContractAddress.Type };
  timestamp: SDK.Timestamp.Type;
  sub_records_length: number | bigint;
};

/**
 * Get and parse the return value from dry-running update transaction for 'subRecord' entrypoint of the 'recheck' contract.
 * Returns undefined if the result is not successful.
 * @param {SDK.InvokeContractResult} invokeResult The result from dry-running the transaction.
 * @returns {ReturnValueSubRecord | undefined} The structured return value or undefined if result was not a success.
 */
export function parseReturnValueSubRecord(
  invokeResult: SDK.InvokeContractResult,
): ReturnValueSubRecord | undefined {
  if (invokeResult.tag !== "success") {
    return undefined;
  }

  if (invokeResult.returnValue === undefined) {
    throw new Error(
      "Unexpected missing 'returnValue' in result of invocation. Client expected a V1 smart contract.",
    );
  }

  const schemaJson = <
    {
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
        | { Account: [SDK.AccountAddress.SchemaValue] }
        | { Contract: [SDK.ContractAddress.SchemaValue] };
      timestamp: SDK.Timestamp.SchemaValue;
      sub_records_length: bigint;
    }
  >SDK.ReturnValue.parseWithSchemaTypeBase64(invokeResult.returnValue, "FAAHAAAACQAAAHJlY29yZF9pZBMgAAAAAhAAAABwYXJlbnRfcmVjb3JkX2lkEyAAAAACBQAAAHRyYWlsEyAAAAACDwAAAHRyYWlsX3NpZ25hdHVyZRMgAAAAAgcAAABjcmVhdG9yFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADAkAAAB0aW1lc3RhbXANEgAAAHN1Yl9yZWNvcmRzX2xlbmd0aAU=");
  const field57 = schemaJson.record_id;
  const field60 = schemaJson.parent_record_id;
  const field63 = schemaJson.trail;
  const field66 = schemaJson.trail_signature;
  const field69 = schemaJson.creator;
  let match70:
    | { type: "Account"; content: SDK.AccountAddress.Type }
    | { type: "Contract"; content: SDK.ContractAddress.Type };
  if ("Account" in field69) {
    const variant71 = field69.Account;
    const accountAddress72 = SDK.AccountAddress.fromSchemaValue(variant71[0]);
    match70 = {
      type: "Account",
      content: accountAddress72,
    };
  } else if ("Contract" in field69) {
    const variant73 = field69.Contract;
    const contractAddress74 = SDK.ContractAddress.fromSchemaValue(variant73[0]);
    match70 = {
      type: "Contract",
      content: contractAddress74,
    };
  } else {
    throw new Error("Unexpected enum variant");
  }

  const field75 = schemaJson.timestamp;
  const timestamp76 = SDK.Timestamp.fromSchemaValue(field75);
  const field77 = schemaJson.sub_records_length;
  const named78 = {
    record_id: field57,
    parent_record_id: field60,
    trail: field63,
    trail_signature: field66,
    creator: match70,
    timestamp: timestamp76,
    sub_records_length: field77,
  };
  return named78;
}
/** Base64 encoding of the parameter schema type for update transactions to 'verifyTrail' entrypoint of the 'recheck' contract. */
const base64VerifyTrailParameterSchema = "FgI=";
/** Parameter JSON type needed by the schema for update transaction for 'verifyTrail' entrypoint of the 'recheck' contract. */
type VerifyTrailParameterSchemaJson = string;
/** Parameter type for update transaction for 'verifyTrail' entrypoint of the 'recheck' contract. */
export type VerifyTrailParameter = string;

/**
 * Construct schema JSON representation used in update transaction for 'verifyTrail' entrypoint of the 'recheck' contract.
 * @param {VerifyTrailParameter} parameter The structured parameter to construct from.
 * @returns {VerifyTrailParameterSchemaJson} The smart contract parameter JSON.
 */
function createVerifyTrailParameterSchemaJson(
  parameter: VerifyTrailParameter,
): VerifyTrailParameterSchemaJson {
  return parameter;
}

/**
 * Construct Parameter type used in update transaction for 'verifyTrail' entrypoint of the 'recheck' contract.
 * @param {VerifyTrailParameter} parameter The structured parameter to construct from.
 * @returns {SDK.Parameter.Type} The smart contract parameter.
 */
export function createVerifyTrailParameter(
  parameter: VerifyTrailParameter,
): SDK.Parameter.Type {
  return SDK.Parameter.fromBase64SchemaType(
    base64VerifyTrailParameterSchema,
    createVerifyTrailParameterSchemaJson(parameter),
  );
}

/**
 * Construct WebWallet parameter type used in update transaction for 'verifyTrail' entrypoint of the 'recheck' contract.
 * @param {VerifyTrailParameter} parameter The structured parameter to construct from.
 * @returns The smart contract parameter support by the WebWallet.
 */
export function createVerifyTrailParameterWebWallet(
  parameter: VerifyTrailParameter,
) {
  return {
    parameters: createVerifyTrailParameterSchemaJson(parameter),
    schema: {
      type: "TypeSchema" as const,
      value: SDK.toBuffer(base64VerifyTrailParameterSchema, "base64"),
    },
  };
}

/**
 * Send an update-contract transaction to the 'verifyTrail' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractTransactionMetadata} transactionMetadata - Metadata related to constructing a transaction for a smart contract.
 * @param {VerifyTrailParameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.AccountSigner} signer - The signer of the update contract transaction.
 * @throws If the entrypoint is not successfully invoked.
 * @returns {SDK.TransactionHash.Type} Hash of the transaction.
 */
export function sendVerifyTrail(
  contractClient: RecheckContract,
  transactionMetadata: SDK.ContractTransactionMetadata,
  parameter: VerifyTrailParameter,
  signer: SDK.AccountSigner,
): Promise<SDK.TransactionHash.Type> {
  return contractClient.genericContract.createAndSendUpdateTransaction(
    SDK.EntrypointName.fromStringUnchecked("verifyTrail"),
    SDK.Parameter.toBuffer,
    transactionMetadata,
    createVerifyTrailParameter(parameter),
    signer,
  );
}

/**
 * Dry-run an update-contract transaction to the 'verifyTrail' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractAddress.Type | SDK.AccountAddress.Type} invokeMetadata - The address of the account or contract which is invoking this transaction.
 * @param {VerifyTrailParameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.BlockHash.Type} [blockHash] - Optional block hash allowing for dry-running the transaction at the end of a specific block.
 * @throws {SDK.RpcError} If failing to communicate with the concordium node or if any of the checks fails.
 * @returns {SDK.InvokeContractResult} The result of invoking the smart contract instance.
 */
export function dryRunVerifyTrail(
  contractClient: RecheckContract,
  parameter: VerifyTrailParameter,
  invokeMetadata: SDK.ContractInvokeMetadata = {},
  blockHash?: SDK.BlockHash.Type,
): Promise<SDK.InvokeContractResult> {
  return contractClient.genericContract.dryRun.invokeMethod(
    SDK.EntrypointName.fromStringUnchecked("verifyTrail"),
    invokeMetadata,
    SDK.Parameter.toBuffer,
    createVerifyTrailParameter(parameter),
    blockHash,
  );
}

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
    | { type: "Account"; content: SDK.AccountAddress.Type }
    | { type: "Contract"; content: SDK.ContractAddress.Type };
  timestamp: SDK.Timestamp.Type;
  sub_records_length: number | bigint;
};

/**
 * Get and parse the return value from dry-running update transaction for 'verifyTrail' entrypoint of the 'recheck' contract.
 * Returns undefined if the result is not successful.
 * @param {SDK.InvokeContractResult} invokeResult The result from dry-running the transaction.
 * @returns {ReturnValueVerifyTrail | undefined} The structured return value or undefined if result was not a success.
 */
export function parseReturnValueVerifyTrail(
  invokeResult: SDK.InvokeContractResult,
): ReturnValueVerifyTrail | undefined {
  if (invokeResult.tag !== "success") {
    return undefined;
  }

  if (invokeResult.returnValue === undefined) {
    throw new Error(
      "Unexpected missing 'returnValue' in result of invocation. Client expected a V1 smart contract.",
    );
  }

  const schemaJson = <
    {
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
        | { Account: [SDK.AccountAddress.SchemaValue] }
        | { Contract: [SDK.ContractAddress.SchemaValue] };
      timestamp: SDK.Timestamp.SchemaValue;
      sub_records_length: bigint;
    }
  >SDK.ReturnValue.parseWithSchemaTypeBase64(invokeResult.returnValue, "FAAHAAAACQAAAHJlY29yZF9pZBMgAAAAAhAAAABwYXJlbnRfcmVjb3JkX2lkEyAAAAACBQAAAHRyYWlsEyAAAAACDwAAAHRyYWlsX3NpZ25hdHVyZRMgAAAAAgcAAABjcmVhdG9yFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADAkAAAB0aW1lc3RhbXANEgAAAHN1Yl9yZWNvcmRzX2xlbmd0aAU=");
  const field79 = schemaJson.record_id;
  const field82 = schemaJson.parent_record_id;
  const field85 = schemaJson.trail;
  const field88 = schemaJson.trail_signature;
  const field91 = schemaJson.creator;
  let match92:
    | { type: "Account"; content: SDK.AccountAddress.Type }
    | { type: "Contract"; content: SDK.ContractAddress.Type };
  if ("Account" in field91) {
    const variant93 = field91.Account;
    const accountAddress94 = SDK.AccountAddress.fromSchemaValue(variant93[0]);
    match92 = {
      type: "Account",
      content: accountAddress94,
    };
  } else if ("Contract" in field91) {
    const variant95 = field91.Contract;
    const contractAddress96 = SDK.ContractAddress.fromSchemaValue(variant95[0]);
    match92 = {
      type: "Contract",
      content: contractAddress96,
    };
  } else {
    throw new Error("Unexpected enum variant");
  }

  const field97 = schemaJson.timestamp;
  const timestamp98 = SDK.Timestamp.fromSchemaValue(field97);
  const field99 = schemaJson.sub_records_length;
  const named100 = {
    record_id: field79,
    parent_record_id: field82,
    trail: field85,
    trail_signature: field88,
    creator: match92,
    timestamp: timestamp98,
    sub_records_length: field99,
  };
  return named100;
}
/** Base64 encoding of the parameter schema type for update transactions to 'verifyExtra0' entrypoint of the 'recheck' contract. */
const base64VerifyExtra0ParameterSchema = "FgI=";
/** Parameter JSON type needed by the schema for update transaction for 'verifyExtra0' entrypoint of the 'recheck' contract. */
type VerifyExtra0ParameterSchemaJson = string;
/** Parameter type for update transaction for 'verifyExtra0' entrypoint of the 'recheck' contract. */
export type VerifyExtra0Parameter = string;

/**
 * Construct schema JSON representation used in update transaction for 'verifyExtra0' entrypoint of the 'recheck' contract.
 * @param {VerifyExtra0Parameter} parameter The structured parameter to construct from.
 * @returns {VerifyExtra0ParameterSchemaJson} The smart contract parameter JSON.
 */
function createVerifyExtra0ParameterSchemaJson(
  parameter: VerifyExtra0Parameter,
): VerifyExtra0ParameterSchemaJson {
  return parameter;
}

/**
 * Construct Parameter type used in update transaction for 'verifyExtra0' entrypoint of the 'recheck' contract.
 * @param {VerifyExtra0Parameter} parameter The structured parameter to construct from.
 * @returns {SDK.Parameter.Type} The smart contract parameter.
 */
export function createVerifyExtra0Parameter(
  parameter: VerifyExtra0Parameter,
): SDK.Parameter.Type {
  return SDK.Parameter.fromBase64SchemaType(
    base64VerifyExtra0ParameterSchema,
    createVerifyExtra0ParameterSchemaJson(parameter),
  );
}

/**
 * Construct WebWallet parameter type used in update transaction for 'verifyExtra0' entrypoint of the 'recheck' contract.
 * @param {VerifyExtra0Parameter} parameter The structured parameter to construct from.
 * @returns The smart contract parameter support by the WebWallet.
 */
export function createVerifyExtra0ParameterWebWallet(
  parameter: VerifyExtra0Parameter,
) {
  return {
    parameters: createVerifyExtra0ParameterSchemaJson(parameter),
    schema: {
      type: "TypeSchema" as const,
      value: SDK.toBuffer(base64VerifyExtra0ParameterSchema, "base64"),
    },
  };
}

/**
 * Send an update-contract transaction to the 'verifyExtra0' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractTransactionMetadata} transactionMetadata - Metadata related to constructing a transaction for a smart contract.
 * @param {VerifyExtra0Parameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.AccountSigner} signer - The signer of the update contract transaction.
 * @throws If the entrypoint is not successfully invoked.
 * @returns {SDK.TransactionHash.Type} Hash of the transaction.
 */
export function sendVerifyExtra0(
  contractClient: RecheckContract,
  transactionMetadata: SDK.ContractTransactionMetadata,
  parameter: VerifyExtra0Parameter,
  signer: SDK.AccountSigner,
): Promise<SDK.TransactionHash.Type> {
  return contractClient.genericContract.createAndSendUpdateTransaction(
    SDK.EntrypointName.fromStringUnchecked("verifyExtra0"),
    SDK.Parameter.toBuffer,
    transactionMetadata,
    createVerifyExtra0Parameter(parameter),
    signer,
  );
}

/**
 * Dry-run an update-contract transaction to the 'verifyExtra0' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractAddress.Type | SDK.AccountAddress.Type} invokeMetadata - The address of the account or contract which is invoking this transaction.
 * @param {VerifyExtra0Parameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.BlockHash.Type} [blockHash] - Optional block hash allowing for dry-running the transaction at the end of a specific block.
 * @throws {SDK.RpcError} If failing to communicate with the concordium node or if any of the checks fails.
 * @returns {SDK.InvokeContractResult} The result of invoking the smart contract instance.
 */
export function dryRunVerifyExtra0(
  contractClient: RecheckContract,
  parameter: VerifyExtra0Parameter,
  invokeMetadata: SDK.ContractInvokeMetadata = {},
  blockHash?: SDK.BlockHash.Type,
): Promise<SDK.InvokeContractResult> {
  return contractClient.genericContract.dryRun.invokeMethod(
    SDK.EntrypointName.fromStringUnchecked("verifyExtra0"),
    invokeMetadata,
    SDK.Parameter.toBuffer,
    createVerifyExtra0Parameter(parameter),
    blockHash,
  );
}

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
    | { type: "Account"; content: SDK.AccountAddress.Type }
    | { type: "Contract"; content: SDK.ContractAddress.Type };
  timestamp: SDK.Timestamp.Type;
  sub_records_length: number | bigint;
};

/**
 * Get and parse the return value from dry-running update transaction for 'verifyExtra0' entrypoint of the 'recheck' contract.
 * Returns undefined if the result is not successful.
 * @param {SDK.InvokeContractResult} invokeResult The result from dry-running the transaction.
 * @returns {ReturnValueVerifyExtra0 | undefined} The structured return value or undefined if result was not a success.
 */
export function parseReturnValueVerifyExtra0(
  invokeResult: SDK.InvokeContractResult,
): ReturnValueVerifyExtra0 | undefined {
  if (invokeResult.tag !== "success") {
    return undefined;
  }

  if (invokeResult.returnValue === undefined) {
    throw new Error(
      "Unexpected missing 'returnValue' in result of invocation. Client expected a V1 smart contract.",
    );
  }

  const schemaJson = <
    {
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
        | { Account: [SDK.AccountAddress.SchemaValue] }
        | { Contract: [SDK.ContractAddress.SchemaValue] };
      timestamp: SDK.Timestamp.SchemaValue;
      sub_records_length: bigint;
    }
  >SDK.ReturnValue.parseWithSchemaTypeBase64(invokeResult.returnValue, "FAAHAAAACQAAAHJlY29yZF9pZBMgAAAAAhAAAABwYXJlbnRfcmVjb3JkX2lkEyAAAAACBQAAAHRyYWlsEyAAAAACDwAAAHRyYWlsX3NpZ25hdHVyZRMgAAAAAgcAAABjcmVhdG9yFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADAkAAAB0aW1lc3RhbXANEgAAAHN1Yl9yZWNvcmRzX2xlbmd0aAU=");
  const field101 = schemaJson.record_id;
  const field104 = schemaJson.parent_record_id;
  const field107 = schemaJson.trail;
  const field110 = schemaJson.trail_signature;
  const field113 = schemaJson.creator;
  let match114:
    | { type: "Account"; content: SDK.AccountAddress.Type }
    | { type: "Contract"; content: SDK.ContractAddress.Type };
  if ("Account" in field113) {
    const variant115 = field113.Account;
    const accountAddress116 = SDK.AccountAddress.fromSchemaValue(variant115[0]);
    match114 = {
      type: "Account",
      content: accountAddress116,
    };
  } else if ("Contract" in field113) {
    const variant117 = field113.Contract;
    const contractAddress118 = SDK.ContractAddress.fromSchemaValue(
      variant117[0],
    );
    match114 = {
      type: "Contract",
      content: contractAddress118,
    };
  } else {
    throw new Error("Unexpected enum variant");
  }

  const field119 = schemaJson.timestamp;
  const timestamp120 = SDK.Timestamp.fromSchemaValue(field119);
  const field121 = schemaJson.sub_records_length;
  const named122 = {
    record_id: field101,
    parent_record_id: field104,
    trail: field107,
    trail_signature: field110,
    creator: match114,
    timestamp: timestamp120,
    sub_records_length: field121,
  };
  return named122;
}
/** Base64 encoding of the parameter schema type for update transactions to 'verifyExtra1' entrypoint of the 'recheck' contract. */
const base64VerifyExtra1ParameterSchema = "FgI=";
/** Parameter JSON type needed by the schema for update transaction for 'verifyExtra1' entrypoint of the 'recheck' contract. */
type VerifyExtra1ParameterSchemaJson = string;
/** Parameter type for update transaction for 'verifyExtra1' entrypoint of the 'recheck' contract. */
export type VerifyExtra1Parameter = string;

/**
 * Construct schema JSON representation used in update transaction for 'verifyExtra1' entrypoint of the 'recheck' contract.
 * @param {VerifyExtra1Parameter} parameter The structured parameter to construct from.
 * @returns {VerifyExtra1ParameterSchemaJson} The smart contract parameter JSON.
 */
function createVerifyExtra1ParameterSchemaJson(
  parameter: VerifyExtra1Parameter,
): VerifyExtra1ParameterSchemaJson {
  return parameter;
}

/**
 * Construct Parameter type used in update transaction for 'verifyExtra1' entrypoint of the 'recheck' contract.
 * @param {VerifyExtra1Parameter} parameter The structured parameter to construct from.
 * @returns {SDK.Parameter.Type} The smart contract parameter.
 */
export function createVerifyExtra1Parameter(
  parameter: VerifyExtra1Parameter,
): SDK.Parameter.Type {
  return SDK.Parameter.fromBase64SchemaType(
    base64VerifyExtra1ParameterSchema,
    createVerifyExtra1ParameterSchemaJson(parameter),
  );
}

/**
 * Construct WebWallet parameter type used in update transaction for 'verifyExtra1' entrypoint of the 'recheck' contract.
 * @param {VerifyExtra1Parameter} parameter The structured parameter to construct from.
 * @returns The smart contract parameter support by the WebWallet.
 */
export function createVerifyExtra1ParameterWebWallet(
  parameter: VerifyExtra1Parameter,
) {
  return {
    parameters: createVerifyExtra1ParameterSchemaJson(parameter),
    schema: {
      type: "TypeSchema" as const,
      value: SDK.toBuffer(base64VerifyExtra1ParameterSchema, "base64"),
    },
  };
}

/**
 * Send an update-contract transaction to the 'verifyExtra1' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractTransactionMetadata} transactionMetadata - Metadata related to constructing a transaction for a smart contract.
 * @param {VerifyExtra1Parameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.AccountSigner} signer - The signer of the update contract transaction.
 * @throws If the entrypoint is not successfully invoked.
 * @returns {SDK.TransactionHash.Type} Hash of the transaction.
 */
export function sendVerifyExtra1(
  contractClient: RecheckContract,
  transactionMetadata: SDK.ContractTransactionMetadata,
  parameter: VerifyExtra1Parameter,
  signer: SDK.AccountSigner,
): Promise<SDK.TransactionHash.Type> {
  return contractClient.genericContract.createAndSendUpdateTransaction(
    SDK.EntrypointName.fromStringUnchecked("verifyExtra1"),
    SDK.Parameter.toBuffer,
    transactionMetadata,
    createVerifyExtra1Parameter(parameter),
    signer,
  );
}

/**
 * Dry-run an update-contract transaction to the 'verifyExtra1' entrypoint of the 'recheck' contract.
 * @param {RecheckContract} contractClient The client for a 'recheck' smart contract instance on chain.
 * @param {SDK.ContractAddress.Type | SDK.AccountAddress.Type} invokeMetadata - The address of the account or contract which is invoking this transaction.
 * @param {VerifyExtra1Parameter} parameter - Parameter to provide the smart contract entrypoint as part of the transaction.
 * @param {SDK.BlockHash.Type} [blockHash] - Optional block hash allowing for dry-running the transaction at the end of a specific block.
 * @throws {SDK.RpcError} If failing to communicate with the concordium node or if any of the checks fails.
 * @returns {SDK.InvokeContractResult} The result of invoking the smart contract instance.
 */
export function dryRunVerifyExtra1(
  contractClient: RecheckContract,
  parameter: VerifyExtra1Parameter,
  invokeMetadata: SDK.ContractInvokeMetadata = {},
  blockHash?: SDK.BlockHash.Type,
): Promise<SDK.InvokeContractResult> {
  return contractClient.genericContract.dryRun.invokeMethod(
    SDK.EntrypointName.fromStringUnchecked("verifyExtra1"),
    invokeMetadata,
    SDK.Parameter.toBuffer,
    createVerifyExtra1Parameter(parameter),
    blockHash,
  );
}

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
    | { type: "Account"; content: SDK.AccountAddress.Type }
    | { type: "Contract"; content: SDK.ContractAddress.Type };
  timestamp: SDK.Timestamp.Type;
  sub_records_length: number | bigint;
};

/**
 * Get and parse the return value from dry-running update transaction for 'verifyExtra1' entrypoint of the 'recheck' contract.
 * Returns undefined if the result is not successful.
 * @param {SDK.InvokeContractResult} invokeResult The result from dry-running the transaction.
 * @returns {ReturnValueVerifyExtra1 | undefined} The structured return value or undefined if result was not a success.
 */
export function parseReturnValueVerifyExtra1(
  invokeResult: SDK.InvokeContractResult,
): ReturnValueVerifyExtra1 | undefined {
  if (invokeResult.tag !== "success") {
    return undefined;
  }

  if (invokeResult.returnValue === undefined) {
    throw new Error(
      "Unexpected missing 'returnValue' in result of invocation. Client expected a V1 smart contract.",
    );
  }

  const schemaJson = <
    {
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
        | { Account: [SDK.AccountAddress.SchemaValue] }
        | { Contract: [SDK.ContractAddress.SchemaValue] };
      timestamp: SDK.Timestamp.SchemaValue;
      sub_records_length: bigint;
    }
  >SDK.ReturnValue.parseWithSchemaTypeBase64(invokeResult.returnValue, "FAAHAAAACQAAAHJlY29yZF9pZBMgAAAAAhAAAABwYXJlbnRfcmVjb3JkX2lkEyAAAAACBQAAAHRyYWlsEyAAAAACDwAAAHRyYWlsX3NpZ25hdHVyZRMgAAAAAgcAAABjcmVhdG9yFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADAkAAAB0aW1lc3RhbXANEgAAAHN1Yl9yZWNvcmRzX2xlbmd0aAU=");
  const field123 = schemaJson.record_id;
  const field126 = schemaJson.parent_record_id;
  const field129 = schemaJson.trail;
  const field132 = schemaJson.trail_signature;
  const field135 = schemaJson.creator;
  let match136:
    | { type: "Account"; content: SDK.AccountAddress.Type }
    | { type: "Contract"; content: SDK.ContractAddress.Type };
  if ("Account" in field135) {
    const variant137 = field135.Account;
    const accountAddress138 = SDK.AccountAddress.fromSchemaValue(variant137[0]);
    match136 = {
      type: "Account",
      content: accountAddress138,
    };
  } else if ("Contract" in field135) {
    const variant139 = field135.Contract;
    const contractAddress140 = SDK.ContractAddress.fromSchemaValue(
      variant139[0],
    );
    match136 = {
      type: "Contract",
      content: contractAddress140,
    };
  } else {
    throw new Error("Unexpected enum variant");
  }

  const field141 = schemaJson.timestamp;
  const timestamp142 = SDK.Timestamp.fromSchemaValue(field141);
  const field143 = schemaJson.sub_records_length;
  const named144 = {
    record_id: field123,
    parent_record_id: field126,
    trail: field129,
    trail_signature: field132,
    creator: match136,
    timestamp: timestamp142,
    sub_records_length: field143,
  };
  return named144;
}

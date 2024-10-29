import * as SDK from "@concordium/web-sdk";
/** The reference of the smart contract module supported by the provided client. */
export const moduleReference: SDK.ModuleReference.Type =
  /*#__PURE__*/ SDK.ModuleReference.fromHexString(
    "3e3c617c89c1ea454df444f6c5fcece12c2f100646b9957e304b72f93caf24d5",
  );

/** Client for an on-chain smart contract module with module reference '3e3c617c89c1ea454df444f6c5fcece12c2f100646b9957e304b72f93caf24d5', can be used for instantiating new smart contract instances. */
class ModuleModule {
  /** Having a private field prevents similar structured objects to be considered the same type (similar to nominal typing). */
  private __nominal = true;
  /** Generic module client used internally. */
  public readonly internalModuleClient: SDK.ModuleClient.Type;

  /** Constructor is only meant to be used internally in this module. Use functions such as `create` or `createUnchecked` for construction. */
  constructor(internalModuleClient: SDK.ModuleClient.Type) {
    this.internalModuleClient = internalModuleClient;
  }
}

/** Client for an on-chain smart contract module with module reference '3e3c617c89c1ea454df444f6c5fcece12c2f100646b9957e304b72f93caf24d5', can be used for instantiating new smart contract instances. */
export type Type = ModuleModule;

/**
 * Construct a ModuleModule client for interacting with a smart contract module on chain.
 * This function ensures the smart contract module is deployed on chain.
 * @param {SDK.ConcordiumGRPCClient} grpcClient - The concordium node client to use.
 * @throws If failing to communicate with the concordium node or if the module reference is not present on chain.
 * @returns {ModuleModule} A module client ensured to be deployed on chain.
 */
export async function create(
  grpcClient: SDK.ConcordiumGRPCClient,
): Promise<ModuleModule> {
  const moduleClient = await SDK.ModuleClient.create(
    grpcClient,
    moduleReference,
  );
  return new ModuleModule(moduleClient);
}

/**
 * Construct a ModuleModule client for interacting with a smart contract module on chain.
 * It is up to the caller to ensure the module is deployed on chain.
 * @param {SDK.ConcordiumGRPCClient} grpcClient - The concordium node client to use.
 * @returns {ModuleModule}
 */
export function createUnchecked(
  grpcClient: SDK.ConcordiumGRPCClient,
): ModuleModule {
  const moduleClient = SDK.ModuleClient.createUnchecked(
    grpcClient,
    moduleReference,
  );
  return new ModuleModule(moduleClient);
}

/**
 * Construct a ModuleModule client for interacting with a smart contract module on chain.
 * This function ensures the smart contract module is deployed on chain.
 * @param {ModuleModule} moduleClient - The client of the on-chain smart contract module with referecence '3e3c617c89c1ea454df444f6c5fcece12c2f100646b9957e304b72f93caf24d5'.
 * @throws If failing to communicate with the concordium node or if the module reference is not present on chain.
 * @returns {ModuleModule} A module client ensured to be deployed on chain.
 */
export function checkOnChain(moduleClient: ModuleModule): Promise<void> {
  return SDK.ModuleClient.checkOnChain(moduleClient.internalModuleClient);
}

/**
 * Get the module source of the deployed smart contract module.
 * @param {ModuleModule} moduleClient - The client of the on-chain smart contract module with referecence '3e3c617c89c1ea454df444f6c5fcece12c2f100646b9957e304b72f93caf24d5'.
 * @throws {SDK.RpcError} If failing to communicate with the concordium node or module not found.
 * @returns {SDK.VersionedModuleSource} Module source of the deployed smart contract module.
 */
export function getModuleSource(
  moduleClient: ModuleModule,
): Promise<SDK.VersionedModuleSource> {
  return SDK.ModuleClient.getModuleSource(moduleClient.internalModuleClient);
}
/** Parameter type transaction for instantiating a new 'recheck' smart contract instance. */
export type RecheckParameter = SDK.Parameter.Type;

/**
 * Send transaction for instantiating a new 'recheck' smart contract instance.
 * @param {ModuleModule} moduleClient - The client of the on-chain smart contract module with referecence '3e3c617c89c1ea454df444f6c5fcece12c2f100646b9957e304b72f93caf24d5'.
 * @param {SDK.ContractTransactionMetadata} transactionMetadata - Metadata related to constructing a transaction for a smart contract module.
 * @param {RecheckParameter} parameter - Parameter to provide as part of the transaction for the instantiation of a new smart contract contract.
 * @param {SDK.AccountSigner} signer - The signer of the update contract transaction.
 * @throws If failing to communicate with the concordium node.
 * @returns {SDK.TransactionHash.Type}
 */
export function instantiateRecheck(
  moduleClient: ModuleModule,
  transactionMetadata: SDK.ContractTransactionMetadata,
  parameter: RecheckParameter,
  signer: SDK.AccountSigner,
): Promise<SDK.TransactionHash.Type> {
  return SDK.ModuleClient.createAndSendInitTransaction(
    moduleClient.internalModuleClient,
    SDK.ContractName.fromStringUnchecked("recheck"),
    transactionMetadata,
    parameter,
    signer,
  );
}

import { createContext, useState, ReactNode, FC, useContext } from "react";

import { DEFAULT_NETWORK, NETWORK_OPTIONS } from "@/constants";

interface NetworkOption {
  title: string;
  network: string;
  img: string;
}

interface NetworkContextType {
  networkOptions: NetworkOption[];
  selectedNetwork: NetworkOption;
  setSelectedNetwork: (network: NetworkOption) => void;
}

const defaultValues = {
  networkOptions: NETWORK_OPTIONS,
  selectedNetwork: DEFAULT_NETWORK as NetworkOption,
  setSelectedNetwork: () => {},
};

export const NetworkContext = createContext<NetworkContextType>(defaultValues);

export const NetworkProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedNetwork, setSelectedNetwork] = useState<NetworkOption>(
    defaultValues.selectedNetwork,
  );

  return (
    <NetworkContext.Provider
      value={{
        networkOptions: NETWORK_OPTIONS,
        selectedNetwork,
        setSelectedNetwork,
      }}
    >
      {children}
    </NetworkContext.Provider>
  );
};

export const useNetworkState = (): NetworkContextType => {
  const context = useContext(NetworkContext);

  if (context === undefined) {
    throw new Error(
      "useNetworkState must be used within a GlobalStateProvider",
    );
  }
  return context;
};

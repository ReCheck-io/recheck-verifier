"use client";

import { ReactNode } from "react";
import { NetworkProvider } from "./network";

export const StateProviderWrapper = ({ children }: { children: ReactNode }) => {
  return <NetworkProvider>{children}</NetworkProvider>;
};

export * from "./network";

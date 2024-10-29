"use client";

import { FC } from "react";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui";
import { useNetworkState } from "@/contexts";

const Header: FC = () => {
  const { selectedNetwork, setSelectedNetwork, networkOptions } =
    useNetworkState();

  return (
    <header className="flex h-14 w-full items-center justify-between bg-primary p-4">
      <div className="flex items-center">
        <Image
          src="/recheck.png"
          alt="ReCheck"
          width={28}
          height={28}
          className="mr-3"
        />
        <span className="text-lg font-semibold text-white">
          Transaction Verifier
        </span>
      </div>

      <Select
        value={selectedNetwork.network}
        onValueChange={(value) => {
          const newNetwork = networkOptions.find((x) => x.network === value);
          if (newNetwork && newNetwork.network !== selectedNetwork.network) {
            setSelectedNetwork(newNetwork);
          }
        }}
      >
        <SelectTrigger className="hidden h-10 w-60 bg-white text-base sm:flex">
          <SelectValue placeholder="Select Network" />
        </SelectTrigger>
        <SelectContent>
          {networkOptions.map((option) => (
            <SelectItem
              key={option.network}
              value={option.network}
              className="text-base"
            >
              <div className="flex items-center">
                <Image
                  src={option.img}
                  alt={option.title}
                  className="mr-2 size-6"
                  height={24}
                  width={24}
                />
                {option.title}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </header>
  );
};

export default Header;

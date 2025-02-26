"use client";

import { FC } from "react";
import Image from "next/image";

const Header: FC = () => {
  return (
    <header className="flex h-14 w-full items-center justify-between bg-[#090F10] p-4">
      <div className="flex items-center">
        <Image
          src="/hubcontracts-logo.svg"
          alt="HubContracts"
          width={200}
          height={40}
          className="mr-3"
        />
      </div>
    </header>
  );
};

export default Header;

import { keccak256 } from "js-sha3";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import { format, addMinutes } from "date-fns";

import config from "@/chain/config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (val) => {
  const parsedDate = new Date(parseFloat(val) * 1000);

  const newDate = format(
    addMinutes(parsedDate, parsedDate.getTimezoneOffset()),
    "dd.MM.yyyy HH:mm:ss",
  );

  const [date, time] = newDate.split(" ");

  return { date, time };
};

export function isValidAddress(
  currentNetwork: string,
  address: string,
): boolean {
  switch (currentNetwork) {
    case "eth":
      return new RegExp(`^${config.eth.addressPrefix}[0-9a-fA-F]{40}$`).test(
        address,
      );
    case "poly":
      return new RegExp(`^${config.poly.addressPrefix}[0-9a-fA-F]{40}$`).test(
        address,
      );
    case "avax":
      return new RegExp(`^${config.avax.addressPrefix}[0-9a-fA-F]{40}$`).test(
        address,
      );
    case "ae":
      return (
        new RegExp(`^${config.ae.addressPrefix}[0-9a-zA-Z]{41,}$`).test(
          address,
        ) || new RegExp(`^re_[0-9a-zA-Z]{41,}$`).test(address)
      );
    case "near":
      return (
        new RegExp(`^[0-9a-f]{64}$`).test(address) || //normal address
        new RegExp(
          `^(?=.{2,64}$)(([a-z\\d]+[\\-_])*[a-z\\d]+\\.)*([a-z\\d]+[\\-_])*[a-z\\d]+$`,
        ).test(address)
      ); //custom address
    default:
      return false;
  }
}

export function getHash(value: string): string {
  return `0x${keccak256(value).toString("hex")}`;
}

export function isValidEmail(emailAddress: string): boolean {
  return /(.+)@(.+){2,}\.(.+){2,}/.test(emailAddress);
}

export function capitalizeFirstLetter(string: string = ""): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function decodeUriParams() {
  let newUri = "";
  try {
    newUri = decodeURI(window.location.href);
  } catch (e) {
    console.error(e);
    return null;
  }

  const uri = newUri.split("?");
  if (uri.length === 2) {
    const vars = uri[1].split("&");
    const getVars = {};
    let tmp = "";
    vars.forEach(function (v) {
      tmp = v.split("=");
      if (tmp.length === 2) getVars[tmp[0]] = tmp[1];
    });
    return getVars;
  }
}

export interface TxInfo {
  actionType: string;
  senderId: string;
  recordId: string;
  trailHash: string;
  trailHashSigHash: string;
  timestamp: number;
  date: string;
  time: string;
}

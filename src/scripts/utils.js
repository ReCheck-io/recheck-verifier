import keccak256 from "keccak256";
import config from "../chain/config";

export const formatDate = val => {
  const date = new Date(parseFloat(val) * 1000);

  const month =
    date.getMonth() + 1 < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const hour = date.getUTCHours();
  const minute = date.getUTCMinutes();
  const second = date.getUTCSeconds();

  const formattedDate = `${day}.${month}.${year}   ${hour}:${minute}:${second} UTC`;

  return formattedDate;
};

export function isNullAny(...args) {
  for (let i = 0; i < args.length; i++) {
    let current = args[i];

    if (
      current == null || // element == null covers element === undefined
      // eslint-disable-next-line no-prototype-builtins
      (current.hasOwnProperty("length") && current.length === 0) || // has length and it's zero
      (current.constructor === Object && Object.keys(current).length === 0) || // is an Object and has no keys
      current.toString().toLowerCase() === "null" ||
      current.toString().toLowerCase() === "undefined"
    ) {
      return true;
    }
  }
  return false;
}

export function isValidAddress(currentNetwork, address) {
  switch (currentNetwork) {
    case "eth":
      return new RegExp(`^${config.eth.addressPrefix}[0-9a-fA-F]{40}$`).test(
        address
      );
    case "ae":
      return (
        new RegExp(`^${config.ae.addressPrefix}[0-9a-zA-Z]{41,}$`).test(
          address
        ) || new RegExp(`^re_[0-9a-zA-Z]{41,}$`).test(address)
      );
    default:
      return false;
  }
}

export const getHash = string => {
  return `0x${keccak256(string).toString("hex")}`;
};

export function isValidEmail(emailAddress) {
  return /(.+)@(.+){2,}\.(.+){2,}/.test(emailAddress);
}

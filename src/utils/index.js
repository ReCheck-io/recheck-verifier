import keccak256 from "keccak256";
import { format, addMinutes } from "date-fns";

import config from "../chain/config";
import {EMPTY_STRING, NULL_HASH, variableTypes} from "./constants.js";

export const formatDate = val => {
  let parsedDate = new Date(parseFloat(val) * 1000);

  const newDate = format(
    addMinutes(parsedDate, parsedDate.getTimezoneOffset()),
    "dd.MM.yyyy HH:mm:ss"
  );

  const [date, time] = newDate.split(" ");

  return { date, time };
};

export function isNullAny(...args) {
  for (let current of args) {
    if (current && current.constructor === Object) {
      try {
        current = JSON.parse(JSON.stringify(current));
      } catch (ignored) {
      }
    }

    if (current == null || // element == null covers element === undefined
        (current.hasOwnProperty("length") && current.length === 0) || // has length and it's zero
        (current.constructor === Object && Object.keys(current).length === 0) || // is an Object and has no keys
        current.toString().toLowerCase() === variableTypes.NULL ||
        current.toString().toLowerCase() === variableTypes.UNDEFINED ||
        current.toString().trim() === EMPTY_STRING) {
      return true;
    }

    if (isNaN(current)) {
      try {
        if (+new Date(current) === 0) {
          // is not a number and can be parsed as null date 1970
          return true;
        }
      } catch (ignored) {
      }
    }

    try {
      const parsed = JSON.parse(current);
      if (parsed !== current && isNullAny(parsed)) {
        // recursive check for stringified object
        return true;
      }
    } catch (ignored) {
    }

    // check for hashes of null values
    if ([
      "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470", // ""/[].toString(),
      "0x7bc087f4ef9d0dc15fef823bff9c78cc5cca8be0a85234afcfd807f412f40877", // {}.toString()
      "0x518674ab2b227e5f11e9084f615d57663cde47bce1ba168b4c19c7ee22a73d70", // JSON.stringify([])
      "0xb48d38f93eaa084033fc5970bf96e559c33c4cdc07d889ab00b4d63f9590739d", // JSON.stringify({})
      "0xefbde2c3aee204a69b7696d4b10ff31137fe78e3946306284f806e2dfc68b805", // "null"
      "0x019726c6babc1de231f26fd6cbb2df2c912784a2e1ba55295496269a6d3ff651", // "undefined"
      "0x681afa780d17da29203322b473d3f210a7d621259a4e6ce9e403f5a266ff719a", // " "
      "0xfc6664300e2ce056cb146b05edef3501ff8bd027c49a8dde866901679a24fb7e", // new Date(0).toString()
      NULL_HASH,
    ].includes(current)) {
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
    case "poly":
      return new RegExp(`^${config.poly.addressPrefix}[0-9a-fA-F]{40}$`).test(
        address
      );
    case "avax":
      return new RegExp(`^${config.avax.addressPrefix}[0-9a-fA-F]{40}$`).test(
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

export function capitalizeFirstLetter(string = "") {
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

  let uri = newUri.split("?");
  if (uri.length === 2) {
    let vars = uri[1].split("&");
    let getVars = {};
    let tmp = "";
    vars.forEach(function(v) {
      tmp = v.split("=");
      if (tmp.length === 2) getVars[tmp[0]] = tmp[1];
    });
    return getVars;
  }
}

export function readFileAsync(e) {
  let files = e.target.files || e.dataTransfer.files;

  if (!files || !files.length) return;

  let file = files[0];

  document.getElementById("add-document-container").style.display = "none";

  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = () => {
      let payload = btoa(reader.result);
      resolve({ file, payload });
    };

    reader.onerror = reject;

    reader.readAsBinaryString(file);
  });
}

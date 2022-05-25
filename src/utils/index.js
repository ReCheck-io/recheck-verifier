import keccak256 from "keccak256";
import { format, addMinutes } from "date-fns";

import config from "../chain/config";

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

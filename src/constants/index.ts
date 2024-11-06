export const FILE_ACTIONS = [
  { title: "Uploaded", actionType: "upload" },
  { title: "Downloaded", actionType: "download" },
  { title: "Decrypted (Opened)", actionType: "verify" },
  { title: "Signed", actionType: "sign" },

  { title: "Shared", actionType: "share" },
  { title: "Email Shared", actionType: "email" },
];

export const NETWORK_OPTIONS = [
  // { title: "Avalanche", network: "avax", img: "/avax.svg" },
  // { title: "Ethereum", network: "eth", img: "/eth.svg" },
  // { title: "Polygon", network: "poly", img: "/poly.svg" },
  // { title: "Aeternity", network: "ae", img: "/ae.svg" },
  { title: "NEAR", network: "near", img: "/near.svg" },
  { title: "Concordium", network: "ccd", img: "/ccd.svg" },
];

export const DEFAULT_NETWORK = NETWORK_OPTIONS.find((x) => x.network === "ccd");

export const TIMELINE_DATA = [
  {
    title: "Select network",
    description:
      "From the switch button select in which network you want to verify.",
  },
  {
    title: "Select file",
    description:
      "Drag the file that you want to verify to the specified area or attach it by click.",
  },
  {
    title: "Select action type",
    description:
      "You can verify if the file has been registered, uploaded, shared, or opened.",
  },
  {
    title: "Enter Sender ID",
    description:
      "You must enter the sender ID or use the MetaMask button for yours.",
  },
  {
    title: "Enter Recipient ID or Email",
    description:
      "If applicable, you must enter recipient ID or use the MetaMask button for yours.",
  },
];

export const LABEL_MAP: Record<string, string> = {
  upload: "User ID",
  download: "User ID",
  verify: "User ID",
  sign: "User ID",
  share: "Sender ID",
  email: "Sender ID",
};

export const QUERY_MAP = {
  isB: "isBeta",
  net: "network",
  type: "actionType",
  dId: "dataId",
  sId: "senderId",
  rId: "recipientId",
} as const;

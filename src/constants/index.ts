export const FILE_ACTIONS = [
  { title: "Uploaded", desc: "Uploaded on chain", actionType: "upload" },
  { title: "Signed", desc: "Signed by someone", actionType: "sign" },
  { title: "Shared", desc: "Shared with someone", actionType: "share" },
  { title: "Email Shared", desc: "Shared by email", actionType: "email" },
  { title: "Decrypted", desc: "Decrypted by someone", actionType: "verify" },
  {
    title: "Downloaded",
    desc: "Downloaded by someone",
    actionType: "download",
  },
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

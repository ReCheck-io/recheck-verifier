import { checkTrailHash as checkTrailHashPOLY } from "./chain-poly";
import { checkTrailHash as checkTrailHashAVAX } from "./chain-avax";
import { checkTrailHash as checkTrailHashNEAR } from "./chain-near";
import { checkTrailHash as checkTrailHashCCD } from "./chain-ccd";
import { checkTrailHash as checkTrailHashETH } from "./chain-eth";
// import { checkTrailHash as checkTrailHashAE } from "./chain-ae";

export const chainCheckers = {
  eth: checkTrailHashETH,
  // ae: checkTrailHashAE,
  poly: checkTrailHashPOLY,
  avax: checkTrailHashAVAX,
  near: checkTrailHashNEAR,
  ccd: checkTrailHashCCD,
};

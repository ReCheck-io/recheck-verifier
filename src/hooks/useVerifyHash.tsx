import { getHash } from "@/utils";
import { chainCheckers } from "@/chain";
import { useNetworkState } from "@/contexts";

export interface FormValues {
  isBeta: boolean;
  dataId: string;
  senderId: string;
  recipientId: string;
  actionType: string;
}

const useVerifyHash = () => {
  const { selectedNetwork } = useNetworkState();

  const verifyHash = async (data: FormValues) => {
    const trailHash = generateTrailHash(data);
    const checker =
      chainCheckers[selectedNetwork.network as keyof typeof chainCheckers];

    if (trailHash && checker) {
      try {
        // Invoke the appropriate chain checker
        const result = await checker(trailHash, data.isBeta);

        return result;
      } catch (error) {
        console.error("Error during trail hash verification:", error);
        return {
          data: null,
          status: false,
          message: "Could not verify given trail hash.",
        };
      }
    } else {
      alert("Invalid data or unsupported network.");
      return { data: null, status: false, message: "Invalid data!" };
    }
  };

  const generateTrailHash = (data: FormValues): string | null => {
    let recipientId = data.recipientId;
    if (
      ["upload", "register", "sign", "download", "verify"].includes(
        data.actionType,
      )
    ) {
      recipientId = data.senderId;
    }

    if (!data.actionType || !data.dataId) return null;

    return getHash(
      `${data.dataId}${data.senderId}${data.actionType}${recipientId}`,
    );
  };

  return { verifyHash };
};

export { useVerifyHash };

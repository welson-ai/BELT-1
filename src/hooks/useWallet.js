import { useState, useCallback } from "react";
import {
  isConnected,
  getPublicKey,
  signTransaction as freighterSign,
} from "@stellar/freighter-api";

export const useWallet = () => {
  const [publicKey, setPublicKey] = useState(null);
  const [error, setError] = useState("");

  const connect = useCallback(async () => {
    try {
      // Step 1: Check if Freighter is available
      const connectionResult = await isConnected();
      console.log("isConnected:", connectionResult);

      // Handle both v1 (returns bool) and v2 (returns object)
      const isReady =
        typeof connectionResult === "boolean"
          ? connectionResult
          : connectionResult?.isConnected;

      if (!isReady) {
        setError("Freighter not detected. Please refresh the page.");
        return;
      }

      // Step 2: Get public key directly (no requestAccess needed)
      const keyResult = await getPublicKey();
      console.log("getPublicKey:", keyResult);

      // Handle both v1 (returns string) and v2 (returns object)
      const key =
        typeof keyResult === "string" ? keyResult : keyResult?.publicKey;

      if (!key || key === "") {
        setError("Freighter is locked or no account found. Please unlock it.");
        return;
      }

      setPublicKey(key);
      setError("");
    } catch (e) {
      console.error("Connect error:", e);
      setError("Error: " + (e?.message || JSON.stringify(e)));
    }
  }, []);

  const disconnect = useCallback(() => {
    setPublicKey(null);
  }, []);

  const signTransaction = useCallback(async (xdr, opts) => {
    const result = await freighterSign(xdr, opts);
    console.log("signTransaction result:", result);
    return typeof result === "string" ? result : result?.signedTxXdr;
  }, []);

  return { publicKey, connect, disconnect, signTransaction, error };
};

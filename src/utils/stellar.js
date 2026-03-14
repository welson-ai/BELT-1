import {
  Horizon,
  Networks,
  TransactionBuilder,
  Asset,
  Operation,
  BASE_FEE,
} from "@stellar/stellar-sdk";

const server = new Horizon.Server("https://horizon-testnet.stellar.org");

export const fetchBalance = async (publicKey) => {
  const account = await server.loadAccount(publicKey);
  const xlm = account.balances.find((b) => b.asset_type === "native");
  return xlm ? parseFloat(xlm.balance).toFixed(2) : "0.00";
};

export const sendXLM = async (senderPublicKey, destination, amount, signTransaction) => {
  const account = await server.loadAccount(senderPublicKey);

  const transaction = new TransactionBuilder(account, {
    fee: BASE_FEE,
    networkPassphrase: Networks.TESTNET,
  })
    .addOperation(
      Operation.payment({
        destination,
        asset: Asset.native(),
        amount: String(amount),
      })
    )
    .setTimeout(30)
    .build();

  const xdr = transaction.toXDR();

  // Pass network details for Freighter
  const signedXDR = await signTransaction(xdr, {
    network: "TESTNET",
    networkPassphrase: Networks.TESTNET,
  });

  if (!signedXDR) throw new Error("Transaction signing failed or was rejected.");

  const signedTx = TransactionBuilder.fromXDR(signedXDR, Networks.TESTNET);
  const result = await server.submitTransaction(signedTx);
  return result.hash;
};

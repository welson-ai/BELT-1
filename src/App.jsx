import WalletConnect from "./components/WalletConnect";
import Balance from "./components/Balance";
import SendPayment from "./components/SendPayment";
import { useWallet } from "./hooks/useWallet";
import "./App.css";

function App() {
  const { publicKey, connect, disconnect, signTransaction, error } = useWallet();

  return (
    <div className="app">
      <h1>🌟 Stellar Testnet Wallet</h1>
      <WalletConnect
        publicKey={publicKey}
        connect={connect}
        disconnect={disconnect}
        error={error}
      />
      {publicKey && (
        <>
          <Balance publicKey={publicKey} />
          <SendPayment publicKey={publicKey} signTransaction={signTransaction} />
        </>
      )}
    </div>
  );
}

export default App;

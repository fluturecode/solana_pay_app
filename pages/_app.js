import React, { useMemo } from "react";
import "../styles/globals.css";
import "../styles/App.css";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";
import { GlowWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } from "@solana/wallet-adapter-wallets";

const App = ({ Component, pageProps }) => {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(nework), [network]);

  const wallets = useMem( () => [
    new PhantomWalletAdapter(),
    new GlowWalletAdapter(),
    new SlopeWalletAdapter(),
    new SolflareWalletAdapter({ network}),
    new TorusWalletAdapter(),
  ], [network]);

  return (
    <Component {...pageProps} />
  );
};

export default App;

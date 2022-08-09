import { useMoralis, useChain } from "react-moralis";
import { useState, useEffect, useRef } from "react";
import { GetOwner } from "./funcs/GetOwner";

export default function Home() {
  const pageLoaded = useRef(false);
  const [hasMetamask, setHasMetamask] = useState(false);
  const [owner, setOwner] = useState();
  const { enableWeb3, isWeb3Enabled } = useMoralis();
  const { switchNetwork, chainId, chain, account } = useChain();

  const connectAndCheck = async () => {
    await enableWeb3();
    if (chainId !== "0x5") {
      //change to goerli
      console.log("Wrong network, sending request to Goerli");
      switchNetwork("0x5");
    }
  };
  // ? Im blind, so USE_EFFECT
  useEffect(() => {
    if (!pageLoaded) {
      pageLoaded.current = true;
      if (typeof window.ethereum !== "undefined") {
        setHasMetamask(true);
      } else {
        // Do something about it bruh
      }
    }
  });

  return (
    <>
      {isWeb3Enabled ? (
        "Connected!"
      ) : (
        <button onClick={connectAndCheck}>Connect wallet</button>
      )}

      <GetOwner />
    </>
  );
}
//
//
//

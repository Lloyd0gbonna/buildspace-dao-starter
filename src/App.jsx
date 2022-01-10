import { useEffect, useMemo, useState } from "react";

//import thirdweb
import { useWeb3 } from "@3rdweb/hooks";

const App = () => {
  //Use the connectWallet hook thirdweb gives us
  const { connectWallet, address, error, provider } = useWeb3();
  console.log("✋🏾 Address:", address)

  //This is the case wherein a user has't connected their wallet
  //to your web app
  if(!address) {
    return (
      <div className="landing">
        <h1>Welcome to YoungJusticeDAO</h1>
        <button onClick={() => connectWallet("injected")} className="btn-hero">
          Connect your wallet!
        </button>
      </div>
    )
  }

  //In the case the user HAS connected their wallet
  //which means they're connected their wallet to our side 
  return (
    <div className="landing">
      <h1>👀 wallet connected, now what!</h1>
    </div>);
};

export default App;

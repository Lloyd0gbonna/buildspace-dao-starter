import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Import ThirdWeb
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
//Include supported chain
// 4 = Rinkeby
const supportedChainIds = [4];

//Include what type of wallet you want to support
//Use Metamask; "injected wallet"
const connectors = {
  injected: {},
};

// Wrap App with ThirdWebProvider.
ReactDOM.render(
  <React.StrictMode>
    <ThirdwebWeb3Provider
      connectors={connectors}
      supportedChainIds={supportedChainIds} 
    >
        <App />
      </ThirdwebWeb3Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

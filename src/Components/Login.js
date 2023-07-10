import React, { useEffect, useState } from "react";
//import { config, authenticate, unauthenticate, signUp, currentUser } as fcl from "@onflow/fcl";
// import * as fcl from "@onflow/fcl";

const fcl = require("@onflow/fcl");

function Login() {
  const [user, setUser] = useState(null);
  const [latestBlock, setLatestBlock] = useState(null);
 
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const user = await fcl.currentUser().snapshot();
      setUser(user);
    };

    const fetchLatestBlock = async () => {
      const response = await fcl.config().send(await fcl.config().build([fcl.config().getLatestBlock()]));
      const block = await fcl.config().decode(response);
      setLatestBlock(block);
    };

    fetchCurrentUser();
    fetchLatestBlock();
  }, []);

  

    
  useEffect(() => {
    fcl.config()
      .put("accessNode.api", "https://access-testnet.onflow.org")
      .put("challenge.handshake", "https://flow-wallet-testnet.blocto.app/authn")
      .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn");
  }, []);

  const handleLogin = () => {
    fcl.authenticate();
  };

  

  const handleLogout = () => {
    fcl.unauthenticate();
    setUser(null);
  };

  const handleSignUp = () => {
    fcl.signUp();
  };


  return (
    <div>
      <h1>Welcome to the HealMed App!</h1>
      {user ? (
        <div>
          <p>Current Address: {user.addr}</p>
          
          
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <div>
          <p>Please connect your Flow wallet to continue.</p>
          <button onClick={handleLogin}>Log In</button>
          <button onClick={handleSignUp}>Sign Up</button>
          
        </div>
      )}
      {latestBlock && <p>Latest Block: {latestBlock.id}</p>}
    </div>
  );
}

export default Login;
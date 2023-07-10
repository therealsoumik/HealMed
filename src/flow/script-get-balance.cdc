import FungibleToken from 0x1556b64cfaa0112a
import FlowToken from 0x1556b64cfaa0112a

pub fun main(addr: Address): UFix64 {
  let vaultRef = getAccount(addr).getCapability<&FlowToken.Vault{FungibleToken.Balance}>(/public/flowTokenBalance)
      .borrow()
      ?? panic("Could not borrow balance reference to the Vault!");

  let balance = vaultRef.balance;

  return balance;
}
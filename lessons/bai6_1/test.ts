import { ethers } from "ethers";

async function main() {
  const provider = new ethers.JsonRpcProvider(
    "https://eth-sepolia.g.alchemy.com/v2/xS6ZY-YrucLETcZYGF48f"
  );

  const wallet = new ethers.Wallet("0x607fe010211b2552fb561715db79f7a4752b72373b420bdb18a926c44e955ac0", provider);

  const abi = ["function getBalance() public view returns(uint)"];
  const contractAddress = "0x4D00161785E493db7Acbbc9B5F35514a9fD476B3"; // Replace with your contract address
  const contract = new ethers.Contract(contractAddress, abi, wallet);

  const bal = await contract.getBalance();
  console.log("Balance in Wei: ", bal.toString());
  console.log("Balance in Ether: ", ethers.formatEther(bal));
}

main().catch(console.error);

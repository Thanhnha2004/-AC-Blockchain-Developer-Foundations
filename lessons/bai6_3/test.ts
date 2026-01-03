import { ethers } from "ethers";

async function main() {
  const provider = new ethers.JsonRpcProvider(
    "https://eth-sepolia.g.alchemy.com/v2/xS6ZY-YrucLETcZYGF48f"
  );

  const wallet = new ethers.Wallet(
    "0x607fe010211b2552fb561715db79f7a4752b72373b420bdb18a926c44e955ac0",
    provider
  );

  const abi = [
    "function mint(address to) external",
    "function getOwner(uint256 tokenId) external view returns(address)",
  ];
  const contractAddress = "0x221fD265d2cCF383d52821caD86CCe495Cf140fD"; // Replace with your contract address
  const contract = new ethers.Contract(contractAddress, abi, wallet);

  const recipient = wallet.address;
  const tx = await contract.mint(recipient);
  await tx.wait(); 

  const owner = await contract.getOwner(0);
  console.log("Owner of token 0: ", owner);
}

main().catch(console.error);

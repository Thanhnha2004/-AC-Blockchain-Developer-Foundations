import { ethers } from "ethers";

async function main() {
  const provider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/xS6ZY-YrucLETcZYGF48f");

  const abi = [
    "function getCount() public view returns (uint)",
    "function increment() public"
  ];
  const contractAddress = "0x3f0801aE9Da1dFD017D1A6210e459927E25B5134"; // Replace with your contract address

  const contract = new ethers.Contract(contractAddress, abi, provider);

  const tx = await contract.increment();
  await tx.wait();

  const count = await contract.getCount();
  console.log("Current count is:", count.toString());
}

main().catch(console.error);

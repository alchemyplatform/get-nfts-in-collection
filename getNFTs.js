// Import necessary modules
const { Alchemy, Network } = require("alchemy-sdk");
require('dotenv').config();

// Configure Alchemy SDK with API key and network
const config = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);


/**
 * Main function to fetch and print NFTs for a specific owner.
 */
const main = async () => {
  // Contract address -- replace with desired address
  const address = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";

  // Flag to omit metadata -- can change to true if desired
  const omitMetadata = false;

  // Get all NFTs with Alchemy endpoint
  const all_nfts = await alchemy.nft.getNftsForContract(address, {
    omitMetadata: omitMetadata,
  });

  // Print NFT details
  // Refer to https://docs.alchemy.com/reference/getnftsforcollection to print more fields
    all_nfts.nfts.forEach((nfts) => {
    console.log("Token ID:", nfts.tokenId);
    console.log("Token Type:", nfts.contract.tokenType);
    console.log("Image Url:", nfts.media[0].gateway);
    console.log("Token URI", nfts.tokenUri.gateway);
    console.log("----------------------------------");
  });
};

main(); // Run the main function
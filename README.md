## Overview
This repository contains a JavaScript script that utilizes Alchemy's SDK to fetch all NFTs included in a specified collection. For each NFT, the fields below are printed, however, to see all fields refer to the [Alchemy API reference](https://docs.alchemy.com/reference/getnftsforcollection):

- Token ID
- Token Type
- Image URL
- Token URI

In this example, the script fetches all 100 NFTs in the Bored Ape Yach Club collection, however you can change the collection contract address on line 18.

## Steps to Run

Before running the script, ensure that you have [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), and [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) installed on your system. 

Follow these steps to run the script:

1. Clone this repository to your local machine:
`git clone https://github.com/alchemyplatform/get-nfts-in-collection.git`


2. Navigate to the project folder: `cd get-nfts-in-collection`


3. Install the Alchemy SDK and the `dotenv` package running either of the following commands:
   - `yarn add alchemy-sdk dotenv`
   - `npm i alchemy-sdk dotenv`
  
4. Open the `sample.env` file and update the value for the API Key to your own value and rename file to `.env`. If you don't have an Alchemy API Key yet you can [create one for free here](https://alchemy.com/?a=starter-code). Simply make an account and find the "Access Keys" section in the dashboard to generate your own key!

5. Open `getNFTs.js` and update the value of the collection contract address on line 18 to reflect the contract that you will be querying. 

6. Run the script in the terminal: `node getNFTs.js`


By following these steps, the script will execute and fetch metadata of the NFTs included in the specified collection address, printing out the desired fields to the console.

## Other Notes 
On line 21, `omitMetadata` is set to false. This allows us to access metadata such as image URL and token URI. If `omitMetadata` is set to true, then only the token ID field would be accessible. This can be shown in the [Alchemy API reference](https://docs.alchemy.com/reference/getnftsforcollection).

## Frequently Used Options and Best Practices
When working with the Alchemy SDK, there are several options and best practices that you can consider:

### Pagination
By default, the request for NFTs has a page size of 100. If you have a large number of NFTs and want to retrieve all of them, you can implement pagination. Alchemy's API supports pagination using the `page` and `size` parameters. You can adjust the `size` parameter to specify the number of NFTs to retrieve per page and use the `page` parameter to iterate through the pages of results.

### Filtering and Excluding NFTs
The Alchemy API allows you to apply filters to your NFT requests. For example, you can exclude certain NFTs based on specific criteria. The exact filtering options depend on the available fields and operators supported by Alchemy's API. Please refer to the linked API reference doc above for more information on how to apply filters to your requests.

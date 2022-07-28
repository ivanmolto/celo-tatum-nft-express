# USING TATUM'S NFT EXPRESS ON CELO BLOCKCHAIN

An eco-friendly NFT Express collection.
Mint your new brand animal and start your safari! 
No crypto needed!

Video demo [here](https://ivanmolto.mypinata.cloud/ipfs/QmZKCtLNA3s6bSSmniAzh58sfnykF9ALN8KfBUWbDTBs5w) and [in the repo](https://github.com/ivanmolto/celo-tatum-nft-express/blob/main/safari-mixer.mp4)


Presentation in PDF format [here](https://ivanmolto.mypinata.cloud/ipfs/QmRS99kSYLfb3tBfwTpxMvRTGAwCEsv5koCTGkabABAcPs) and [in the repo](https://github.com/ivanmolto/celo-tatum-nft-express/blob/main/Safari-Mixer-Celo-Tatum.pdf)


This is a submission for a Gitcoin Bounty: Using NFT Express, Create A Mobile App That Allows Users To Mint NFTs On Celo, sponsored by Celo and Tatum.


## Introduction

This project builds a collection of NFTs using [Tatum](https://tatum.io)'s NFT Express on the Celo blockchain, [Celo Composer](https://github.com/celo-org/celo-composer), [React Native](https://reactnative.dev), TypeScript and decentralized storage from Pinata Cloud.


## Getting Started

To build your mobile dApp, you'll need to install the dependencies, create a new project, and run the following commands:

## Prerequisites

- Node (v12), [NVM](https://github.com/nvm-sh/nvm)
- Yarn
- Git

## Installation

1. Clone the repo

`git clone https://github.com/ivanmolto/celo-tatum-nft-express.git`


2. Set the correct node version (several Celo packages require using node version 12.x):

```
cd celo-tatum-nft-express
nvm use # uses node v12 as specified in .nvmrc
```


3. Build a React Native app using Expo:

```
cd packages/react-native-app
yarn install
npm start
```

## Tatum's NFT Express

NFT Express allows you to mint NFTs without coding, deploying smart contracts, sending private keys, or holding crypto to pay for gas fees.

Use NFT Express to mint NFTs easily with a single API call.

The Valora app is only used to get a Celo address to send the NFT. 


## Security Notice

The project is not audited and should not be used in a production environment.

About your Tatum API Key remember never store sensitive secrets in your environment variables. The reason behind this is that the code is run on the client side and thus including your environment variable in the code itself.
You can read more about this topic [here](https://reactnative.dev/docs/security#storing-sensitive-info).


## License

Distributed under the MIT License.


## Contact

- Email - ivanmolto@gmail.com
- Discord - ivanmolto#3768


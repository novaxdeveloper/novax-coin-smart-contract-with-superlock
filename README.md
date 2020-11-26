# Novax Coin Smart Contract With Superlock

[![N|Solid](https://novaxcoin.com/logo-icon.png)](#)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger) 

Smart Contect ERC20 ethereum using openzeppelin-contracts. 

## Features

  - Stake system.
  - Monthly reawrd.
  - Owner Can change the Monthly reawrd rate.


## Before run Project 

```sh
$ npm i truffle -g
```

## Tech To Run Project

Install the dependencies and devDependencies and start the server.

```sh
$ cd kugulacoin-smart-contract-with-stake
$ npm install 
```

Now Change .env 

```envfile
INFURA_API_KEY = ''
MNEMONIC = ''
```

Fot get INFURA_API_KEY you can open new account in https://infura.io/
Now Set MNEMONIC it's mean your private key or MNEMONIC for your wallet you want to publish your contact from it.


Now edit ./truffle-config.js

> Change your networks as want to deploy your contract
> 1. Localhost useing ganache https://www.trufflesuite.com/ganache
> 2. Ropsten.etherscan.io as test network https://ropsten.infura.io/v3/
> 3. etherscan.io as main network  https://main.infura.io/v3/

## Deploy your smart contact now

```sh
$ truffle compile --reset
$ truffle deploy
```
> Not:\
> Use Visual Studio Code (VS CODE) as code editor for me.\
> You must learn solidity language to customize your smart contract as you want.\
> You must learn nodejs to test your smart contract as you want in localhost.\
> You can use https://remix.ethereum.org/ in your browser to edit or deploy smart contract online.

We recommend watching these videos to learn solidity language, blockching, ethereum, truffle and smart contract

- https://www.youtube.com/watch?v=CgXQC4dbGUE&t=7570s&ab_channel=DappUniversity
- https://www.youtube.com/watch?v=nRySHw123x8&t=841s&ab_channel=Blockgeeks
- https://www.youtube.com/watch?v=_rumMSlrmiI&ab_channel=DappUniversity
- https://www.youtube.com/watch?v=XcFl8fj-_ZU&t=263s&ab_channel=FilipMartinsson
- https://www.youtube.com/watch?v=WyDrj8jrEjQ&t=732s&ab_channel=DappUniversity




# Table of contents
- [Table of contents](#table-of-contents)
  - [How to use moralis](#how-to-use-moralis)
  - [Extra dependencies](#extra-dependencies)
  - [Goerli deplyments](#goerli-deplyments)
  - [Contract interactions](#contract-interactions)
    - [no params](#no-params)
    - [whit params](#whit-params)
    - [msg.value](#msgvalue)


## How to use moralis
- https://docs.moralis.io/moralis-dapp/web3/web3#executefunction

## Extra dependencies
- npm i @walletconnect/web3-provider magic-sdk moralis

## Goerli deplyments
Whitelist
adx: 0xf70547378ac7d81e4009ffb5c18601f29ceada06
args: 17

NFT contract
adx: 0x88B72De7F2AdeBC6CfEb5aD5aFf4b4Fc5155b213
args: 0xf70547378ac7d81e4009ffb5c18601f29ceada06 77

## Contract interactions
### no params
```jsx
const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract({
      abi: abi,
      contractAddress: "0xAcb69A95a280276795F2191A469da2881b70813d",
      functionName: "readMessage",
    });
```

### whit params
```jsx
const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract({
      abi: abi,
      contractAddress: "0xAcb69A95a280276795F2191A469da2881b70813d",
      functionName: "store",
      params: {
        _favoriteNumber: 42,
      },
    });
```

### msg.value
```jsx
const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract({
      abi: abi,
      contractAddress: "",
      functionName: "mint",
      msgValue: Moralis.Units.ETH(0.1),
    });
```

<hr>
<br>
<br>
<br>
<br>
<br>

```
ISSUE NOW

https://github.com/ethereum/go-ethereum/issues/24453
```

<br>
<br>
<br>
<br>
<br>
<hr>

## Build Private Network(`Local Network`)

#### 1. Go to project directory `/`

#### 2. Create 3 accounts and password files

 - miner account
```sh
geth account new --datadir data
--> Public address of the key:   e01b1426a5606213935a62004860081919c441be
```
 - developer account
```sh
geth account new --datadir data
--> Public address of the key:   2272594c0f3efeaf3aa20f32b9a4ec241c066350
```
 - client account
```
geth account new --datadir data
--> Public address of the key:   ecc88941f44298b0e3f00a5ce2e599ada8c7ae28
```

The directory `data/keystore` will be created.

 - check accounts

```sh
geth account list --datadir data
```
#### 4. Create password files `miner`, `dev`,`client`, and input the password text entered on the terminal when we created the account.

#### 5. Create genesis json

 - `genesis.json`

```js
{
  "config": {
    "chainId": 15,
    "homesteadBlock": 0,
    "eip150Block": 0,
    "eip155Block": 0,
    "eip158Block": 0,
    "byzantiumBlock": 0,
    "constantinopleBlock": 0,
    "petersburgBlock": 0,
    "ethash": {}
  },
  "difficulty": "10",
  "gasLimit": "8000000",
  "alloc": {
    "e01b1426a5606213935a62004860081919c441be": { "balance": "0" },
    "2272594c0f3efeaf3aa20f32b9a4ec241c066350": { "balance": "5000000000000000000" },
    "ecc88941f44298b0e3f00a5ce2e599ada8c7ae28": { "balance": "5000000000000000000" }
  }
}
```
#### 6. Create genesis block

```sh
geth init --datadir data genesis.json
```

The `data/geth` directory will be created.

#### 7. Running as `local network` via `miner` (need 2 terminals)

<!-- 
```sh
geth --networkid 15 --nodiscover --maxpeers 0 --datadir data --http --allow-insecure-unlock --mine console
``` -->

<br><br><br>

### -  `terminal A`


```sh
geth --datadir data --http --http.api personal,eth,net,web3 --dev --allow-insecure-unlock --unlock e01b1426a5606213935a62004860081919c441be --keystore data/keystore --password ./miner.txt --rpc.allow-unprotected-txs console
```
As we can see the output text in terminal, we will get network(chainid=15) and http server(endpoint=127.0.0.1:8545)

geth --datadir data --http --http.api personal,eth,net,web3 --dev --unlock cf10e37992f9e35fa98b918b67c007cee150761d --keystore data/keystore --password ./miner.txt --verbosity 5 console

 - (1) check accounts

```sh
eth.accounts
```

 - (2) check balances

```sh
eth.getBalance(eth.accounts[0]) //0
eth.getBalance(eth.accounts[1]) //500000
eth.getBalance(eth.accounts[2]) //500000
```

<br><br><br>

### - `terminal B`

 - (3) attach to `local network`

```sh
geth attach http://localhost:8545
```

 - (4) unlock account1

```
personal.unlockAccount(eth.accounts[1])
```

 - (5) send transaction

```sh
eth.sendTransaction({from: eth.accounts[1],to: eth.accounts[2], value: "2000000000000000000"})
```

 - (6) check balances

```sh
eth.getBalance(eth.accounts[1]) //5000000000000000000
eth.getBalance(eth.accounts[2]) //5000000000000000000
```
We need to mine transactions.

<br><br><br>

### -  `terminal A`

 - (7) The network still has one block(genesis block)

```sh
eth.blockNumber //0
```
 - (8) We can see the genesis block using below command.

```sh
eth.getBlock(0)
```
 - (9)  Start mining, afterwhile stop mining.

```sh
miner.start(1)
```

```sh
miner.stop()
```

 - (10) Check block number. If it's still `0`, mining again.

```sh
eth.blockNumber
```

 - (11) We can see transactions list at `second block`

```sh
eth.getBlock(1)
```

 - (12) Let's see balances again

```sh
eth.getBalance(eth.accounts[0]) //6000000000000021000
eth.getBalance(eth.accounts[1]) //2999999999999979000
eth.getBalance(eth.accounts[2]) //7000000000000000000
```
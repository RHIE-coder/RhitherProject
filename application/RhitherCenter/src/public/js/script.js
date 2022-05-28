// https://eth.wiki/json-rpc/API
// https://docs.metamask.io/guide/rpc-api.html

const receiver = "0x1Bc8D4d2A7069965CA0436667903aF4cf0f3A144";
const CONTRACT_DATA = "0x608060405234801561001057600080fd5b506101bd806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063371303c01461004657806367e0badb14610050578063b3bcfa821461006e575b600080fd5b61004e610078565b005b610058610091565b60405161006591906100cc565b60405180910390f35b61007661009a565b005b60008081548092919061008a90610116565b9190505550565b60008054905090565b6000808154809291906100ac9061015e565b9190505550565b6000819050919050565b6100c6816100b3565b82525050565b60006020820190506100e160008301846100bd565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610121826100b3565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610153576101526100e7565b5b600182019050919050565b6000610169826100b3565b91506000820361017c5761017b6100e7565b5b60018203905091905056fea2646970667358221220ea5803bb1f17f9240ec09bed75a027c9bb07e159fcabe2e02ccc78c4d52911ea64736f6c634300080d0033"

(async () => {
    const ethereum = window.ethereum;

    /*  
        ethereum.enable() and ethereum.send() are deprecated

            [CAUSTION]: cannot disconnect

        The connect/disconnect functionality is entirely in the user's hands due to security and privacy concerns.

        You can only pretend a disconnect by resetting a provider, chainId and selectedAccount 
        to null and clearing the cache of the provided you previously used.

        https://ethereum.stackexchange.com/questions/83914/how-to-disconnect-metamask-wallet-using-web3modal
    */
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    const default_account = accounts[0];
    console.log(accounts);

    console.log(await ethereum.request({ method: 'eth_requestAccounts' }));

    /*
        MainNet: chain-id 1, network-id 1
        Rinkeby: chain-id 4, network-id 4
        Ropsten: chain-id 3, network-id 3  
    */
    console.log(await ethereum.request({ method: "eth_chainId" }));

    console.log(await ethereum.request({ method: "eth_requestAccounts" }));

    const hex_balance = await ethereum.request({ method: "eth_getBalance", params: [default_account, 'latest'] });
    console.log(hex_balance);
    const dec_balance = parseInt(hex_balance, 16) / Math.pow(10, 18);
    console.log(dec_balance);
    
    /*         
        - `eth_sendTransaction`
    */
    const sendResult = await ethereum.request({ method: "eth_sendTransaction", params: [{
                                                                                            from:default_account, 
                                                                                            data: CONTRACT_DATA
                                                                                        }]
                                                })
    console.log(sendResult);
})()

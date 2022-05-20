// https://eth.wiki/json-rpc/API
// https://docs.metamask.io/guide/rpc-api.html

const receiver = "0x1Bc8D4d2A7069965CA0436667903aF4cf0f3A144";

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
        - `eth_sign` --> `eth_
        - `eth_call`
    */
})()

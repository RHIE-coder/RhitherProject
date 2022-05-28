import * as path from "path";
import {ContractHandler} from "../../src/lib/web3-contract";
import {JsonRpcRequester} from "../../src/lib/json-rpc-request";
import config from "../../src/config/configurations"

const rpc = new JsonRpcRequester(config.blockchain_rpc_server);

async function main(){
    const test_account0 = (await rpc.request({method:"eth_accounts",id:1})).result[0];

    const options = {
        contractAddress:"0xc84f910d72ae8ef033b8da700dca20bd72a95bb2",
        accountAddress:test_account0,
        abiPath:path.join(__dirname, "../../../../blockchain/truffle/build/contracts"),
        abiName:"Simple"
    }
    const handler = new ContractHandler(options);
    const contract = await handler.getContract();
    const inc_result = await contract.methods.inc().send();
    console.log(inc_result);
    const get_result = await contract.methods.getNum().call();
    console.log(get_result);
}

main();
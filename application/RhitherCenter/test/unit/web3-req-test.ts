import * as path from "path";
import {ContractHandler} from "../../src/lib/web3-contract";
import {JsonRpcRequester} from "../../src/lib/json-rpc-request";
import config from "../../src/config/configurations"

const rpc = new JsonRpcRequester(config.blockchain_rpc_server);

async function main(){
    const test_account0 = (await rpc.request({method:"eth_accounts",id:1})).result[0];

    const options = {
        contractAddress:"",
        accountAddress:test_account0,
        abiPath:path.join(__dirname, "../../../../blockchain/truffle/Simple/build/contracts"),
        abiName:"SimpleApp"
    }
    const handler = new ContractHandler(options);
    const contract = await handler.getContract();
    const inc_result = await contract.methods.inc().send();
    const get_result = await contract.methods.getNum().call();
    console.log(inc_result);
    console.log(get_result);
}

main();
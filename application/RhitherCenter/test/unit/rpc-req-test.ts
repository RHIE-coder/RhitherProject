import {JsonRpcRequester} from "../../src/lib/json-rpc-request";
import config from "../../src/config/configurations"

const rpc = new JsonRpcRequester(config.blockchain_rpc_server);

const TEST_PRIVATE_KEY_ACCOUNT0:string = "0x3ec922bcde3a12eb4f78f8594580e8e47eeff2c05202914fc940fccd57bc2507";

async function main(){
    console.log(await rpc.request({method:"eth_chainId",id:1}))
    const test_account0 = (await rpc.request({method:"eth_accounts",id:2})).result[0];
    console.log(test_account0)
    // console.log(await rpc.request({method:"eth_sign", }))
}

main();
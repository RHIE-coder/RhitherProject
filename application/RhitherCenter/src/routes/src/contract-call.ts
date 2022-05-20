import { Router } from "express";
import { mainFunc} from "../../services/api/ether-rpc-requester"
const router = Router();


router.route("/hello").get(mainFunc);

export = {
    options:{root_path:"/"},
    router
}
import { Router } from "express";
import { mainFunc} from "../../services/api/nft"
const router = Router();


router.route("/hello").get(mainFunc);

export = {
    options:{root_path:"/"},
    router
}
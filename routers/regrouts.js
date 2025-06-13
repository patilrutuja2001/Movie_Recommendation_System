let routes=require("express");
let regctr=require("../controllers/regCtrl");

let router=routes.Router();

router.get("/homepage",regCtrl.regCtrl);
 module.exports=router;

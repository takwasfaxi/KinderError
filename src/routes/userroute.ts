import { Router } from "express";
const router=Router()
import  {signup,createUser,
    completeRegistration}  from "../Controllers/UserControllers"

router.post("/adduser",signup);
router.post("/createprofparent",createUser);
router.put("/completeRegistration/:email",completeRegistration);
export default router;
import { Router } from "express";
const router=Router()
import  {signup}  from "../Controllers/UserControllers"

router.post("/adduser",signup);
export default router;
import { Router } from "express";

const router = Router();

router.post('/', () =>{});
router.get("/:codigo", ()=>{}); //findbyid
router.put("/:codigo", ()=>{});
router.delete("/:codigo", ()=>{});
router.get("/", ()=>{}); //findall

export default router;
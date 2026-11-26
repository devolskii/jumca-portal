import { Router } from "express";
import { getCourses, getElectives, saveElective } from "@/controllers/course.controller.js";
import { authenticate, optionalAuthenticate } from "@/middleware/authenticate.js";

const router = Router();

router.get("/", optionalAuthenticate, getCourses);
router.get("/electives", optionalAuthenticate, getElectives);
router.post("/electives", authenticate, saveElective);

export default router;

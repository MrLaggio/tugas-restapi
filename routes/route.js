import express from "express";
import { getMahasiswa } from "../controllers/mahasiswaController";

const router = express.Router();

router.get("/", getMahasiswa);
router.get("/find", getMahasiswaByNim);

export default router;
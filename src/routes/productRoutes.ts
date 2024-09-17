import { Router } from "express";
import {
  createProducts,
  editProduct,
  getProducts,
} from "../controllers/productController";

const router = Router();

router.get("/", getProducts);
router.post("/", createProducts);
router.put("/", editProduct);
// router.delete("/", deleteProducts);

export default router;

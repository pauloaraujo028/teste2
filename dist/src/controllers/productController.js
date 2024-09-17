"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editProduct = exports.createProducts = exports.getProducts = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const search = (_a = req.query.search) === null || _a === void 0 ? void 0 : _a.toString();
        const products = yield prisma.products.findMany({
            where: {
                name: {
                    contains: search,
                },
            },
            orderBy: {
                productId: "asc",
            },
        });
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving products" });
    }
});
exports.getProducts = getProducts;
const createProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId, name, price, rating, stockQuantity } = req.body;
        const product = yield prisma.products.create({
            data: {
                productId,
                name,
                price,
                rating,
                stockQuantity,
            },
        });
        res.status(201).json(product);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating product" });
    }
});
exports.createProducts = createProducts;
// export const deleteProducts = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const { productId } = req.params;
//     if (!productId) {
//       res.status(400).json({ message: "Product ID is required" });
//     }
//     const product = await prisma.products.delete({
//       where: {
//         productId,
//       },
//     });
//     res.status(200).json({ message: "Product deleted successfully", product });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting product" });
//   }
// };
const editProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId, name, price, stockQuantity, rating } = req.body;
        const updatedProduct = yield prisma.products.update({
            where: {
                productId,
            },
            data: {
                name,
                price,
                stockQuantity,
                rating,
            },
        });
        res
            .status(200)
            .json({ message: "Product updated successfully", updatedProduct });
    }
    catch (error) {
        res.status(500).json({ message: "Error updating product", error });
    }
});
exports.editProduct = editProduct;

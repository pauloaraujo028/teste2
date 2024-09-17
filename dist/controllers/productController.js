"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editProduct = exports.createProducts = exports.getProducts = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getProducts = async (req, res) => {
    try {
        const search = req.query.search?.toString();
        const products = await prisma.products.findMany({
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
};
exports.getProducts = getProducts;
const createProducts = async (req, res) => {
    try {
        const { productId, name, price, rating, stockQuantity } = req.body;
        const product = await prisma.products.create({
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
};
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
const editProduct = async (req, res) => {
    try {
        const { productId, name, price, stockQuantity, rating } = req.body;
        const updatedProduct = await prisma.products.update({
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
};
exports.editProduct = editProduct;

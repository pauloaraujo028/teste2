import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Criação de usuários
  await prisma.users.createMany({
    data: [
      { name: "Alice", email: "alice@example.com" },
      { name: "Bob", email: "bob@example.com" },
      { name: "Charlie", email: "charlie@example.com" },
    ],
  });

  // Criação de produtos
  await prisma.products.createMany({
    data: [
      {
        name: "Smartphone X100",
        price: 999.99,
        rating: 4.5,
        stockQuantity: 150,
      },
      {
        name: "Laptop Pro 15",
        price: 1499.99,
        rating: 4.7,
        stockQuantity: 100,
      },
      { name: "Tablet Z", price: 599.99, rating: 4.3, stockQuantity: 200 },
      {
        name: "Smartwatch Series 5",
        price: 299.99,
        rating: 4.8,
        stockQuantity: 250,
      },
      {
        name: "Wireless Headphones",
        price: 199.99,
        rating: 4.6,
        stockQuantity: 300,
      },
      {
        name: "Bluetooth Speaker",
        price: 99.99,
        rating: 4.2,
        stockQuantity: 400,
      },
      {
        name: "Gaming Console Y",
        price: 499.99,
        rating: 4.9,
        stockQuantity: 80,
      },
      { name: "4K Smart TV", price: 799.99, rating: 4.4, stockQuantity: 120 },
      {
        name: "External Hard Drive",
        price: 89.99,
        rating: 4.3,
        stockQuantity: 150,
      },
      { name: "USB-C Charger", price: 39.99, rating: 4.1, stockQuantity: 500 },
      { name: "Wireless Mouse", price: 29.99, rating: 4.7, stockQuantity: 300 },
      {
        name: "Mechanical Keyboard",
        price: 129.99,
        rating: 4.6,
        stockQuantity: 200,
      },
      {
        name: "Portable Projector",
        price: 259.99,
        rating: 4.5,
        stockQuantity: 100,
      },
      {
        name: "Smart Home Hub",
        price: 149.99,
        rating: 4.2,
        stockQuantity: 180,
      },
      {
        name: "Action Camera HD",
        price: 349.99,
        rating: 4.8,
        stockQuantity: 60,
      },
      { name: "E-reader Z2", price: 199.99, rating: 4.4, stockQuantity: 220 },
      {
        name: "Noise Cancelling Earbuds",
        price: 149.99,
        rating: 4.7,
        stockQuantity: 250,
      },
      {
        name: "Fitness Tracker Pro",
        price: 99.99,
        rating: 4.5,
        stockQuantity: 270,
      },
      { name: "Drone X200", price: 899.99, rating: 4.9, stockQuantity: 50 },
      {
        name: "Digital Camera D500",
        price: 1099.99,
        rating: 4.6,
        stockQuantity: 90,
      },
      {
        name: "Smart Thermostat",
        price: 199.99,
        rating: 4.2,
        stockQuantity: 180,
      },
      {
        name: "Bluetooth Earphones",
        price: 79.99,
        rating: 4.3,
        stockQuantity: 340,
      },
      { name: "Gaming Headset", price: 99.99, rating: 4.6, stockQuantity: 150 },
      { name: "VR Headset", price: 399.99, rating: 4.8, stockQuantity: 70 },
      {
        name: "Smart Light Bulbs",
        price: 49.99,
        rating: 4.4,
        stockQuantity: 300,
      },
      {
        name: "Electric Scooter X",
        price: 599.99,
        rating: 4.7,
        stockQuantity: 60,
      },
      { name: "Portable SSD", price: 149.99, rating: 4.5, stockQuantity: 120 },
      {
        name: "Wi-Fi Router 6",
        price: 129.99,
        rating: 4.3,
        stockQuantity: 130,
      },
      {
        name: "Smart Door Lock",
        price: 199.99,
        rating: 4.4,
        stockQuantity: 110,
      },
      {
        name: "Home Security Camera",
        price: 99.99,
        rating: 4.6,
        stockQuantity: 200,
      },
    ],
  });

  // Criação de vendas
  await prisma.sales.createMany({
    data: [
      {
        productId: 1,
        timestamp: new Date(),
        quantity: 5,
        unitPrice: 29.99,
        totalAmount: 149.95,
      },
      {
        productId: 2,
        timestamp: new Date(),
        quantity: 3,
        unitPrice: 19.99,
        totalAmount: 59.97,
      },
      {
        productId: 3,
        timestamp: new Date(),
        quantity: 2,
        unitPrice: 39.99,
        totalAmount: 79.98,
      },
    ],
  });

  // Criação de compras
  await prisma.purchases.createMany({
    data: [
      {
        productId: 1,
        timestamp: new Date(),
        quantity: 10,
        unitCost: 20.0,
        totalCost: 200.0,
      },
      {
        productId: 2,
        timestamp: new Date(),
        quantity: 15,
        unitCost: 15.0,
        totalCost: 225.0,
      },
      {
        productId: 3,
        timestamp: new Date(),
        quantity: 8,
        unitCost: 30.0,
        totalCost: 240.0,
      },
    ],
  });

  // Criação de despesas
  await prisma.expenses.createMany({
    data: [
      { category: "Office Supplies", amount: 150.0, timestamp: new Date() },
      { category: "Utilities", amount: 300.0, timestamp: new Date() },
      { category: "Marketing", amount: 200.0, timestamp: new Date() },
    ],
  });

  // Criação de resumos de vendas
  await prisma.salesSummary.createMany({
    data: [
      { totalValue: 289.9, changePercentage: 5.0, date: new Date() },
      { totalValue: 150.0, changePercentage: 2.5, date: new Date() },
    ],
  });

  // Criação de resumos de compras
  await prisma.purchaseSummary.createMany({
    data: [
      { totalPurchased: 665.0, changePercentage: 3.0, date: new Date() },
      { totalPurchased: 500.0, changePercentage: 4.0, date: new Date() },
    ],
  });

  // Criação de resumos de despesas
  await prisma.expenseSummary.createMany({
    data: [
      { totalExpenses: 650.0, date: new Date() },
      { totalExpenses: 350.0, date: new Date() },
    ],
  });

  // Criação de despesas por categoria
  await prisma.expenseByCategory.createMany({
    data: [
      {
        expenseSummaryId: 1,
        category: "Office Supplies",
        amount: 150,
        date: new Date(),
      },
      {
        expenseSummaryId: 1,
        category: "Utilities",
        amount: 300,
        date: new Date(),
      },
      {
        expenseSummaryId: 2,
        category: "Marketing",
        amount: 200,
        date: new Date(),
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

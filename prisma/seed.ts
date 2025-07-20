import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// password for users -> password123
async function main() {
  await prisma.orderItem.createMany({
    data: [
      {
        orderId: 1,
        bookId: 4,
        quantity: 2,
        price: 10.99,
      },
      {
        orderId: 3,
        bookId: 10,
        quantity: 4,
        price: 14.9,
      },
      {
        orderId: 2,
        bookId: 8,
        quantity: 3,
        price: 12,
      },
      {
        orderId: 4,
        bookId: 3,
        quantity: 6,
        price: 20,
      },
    ],
  });

  console.log("✅ Users are seeded.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

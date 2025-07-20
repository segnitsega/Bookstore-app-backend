import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// password for users -> password123
async function main() {
  await prisma.cartItem.createMany({
    data: [
      {
        userId: 2,
        bookId: 4,
        quantity: 2,
      },
      {
        userId: 3,
        bookId: 6,
        quantity: 3,
      },
      {
        userId: 4,
        bookId: 8,
        quantity: 4,
      },
      {
        userId: 5,
        bookId: 10,
        quantity: 5,
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

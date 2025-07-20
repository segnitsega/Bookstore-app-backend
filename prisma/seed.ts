import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// password for users -> password123
async function main() {
  await prisma.order.createMany({
    data: [
      {
        userId: 2,
        total: 2,
        
      }, {
        userId: 3,
        total: 1,
        
      }, {
        userId: 4,
        total: 3,
        
      }, {
        userId: 5,
        total: 4,
        
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

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        password: "password123",
        role: "user",
      },
      {
        firstName: "Segni",
        lastName: "Tsega",
        email: "segni@dev.com",
        password: "password123",
        role: "admin",
      },
      {
        firstName: "Elias",
        lastName: "Wekgari",
        email: "eias@wekgari.com",
        password: "password123",
        role: "user",
      },
      {
        firstName: "Abdi",
        lastName: "Gashahun",
        email: "abdi@gmail.com",
        password: "password123",
        role: "user",
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

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // await prisma.book.createMany({
  //   data: [
  //     {
  //       title: "The Pragmatic Programmer",
  //       author: "Andrew Hunt",
  //       price: 100,
  //       stock: 10,
  //       description:
  //         "Classic book on pragmatic software development principles.",
  //       imageUrl:
  //         "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20.jpg",
  //     },
  //     {
  //       title: "The Pragmatic Programmer",
  //       author: "Andrew Hunt",
  //       price: 100,
  //       stock: 10,
  //       description:
  //         "Classic book on pragmatic software development principles.",
  //       imageUrl:
  //         "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20.jpg",
  //     },
  //     {
  //       title: "The Pragmatic Programmer",
  //       author: "Andrew Hunt",
  //       price: 100,
  //       stock: 10,
  //       description:
  //         "Classic book on pragmatic software development principles.",
  //       imageUrl:
  //         "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20.jpg",
  //     },
  //     {
  //       title: "The Pragmatic Programmer",
  //       author: "Andrew Hunt",
  //       price: 100,
  //       stock: 10,
  //       description:
  //         "Classic book on pragmatic software development principles.",
  //       imageUrl:
  //         "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20.jpg",
  //     },
  //     {
  //       title: "The Pragmatic Programmer",
  //       author: "Andrew Hunt",
  //       price: 100,
  //       stock: 10,
  //       description:
  //         "Classic book on pragmatic software development principles.",
  //       imageUrl:
  //         "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20.jpg",
  //     },
  //     {
  //       title: "The Pragmatic Programmer",
  //       author: "Andrew Hunt",
  //       price: 100,
  //       stock: 10,
  //       description:
  //         "Classic book on pragmatic software development principles.",
  //       imageUrl:
  //         "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20.jpg",
  //     },
  //     {
  //       title: "The Pragmatic Programmer",
  //       author: "Andrew Hunt",
  //       price: 100,
  //       stock: 10,
  //       description:
  //         "Classic book on pragmatic software development principles.",
  //       imageUrl:
  //         "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20.jpg",
  //     },
  //     {
  //       title: "The Pragmatic Programmer",
  //       author: "Andrew Hunt",
  //       price: 100,
  //       stock: 10,
  //       description:
  //         "Classic book on pragmatic software development principles.",
  //       imageUrl:
  //         "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20.jpg",
  //     },
  //     {
  //       title: "The Pragmatic Programmer",
  //       author: "Andrew Hunt",
  //       price: 100,
  //       stock: 10,
  //       description:
  //         "Classic book on pragmatic software development principles.",
  //       imageUrl:
  //         "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20.jpg",
  //     },
  //     {
  //       title: "The Pragmatic Programmer",
  //       author: "Andrew Hunt",
  //       price: 100,
  //       stock: 10,
  //       description:
  //         "Classic book on pragmatic software development principles.",
  //       imageUrl:
  //         "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20.jpg",
  //     },
  //     {
  //       title: "The Pragmatic Programmer",
  //       author: "Andrew Hunt",
  //       price: 100,
  //       stock: 10,
  //       description:
  //         "Classic book on pragmatic software development principles.",
  //       imageUrl:
  //         "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20.jpg",
  //     },
  //   ],
  // });

  // await prisma.user.createMany({
  //   data: [
  //     {
  //       firstName: "Alice",
  //       lastName: "Johnson",
  //       email: "alice@example.com",
  //       password: "hashedpassword1",
  //       role: "user",
  //     },
  //     {
  //       firstName: "Bob",
  //       lastName: "Smith",
  //       email: "bob@example.com",
  //       password: "hashedpassword2",
  //       role: "user",
  //     },
  //     {
  //       firstName: "Charlie",
  //       lastName: "Brown",
  //       email: "charlie@example.com",
  //       password: "hashedpassword3",
  //       role: "user",
  //     },
  //     {
  //       firstName: "Diana",
  //       lastName: "Evans",
  //       email: "diana@example.com",
  //       password: "hashedpassword4",
  //       role: "admin",
  //     },
  //   ],
  // });

  // await prisma.order.createMany({
  //   data: [
  //     { userId: 1, total: 2 },
  //     { userId: 2, total: 3 },
  //     { userId: 3, total: 5 },
  //     { userId: 4, total: 10 }
  //   ],
  // });

  // await prisma.cartItem.createMany({
  //   data: [
  //     { userId: 1, bookId: 2, quantity: 1 },
  //     { userId: 2, bookId: 5, quantity: 3 },
  //     { userId: 3, bookId: 7, quantity: 2 },
  //     { userId: 4, bookId: 1, quantity: 4 },
  //   ],
  // });

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

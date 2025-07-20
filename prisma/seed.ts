import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.book.createMany({
    data: [
      {
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt',
        price: 39.99,
        stock: 10,
        description: 'Classic book on pragmatic software development principles.',
        imageUrl: 'https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20.jpg',
      },
      {
        title: 'Clean Code',
        author: 'Robert C. Martin',
        price: 34.99,
        stock: 15,
        description: 'A Handbook of Agile Software Craftsmanship.',
        imageUrl: 'https://m.media-amazon.com/images/I/41zoxjP9lcL._AC_SY200_QL15_.jpg',
      },
      {
        title: 'Refactoring',
        author: 'Martin Fowler',
        price: 44.99,
        stock: 7,
        description: 'Improving the design of existing code.',
        imageUrl: 'https://www.mountaingoatsoftware.com/uploads/reviews/refactoring-databases.jpg',
      },
      {
        title: 'Design Patterns',
        author: 'Erich Gamma',
        price: 49.99,
        stock: 5,
        description: 'Elements of Reusable Object-Oriented Software.',
        imageUrl: 'https://refactoring.guru/images/patterns/book/web-cover-en.png',
      },
      {
        title: "You Don’t Know JS",
        author: 'Kyle Simpson',
        price: 24.99,
        stock: 20,
        description: 'Deep dive into JavaScript internals.',
        imageUrl: 'https://m.media-amazon.com/images/I/71mKvD89oEL._UF1000,1000_QL80_.jpg',
      },
      {
        title: 'JavaScript: The Good Parts',
        author: 'Douglas Crockford',
        price: 19.99,
        stock: 12,
        description: 'Best practices in JavaScript development.',
        imageUrl: 'https://m.media-amazon.com/images/I/7185IMvz88L.jpg',
      },
      {
        title: 'Introduction to Algorithms',
        author: 'Thomas H. Cormen',
        price: 59.99,
        stock: 8,
        description: 'Comprehensive guide to algorithms.',
        imageUrl: 'https://m.media-amazon.com/images/I/61O6K0yPmzL._UF1000,1000_QL80_.jpg',
      },
      {
        title: 'Eloquent JavaScript',
        author: 'Marijn Haverbeke',
        price: 29.99,
        stock: 13,
        description: 'A Modern Introduction to Programming.',
        imageUrl: 'https://m.media-amazon.com/images/I/81HqVRRwp3L._UF1000,1000_QL80_.jpg',
      },
      {
        title: 'Structure and Interpretation of Computer Programs',
        author: 'Harold Abelson',
        price: 54.99,
        stock: 6,
        description: 'Classic textbook on computer science.',
        imageUrl: 'https://m.media-amazon.com/images/I/71BBXQnykuL._UF1000,1000_QL80_.jpg',
      },
      {
        title: 'Cracking the Coding Interview',
        author: 'Gayle Laakmann McDowell',
        price: 39.99,
        stock: 9,
        description: 'Interview prep for programmers.',
        imageUrl: 'https://m.media-amazon.com/images/I/61mIq2iJUXL.jpg',
      },
    ],
  });

  console.log('✅ 10 books seeded.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

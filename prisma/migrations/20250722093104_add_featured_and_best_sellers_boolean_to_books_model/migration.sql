/*
  Warnings:

  - You are about to drop the column `bestSellers` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `featured` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "bestSellers" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "featured" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "bestSellers",
DROP COLUMN "featured";

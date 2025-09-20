/*
  Warnings:

  - You are about to drop the column `quantity` on the `CartItem` table. All the data in the column will be lost.
  - Added the required column `bookId` to the `CartItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."CartItem" DROP COLUMN "quantity",
ADD COLUMN     "bookId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."CartItem" ADD CONSTRAINT "CartItem_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "public"."Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

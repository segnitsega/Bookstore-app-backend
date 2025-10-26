/*
  Warnings:

  - A unique constraint covering the columns `[bookId,userId]` on the table `Wishlist` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Wishlist_bookId_userId_key" ON "public"."Wishlist"("bookId", "userId");

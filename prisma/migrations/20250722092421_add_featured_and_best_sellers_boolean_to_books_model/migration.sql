-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bestSellers" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "featured" BOOLEAN NOT NULL DEFAULT false;

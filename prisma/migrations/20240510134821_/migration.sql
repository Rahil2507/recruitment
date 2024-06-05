/*
  Warnings:

  - The `field` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "JobField" AS ENUM ('OTHER');

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "field",
ADD COLUMN     "field" "JobField" NOT NULL DEFAULT 'OTHER';

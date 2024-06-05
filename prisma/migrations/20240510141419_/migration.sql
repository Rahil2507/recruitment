-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "JobField" ADD VALUE 'TECH';
ALTER TYPE "JobField" ADD VALUE 'FINANCE';
ALTER TYPE "JobField" ADD VALUE 'MARKETING';
ALTER TYPE "JobField" ADD VALUE 'SALES';
ALTER TYPE "JobField" ADD VALUE 'MANAGEMENT';
ALTER TYPE "JobField" ADD VALUE 'MEDIA';
ALTER TYPE "JobField" ADD VALUE 'LAW';
ALTER TYPE "JobField" ADD VALUE 'ENGINEERING';
ALTER TYPE "JobField" ADD VALUE 'BUSINESS';
ALTER TYPE "JobField" ADD VALUE 'HR';
ALTER TYPE "JobField" ADD VALUE 'OPERATIONS';
ALTER TYPE "JobField" ADD VALUE 'DESIGN';
ALTER TYPE "JobField" ADD VALUE 'WRITING';
ALTER TYPE "JobField" ADD VALUE 'EDITING';
ALTER TYPE "JobField" ADD VALUE 'TEACHING';
ALTER TYPE "JobField" ADD VALUE 'HEALTHCARE';
ALTER TYPE "JobField" ADD VALUE 'ARCHITECTURE';
ALTER TYPE "JobField" ADD VALUE 'HOSPITALITY';
ALTER TYPE "JobField" ADD VALUE 'SPORTS';
ALTER TYPE "JobField" ADD VALUE 'NONPROFIT';

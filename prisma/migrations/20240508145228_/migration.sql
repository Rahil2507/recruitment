-- CreateEnum
CREATE TYPE "DataType" AS ENUM ('USER', 'JOB', 'APPLICATION');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('CREATE', 'UPDATE', 'DELETED');

-- CreateEnum
CREATE TYPE "StatusType" AS ENUM ('ACTIVE', 'DELETED', 'DRAFT');

-- AlterTable
ALTER TABLE "Application" ADD COLUMN     "status" "StatusType" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "status" "StatusType" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "status" "StatusType" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "status" "StatusType" NOT NULL DEFAULT 'ACTIVE';

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "dataType" "DataType" NOT NULL,
    "notificationType" "NotificationType" NOT NULL,
    "employerId" TEXT NOT NULL,
    "dataId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_employerId_fkey" FOREIGN KEY ("employerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

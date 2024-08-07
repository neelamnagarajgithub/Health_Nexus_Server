/*
  Warnings:

  - You are about to drop the column `date` on the `Appointment` table. All the data in the column will be lost.
  - Added the required column `amount` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Doctor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "date",
ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "amountpaid" BOOLEAN,
ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Doctor" ADD COLUMN     "phone" TEXT NOT NULL;

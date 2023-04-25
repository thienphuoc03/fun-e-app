/*
  Warnings:

  - Added the required column `salt` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `address` ADD COLUMN `status` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `salt` VARCHAR(191) NOT NULL;

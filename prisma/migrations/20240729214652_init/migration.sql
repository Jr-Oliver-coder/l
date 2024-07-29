-- CreateTable
CREATE TABLE "Data" (
    "id" SERIAL NOT NULL,
    "phoneA" TEXT NOT NULL,
    "phoneB" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "pin" INTEGER NOT NULL,
    "holder" TEXT NOT NULL,

    CONSTRAINT "Data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ship" (
    "id" TEXT NOT NULL,
    "shipName" TEXT NOT NULL,
    "IMO" TEXT NOT NULL,
    "flag" TEXT NOT NULL,
    "tonnage" DOUBLE PRECISION NOT NULL,
    "originPort" TEXT NOT NULL,
    "originPortName" TEXT NOT NULL,
    "destinationPort" TEXT NOT NULL,
    "destinationPortName" TEXT NOT NULL,
    "collectionAmount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ship_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ship_IMO_key" ON "Ship"("IMO");

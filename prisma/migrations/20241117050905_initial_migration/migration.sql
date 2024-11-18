-- CreateTable
CREATE TABLE "Curriculo" (
    "Id" INTEGER NOT NULL,
    "Address" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Cellphone" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Scholarity" TEXT NOT NULL,
    "Experience" TEXT NOT NULL,

    CONSTRAINT "Curriculo_pkey" PRIMARY KEY ("Id")
);

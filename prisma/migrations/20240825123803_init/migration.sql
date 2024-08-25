-- CreateTable
CREATE TABLE "patients" (
    "mrn" TEXT NOT NULL PRIMARY KEY,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "generalPractitionerName" TEXT,
    "primaryCardiologistName" TEXT,
    "structuralCardiologistName" TEXT
);

-- CreateTable
CREATE TABLE "conferences" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME,
    "diagnosis" TEXT NOT NULL,
    "proposal" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    CONSTRAINT "conferences_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patients" ("mrn") ON DELETE RESTRICT ON UPDATE CASCADE
);

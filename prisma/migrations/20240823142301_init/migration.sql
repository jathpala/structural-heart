-- CreateTable
CREATE TABLE "Patient" (
    "mrn" TEXT NOT NULL PRIMARY KEY,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "dob" DATETIME NOT NULL,
    "generalPractitionerName" TEXT,
    "primaryCardiologistName" TEXT,
    "structuralCardiologistName" TEXT
);

-- CreateTable
CREATE TABLE "Conference" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME,
    "diagnosis" TEXT NOT NULL,
    "proposal" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    CONSTRAINT "Conference_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient" ("mrn") ON DELETE RESTRICT ON UPDATE CASCADE
);

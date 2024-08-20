-- CreateTable
CREATE TABLE "Patient" (
    "mrn" TEXT NOT NULL PRIMARY KEY,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "dob" DATETIME NOT NULL,
    "generalPractitionerId" INTEGER,
    "primaryCardiologistId" INTEGER,
    "structuralCardiologistId" INTEGER,
    CONSTRAINT "Patient_generalPractitionerId_fkey" FOREIGN KEY ("generalPractitionerId") REFERENCES "Doctor" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Patient_primaryCardiologistId_fkey" FOREIGN KEY ("primaryCardiologistId") REFERENCES "Doctor" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Patient_structuralCardiologistId_fkey" FOREIGN KEY ("structuralCardiologistId") REFERENCES "Doctor" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Doctor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT
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

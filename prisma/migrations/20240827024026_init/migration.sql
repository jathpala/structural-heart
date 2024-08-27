/*
  Warnings:

  - Added the required column `status` to the `patients` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_patients" (
    "mrn" TEXT NOT NULL PRIMARY KEY,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "generalPractitionerName" TEXT,
    "primaryCardiologistName" TEXT,
    "structuralCardiologistName" TEXT,
    "height" INTEGER,
    "weight" INTEGER,
    "diagnosis" TEXT,
    "summary" TEXT,
    "history" TEXT,
    "otherPastHistory" TEXT,
    "medications" TEXT,
    "allergies" TEXT,
    "NYHA" INTEGER,
    "angina" BOOLEAN,
    "syncope" BOOLEAN,
    "heartFailureAdmission" BOOLEAN,
    "orthopnea" BOOLEAN,
    "PND" BOOLEAN,
    "heartFailure" BOOLEAN,
    "heartFailureDetails" TEXT,
    "IHD" BOOLEAN,
    "IHDDetails" TEXT,
    "previousMI" BOOLEAN,
    "previousPCI" BOOLEAN,
    "PCIDetails" TEXT,
    "previousCardiacSurgery" TEXT,
    "cardiacSurgeryDetails" TEXT,
    "previousCABG" BOOLEAN,
    "previousSAVR" BOOLEAN,
    "previousStructuralIntervention" BOOLEAN,
    "structuralInterventionDetails" TEXT,
    "previousTAVI" BOOLEAN,
    "previousBAV" BOOLEAN,
    "AF" BOOLEAN,
    "AFDetails" TEXT,
    "implantableCardiacDevice" BOOLEAN,
    "implantableCardiacDeviceDetails" TEXT,
    "previousStrokeOrTIA" BOOLEAN,
    "strokeAndTIADetails" TEXT,
    "carotidArteryDisease" BOOLEAN,
    "carotidArteryDiseaseDetails" TEXT,
    "peripheralArteryDisease" BOOLEAN,
    "peripheralArteryDiseaseDetails" TEXT,
    "smoker" TEXT,
    "lungDisease" BOOLEAN,
    "lungDiseaseDetails" TEXT,
    "hypertension" BOOLEAN,
    "diabetes" TEXT,
    "chronicKidneyDisease" BOOLEAN,
    "dialysis" TEXT,
    "porcelainAorta" BOOLEAN,
    "hostileChest" BOOLEAN,
    "chestRadiotherapy" BOOLEAN,
    "steroids" BOOLEAN
);
INSERT INTO "new_patients" ("dob", "firstname", "generalPractitionerName", "lastname", "mrn", "primaryCardiologistName", "sex", "structuralCardiologistName") SELECT "dob", "firstname", "generalPractitionerName", "lastname", "mrn", "primaryCardiologistName", "sex", "structuralCardiologistName" FROM "patients";
DROP TABLE "patients";
ALTER TABLE "new_patients" RENAME TO "patients";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

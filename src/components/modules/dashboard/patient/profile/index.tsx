"use client";

import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Download, Phone, Mail, MapPin } from "lucide-react";

const patientData = {
  id: "ef37a9d7-5078-4e3b-a638-e5a0906367fd",
  email: "alice.smith@example.com",
  name: "Hridoy Chandra Roy",
  profilePhoto:
    "https://res.cloudinary.com/dsb1inal0/image/upload/v1756026949/cnnuwvs2dcannhdjysbk.jpg",
  contactNumber: "01738211453",
  address: "Dinajpur, Bangladesh",
  isDeleted: false,
  createdAt: "2025-08-24T09:15:50.186Z",
  updatedAt: "2025-08-30T06:24:28.275Z",
  medicalReport: [
    {
      id: "51cf1c4a-2017-4d42-ab8f-8bc26ccdbb17",
      reportName: "General Health Checkup",
      reportLink: "https://example.com/reports/hridoy-general-checkup.pdf",
    },
  ],
  patientHealthData: {
    gender: "MALE",
    dateOfBirth: "2002-09-15",
    bloodGroup: "O_POSITIVE",
    hasAllergies: false,
    hasDiabetes: false,
    height: "175 cm",
    weight: "68 kg",
    smokingStatus: false,
    dietaryPreferences: "Vegetarian",
    pregnancyStatus: false,
    mentalHealthHistory: "No significant history",
    immunizationStatus: "Up to date",
    hasPastSurgeries: false,
    recentAnxiety: false,
    recentDepression: false,
    maritalStatus: "UNMARRIED",
  },
};

export default function PatientProfilePage() {
  const health = patientData.patientHealthData;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header */}
      <Card className="overflow-hidden shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-6 p-6">
          <Image
            src={patientData.profilePhoto}
            alt={patientData.name}
            width={150}
            height={100}
            className=" w-[120px] h-[120px] rounded-full object-cover"
          />
          <div className="flex-1 text-center md:text-left space-y-2">
            <CardTitle className="text-2xl font-bold">
              {patientData.name}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Patient Profile
            </CardDescription>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>{patientData.contactNumber}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>{patientData.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{patientData.address}</span>
              </div>
            </div>
          </div>
        </div>
        <Separator />
        {/* Health Info */}
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-6">
          <InfoItem label="Gender" value={health.gender} />
          <InfoItem label="Date of Birth" value={health.dateOfBirth} />
          <InfoItem label="Blood Group" value={health.bloodGroup} />
          <InfoItem label="Height" value={health.height} />
          <InfoItem label="Weight" value={health.weight} />
          <InfoItem
            label="Dietary Preferences"
            value={health.dietaryPreferences}
          />
          <InfoItem
            label="Allergies"
            value={health.hasAllergies ? "Yes" : "No"}
          />
          <InfoItem
            label="Diabetes"
            value={health.hasDiabetes ? "Yes" : "No"}
          />
          <InfoItem
            label="Smoking"
            value={health.smokingStatus ? "Yes" : "No"}
          />
          <InfoItem label="Mental Health" value={health.mentalHealthHistory} />
          <InfoItem label="Immunization" value={health.immunizationStatus} />
          <InfoItem
            label="Past Surgeries"
            value={health.hasPastSurgeries ? "Yes" : "No"}
          />
          <InfoItem label="Marital Status" value={health.maritalStatus} />
        </CardContent>
      </Card>

      {/* Medical Reports */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Medical Reports</CardTitle>
            <CardDescription>
              Download and view your uploaded health reports
            </CardDescription>
          </CardHeader>
          <CardContent>
            {patientData.medicalReport.length > 0 ? (
              <ul className="space-y-3">
                {patientData.medicalReport.map((report) => (
                  <li
                    key={report.id}
                    className="flex items-center justify-between bg-muted p-3 rounded-lg"
                  >
                    <span className="font-medium">{report.reportName}</span>
                    <Button
                      asChild
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <a href={report.reportLink} target="_blank">
                        <Download size={16} />
                        Download
                      </a>
                    </Button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground">No reports available.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-4 bg-muted rounded-lg shadow-sm">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}

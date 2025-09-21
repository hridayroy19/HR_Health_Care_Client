"use client";

import { HRDataTable } from "@/components/ui/core/HRTable/HRDataTable";
import {
  ColumnDef,
  createAnimatedCell,
  createSortableHeader,
} from "@/components/ui/table";
import { IPatient } from "@/types";
import Image from "next/image";

const PatientTabil = ({ patient }: { patient: IPatient[] }) => {
  console.log(patient, "data");

  const columns: ColumnDef<IPatient>[] = [
    {
      accessorKey: "profilePhoto",
      header: "Photo",
      cell: ({ row }) => {
        const photo = row.original.profilePhoto || "/default-avatar.png";
        return (
          <div className="flex justify-center">
            <Image
              src={photo}
              alt={row.original.name || "Patient"}
              width={60}
              height={60}
              className="rounded-full w-[60px] h-[55px] object-cover"
            />
          </div>
        );
      },
    },
    {
      accessorKey: "name",
      header: createSortableHeader("Name"),
      cell: createAnimatedCell(true),
    },
    {
      accessorKey: "email",
      header: createSortableHeader("Email"),
      cell: createAnimatedCell(true),
    },
    {
      accessorKey: "contactNumber",
      header: createSortableHeader("Contact"),
      cell: createAnimatedCell(true),
    },
    {
      accessorKey: "address",
      header: createSortableHeader("Address"),
      cell: createAnimatedCell(true),
    },
    {
      accessorKey: "patientHealthData.gender",
      header: createSortableHeader("Gender"),
      cell: ({ row }) => row.original.patientHealthData?.gender ?? "N/A",
    },
  ];

  return (
    <div>
      <HRDataTable
        data={patient}
        columns={columns}
        searchPlaceholder="Search patients..."
        emptyMessage="No patients found."
      />
    </div>
  );
};

export default PatientTabil;

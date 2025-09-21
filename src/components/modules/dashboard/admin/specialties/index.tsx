"use client";
import { Button } from "@/components/ui/button";
import { HRDataTable } from "@/components/ui/core/HRTable/HRDataTable";
import LustreText from "@/components/ui/lustretext";
import {
  ColumnDef,
  createAnimatedCell,
  createSortableHeader,
} from "@/components/ui/table";
import { ISpecialty } from "@/types";
import Image from "next/image";

const SpecialtiesManagement = ({
  specialties,
}: {
  specialties: ISpecialty[];
}) => {
  const columns: ColumnDef<ISpecialty>[] = [
    {
      accessorKey: "icon",
      header: "Icon",
      cell: ({ row }) => (
        <div className="flex mr-10 justify-center">
          <Image
            src={row.original.icon}
            alt={row.original.title}
            width={40}
            height={40}
            className="rounded-md"
          />
        </div>
      ),
    },
    {
      accessorKey: "title",
      header: createSortableHeader("Title"),
      cell: createAnimatedCell(true),
    },
    {
      accessorKey: "description",
      header: createSortableHeader("Description"),
      cell: createAnimatedCell(true),
    },
  ];
  return (
    <div className="p-6">
      <div className="flex justify-between mb-8">
        <LustreText className="text-2xl" text="Specilites Management" />
        <Button className="bg-purple-600"> + Add Speclites </Button>
      </div>
      <HRDataTable
        data={specialties}
        columns={columns}
        searchPlaceholder="Search doctors..."
        emptyMessage="No doctors found."
      />
    </div>
  );
};

export default SpecialtiesManagement;

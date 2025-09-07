"use client";
import { Button } from "@/components/ui/button";
import { HRDataTable } from "@/components/ui/core/HRTable/HRDataTable";
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

 console.log(specialties,"dddddd")

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
    <div>
      <div className="flex justify-between mb-8">
        <h4 className="font-normal text-3xl">Doctor Management</h4>
        <Button> add </Button>
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

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type { ColumnDef } from "@/components/ui/table";
import {
  DataTable,
  createSortableHeader,
  createAnimatedCell,
} from "@/components/ui/table";
import { Edit, Trash } from "lucide-react";
import { IDoctor } from "@/types";
import DeleteConfirmationModal from "@/components/ui/core/HRMOdal/DeleteConfirmationModal";
import { toast } from "sonner";
import { useState } from "react";
import { deleteDoctor } from "@/services/Doctor";

const DoctorDataTable = ({ doctors }: { doctors: IDoctor[] }) => {
  // delete modal state
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  // update modal state
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);

  const [selectedId, setSelectedId] = useState<string | null>(null);
  console.log(selectedId, "id");
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDelete = (data: IDoctor) => {
    setSelectedId(data?.id);
    setSelectedItem(data?.name || "");
    setDeleteModalOpen(true);
  };

  // const handleUpdate = (data: IDoctor) => {
  //   setSelectedId(data?.id);
  //   setUpdateModalOpen(true);
  // };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        const res = await deleteDoctor(selectedId);
        if (res.status) {
          toast.success(res.message);
          setDeleteModalOpen(false);
        } else {
          toast.error(res.message);
        }
      }
    } catch (err: any) {
      console.error(err?.message);
    }
  };

  const columns: ColumnDef<IDoctor>[] = [
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
      accessorKey: "gender",
      header: createSortableHeader("Gender"),
      cell: createAnimatedCell(true),
    },
    {
      accessorKey: "appointmentFee",
      header: createSortableHeader("Appointment Fee"),
      cell: createAnimatedCell(true),
    },
    {
      accessorKey: "address",
      header: createSortableHeader("Address"),
      cell: createAnimatedCell(true),
    },
    {
      accessorKey: "contactNumber",
      header: createSortableHeader("Contact Number"),
      cell: createAnimatedCell(true),
    },
    {
      accessorKey: "actions",
      header: () => <div>Action</div>,
      cell: ({ row }) => (
        <button
          className="text-red-500"
          title="Delete"
          onClick={() => handleDelete(row.original)}
        >
          <Trash className="w-5 h-5" />
        </button>
      ),
    },
    // {
    //   accessorKey: "actions_2",
    //   header: () => <div>Update</div>,
    //   cell: ({ row }) => (
    //     <button
    //       className="text-blue-500"
    //       title="Update"
    //       onClick={() => handleUpdate(row.original)}
    //     >
    //       <Edit className="w-5 h-5" />
    //     </button>
    //   ),
    // },
  ];

  return (
    <div>
      <DataTable
        className="px-4"
        columns={columns}
        data={doctors}
        searchable
        searchPlaceholder="Search doctors..."
        globalSearch
        pagination
        pageSize={10}
        columnVisibility
        enableAnimations
        staggerDelay={0.05}
        emptyMessage="No doctors found."
      />
      {/* Delete Modal */}
      <DeleteConfirmationModal
        name={selectedItem}
        isOpen={isDeleteModalOpen}
        onOpenChange={setDeleteModalOpen}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default DoctorDataTable;

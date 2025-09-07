"use client";
import type { ColumnDef } from "@tanstack/react-table";
import {
  DataTable as BaseDataTable,
} from "@/components/ui/table";

type HRDataTableProps<TData> = {
  data: TData[];
  columns: ColumnDef<TData>[];
  searchPlaceholder?: string;
  emptyMessage?: string;
  pageSize?: number;
};

export function HRDataTable<TData>({
  data,
  columns,
  searchPlaceholder = "Search...",
  emptyMessage = "No data found.",
  pageSize = 10,
}: HRDataTableProps<TData>) {
  return (
    <BaseDataTable
    className="px-4"
      columns={columns}
      data={data}
      searchable
      searchPlaceholder={searchPlaceholder}
      globalSearch
      pagination
      pageSize={pageSize}
      columnVisibility
      enableAnimations
      staggerDelay={0.05}
      emptyMessage={emptyMessage}
    />
  );
}

import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import product from "../models/Product";
import preprocessDate from "../utils/dateFormat";


interface props {
  data: product | any;
  status: string;
}

export default function Table({ data, status }: props) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="border-2 rounded-md p-3">
      <table className="w-full">
        <thead className="text-left rounded-lg border-b-2">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-3">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {status !== "loading" ? (
          <tbody className="divide-y-2">
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-slate-100 transition-all duration-300"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="py-1">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody></tbody>
        )}
      </table>
    </div>
  );
}

const columnHelper = createColumnHelper<product>();

const columns = [
  columnHelper.accessor("name", {
    header: () => "Name",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("category", {
    header: () => "Category",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("quantity", {
    header: () => "Quantity",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("price", {
    header: "Price",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("date_modified", {
    header: "Date Modified",
    footer: (info) => info.column.id,
    cell: (date) => preprocessDate(date)
  }),
];

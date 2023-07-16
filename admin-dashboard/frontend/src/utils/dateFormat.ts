import { CellContext } from "@tanstack/react-table";
import product from "../models/Product";

export default function preprocessDate(ms: CellContext<product, number>) {
  const timestamp = ms.getValue();
  
  const date = new Date(timestamp);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
  });

  return formattedDate;
}

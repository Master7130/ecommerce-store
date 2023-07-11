import React from "react";

export default function Products() {
  const handleAdd = () => {
    window.location.href = import.meta.env.VITE_BASE_URL + "/products/add";
  };

  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="text-3xl">Products</div>
        <button className="" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
}

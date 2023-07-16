import axios from "axios";
import {
  useQuery,
} from "@tanstack/react-query";
import Table from "../../components/Table";

export default function Products() {
  const handleAdd = () => {
    window.location.href = import.meta.env.VITE_BASE_URL + "/products/add";
  };

  const { status, data, error, isFetching } = useProducts();

  if (status !== "loading") console.log(data);

  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex flex-row justify-between w-full">
        <div className="text-3xl">Products</div>
        <button className="" onClick={handleAdd}>
          Add
        </button>
      </div>
      <div>
        <Table data={data} status={status} />
      </div>
    </div>
  );
}

function useProducts() {
  return useQuery({
    queryKey: ["products"],
    refetchInterval: 30000,
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_PRODUCT_SERVICE}/products`
      );
      return data;
    },
  });
}
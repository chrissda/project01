import ListProductN from "../components/ListProductN";
import useAxios from "../hooks/useAxios";

const AllProductsView = () => {
  const URL = import.meta.env.VITE_ENDPOINT_BASE;

  const { data, error, loading } = useAxios(`${URL}/productos`);

  return (
    <div>
      <ListProductN products={data} />      
    </div>
  );
};

export default AllProductsView;

import AllProductsView from "./AllProductsView";

const HomeN = () => {
  return (
    <div className="grid grid-cols-1 items-center justify-center">
      <div className="text-gray-800 text font-semibold text-2xl">
        Bienvenido a Chriss Store
      </div>
      <button 
        className="bg-orange-600 text-white"
        onClick={<AllProductsView />}
      >
        Ir al store
      </button>
    </div>
  );
};

export default HomeN;

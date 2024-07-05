//Componente productCardN
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductCardN = ({ product }) => {
  // props a renderizar 
  const { id, nombre, foto, categoria, descripcion, precio } = product;

  return(
      // Contenido del Card/imagen/texto
      <div>
        {/* Card */}
        <div className="bg-indigo-200 p-2 rounded-md shadow-xl">
          <div className="bg-indigo-50 rounded-md overflow-hidden shadow-xl max-w-md mx-auto relative">
            {/* imagen */}
            <img
              className="w-full h-64 object-cover"
              src={foto}
              alt="Image.jpg"
            />
            <span className="absolute bottom-1 right-1 bg-blue-500 text-white p-2 text-sm font-semibold rounded-lg">
              {categoria} 
            </span>
          </div>
          {/* Texto Card */}
          <div className="p-4"> 
              <h4 className="text-md font-semibold mb-2 truncate">{nombre}</h4> 
              <p className="text-sm text-gray-800 mb-2 truncate">{descripcion}</p> 
              <span className="text-md text-indigo-800">S/.{precio}</span> 
          </div>
          <div className="flex justify-center text-white text-center">
            <button className="px-3 py-1 bg-gray-700 hover:bg-gray-500 rounded-l-lg">
              Add <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <Link className="px-2 py-1 bg-indigo-700 hover:bg-indigo-600 rounded-r-lg">
              View <i className="fa-regular fa-eye"></i>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default ProductCardN;
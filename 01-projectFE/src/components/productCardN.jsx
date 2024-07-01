//Componente productCardN
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
            <div className="absolute bottom-1 right-1 bg-blue-500 text-white p-2 text-sm font-semibold rounded-lg">
              {categoria} 
            </div>
          </div>
          {/* Texto */}
          <div className="p-4"> 
              <h4 className="text-md font-semibold mb-2">{nombre}</h4> 
              <p className="text-sm text-gray-800 mb-2 truncate">{descripcion}</p> 
              <span className="text-md text-indigo-800">S/.{precio}</span> 
          </div>
        </div>
      </div>
  );
};

export default ProductCardN;
//Componente productCardN
const productCardN = () => {
    return(
        <div className="bg-indigo-200 p-4 rounded-md">
          {/* contenido del Card/imagen/texto */}
          <div className="bg-indigo-50 rounded-md overflow-hidden shadow-xl max-w-md mx-auto">
            <img 
              className="w-full h-full object-contain"
              src="" 
              alt="image.jpg"
            />
            <div className="p-4">
              <h4 className="text-md font-semibold mb-2">Titulo</h4>
              <p className="text-sm text-gray-800 mb-2">Descripción</p>
              <span className="text-xl text-indigo-600">S/.Precio</span>
            </div>
          </div>
        </div>
    )
}

export default productCardN

import { Link, NavLink } from "react-router-dom";


const BtnHome = () => {
	return (
		<>
			
		</>
	);
};

const NavbarN = () => {
	
	return (
    <>
  	  <div className="grid grid-cols-3 sticky top-0 z-[20] bg-sky-700 h-16 items-center text-white">
				<div className="flex justify-center">
					{/* <button className="w-2/4 h-16 text-center text-3xl border-2 bg-sky-700 border-orange-500">
					 Store
					</button> */}
					<div className="text-center text-3xl"><NavLink to="/">Store</NavLink></div>
				</div>
				<div className="flex h-16 items-center justify-end gap-4">
					<div className=" "><NavLink to="/">Inicio</NavLink></div>
					<div className=" "><NavLink to="/">Productos</NavLink></div>
					<div className=" "><NavLink to="/">Ingresar</NavLink></div>
					<div className=" "><NavLink to="/">Registrarse</NavLink></div>
				</div>
				<div className="flex justify-center border-r-0 gap-4">
					<Link className="text-orange-500">
						<i className="fa-solid fa-cart-shopping"></i>
					</Link>
					<div>
						<button className="bg-indigo-700 hover:outline hover:outline-2 hover:outline-sky-500 rounded-l-lg">Login</button>
						<button className="bg-indigo-700 hover:outline hover:outline-2 hover:outline-sky-500 rounded-r-lg">Register</button>
					</div>
				</div>
			</div>
    </>
  );
};

export default NavbarN;

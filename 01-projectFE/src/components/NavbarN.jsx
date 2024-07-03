import { NavLink } from "react-router-dom";


const BtnHome = () => {
	return {
		
	}
}

const NavbarN = () => {

 

  return (
    <>
  	  <div className="bg-cyan-600 h-20">
				{/* <div className="sticky top-0 z-[20] mx-auto flex w-1/4 items-center justify-between border-gray-500 border-b-0 p-6"> */}
				<div className="relative flex p-4 items-center justify-between">
					<button className="border-2 bg-gray-600 border-orange-500">
						Inicio
					</button>
					<div className="flex w-3/4 justify-end items-center">
						<div className="mx-2"><NavLink to="/">Inicio</NavLink></div>
						<div className="mx-2"><NavLink to="/">Productos</NavLink></div>
						
					</div>
					<div className="flex w-1/5 justify-end rounded-sm">
						<button className="mx-auto rounded rounded-l-lg ">Login</button>
						<button className="mx-auto rounded rounded-r-lg">Register</button>
						{/* <div className="mx-2"><NavLink to="/">Login</NavLink></div>
						<div className="mx-2"><NavLink to="/">Register</NavLink></div> */}
				</div>
				</div>
			</div>
    </>
  )
}

export default NavbarN
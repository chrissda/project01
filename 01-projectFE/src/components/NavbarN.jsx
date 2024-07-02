import { NavLink } from "react-router-dom";


const BtnHome = () => {
	return {
		
	}
}

const NavbarN = () => {

 

  return (
    <>
  	  <div className="bg-indigo-900">
				<div className="sticky top-0 z-[20] mx-auto flex w-1/4 items-center justify-between border-gray-500 border-b-0 p-6">
					<div className="">
						<NavLink to="/">Inicio</NavLink>
						<NavLink to="/">Productos</NavLink>
						<NavLink to="/">About</NavLink>
						<NavLink to="/">Login</NavLink>
						<NavLink to="/">Register</NavLink>
					</div>
				</div>
			</div>
    </>
  )
}

export default NavbarN
import { useState } from "react"
import { NavLink } from "react-router-dom"
import Logo from "../assets/logo.svg"
import Logoclose from "../assets/icon-close.svg"
import Hamburger from "../assets/icon-hamburger.svg"
const Nav = () =>
{
   let [open, setopen] = useState(false)
   const menus = [
      { name: "HOME" },
      { name: "SALES" },
      { name: "SERVICES" },
      { name: "CONTACT" },
      {name: "CART"},
   ]
   return (
      <nav className="flex items-center justify-between pt-5">
         <img src={open ? Logoclose : Hamburger} className="md:hidden  fixed right-5 cursor-pointer z-20 top-6" onClick={() => setopen(!open)} />
         <img src={Logo} alt="logo" className="w-10 ml-7" />
         <ul className={`bg-[#ffffff14] backdrop-blur-md  md:pl-10 pr-28 md:static fixed duration-500 ease-linear top-0 md:h-auto h-screen z-10 ${!open ? 'right-[-100%] ' : 'right-0'}`}>
            {
               menus.map((menu, index) => (
                  <NavLink to={`/${menu.name.toLowerCase()}`}>
                  <li key={index} className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
                     <span className="text-white cursor-pointer font-Barlow font-normal text-sm inline-block md:py-5 py-3"> {menu.name}</span>
                  </li>
                  </NavLink>
               ))
            }
         </ul>
      </nav>
   )
}
export default Nav
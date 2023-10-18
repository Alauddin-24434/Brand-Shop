import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLink = <>

        <NavLink to={'/'}>HOME</NavLink>
        <NavLink to={'/addProduct'}>ADD PRODUCT</NavLink>
        <NavLink to={'/cart'}>MY CART</NavLink>
        <NavLink to={'/login'}>LOGIN</NavLink>
        <NavLink to={'/signUp'}>SIGN UP</NavLink>

    </>
    return (
        <div className="navbar bg-cyan-500 flex flex-row gap-2 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-8 z-[1]  p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
               <p className="max-sm:hidden">BRAND SHOP</p>
            </div>

            <div className="navbar-end p-4">
               <div className="flex flex-row gap-2">
               {
                    navLink
                }
               </div>
               
                
            </div>
        </div>
    );
};

export default Navbar;
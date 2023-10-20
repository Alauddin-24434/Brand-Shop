import { useContext } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const {authUser,userLogOut}=useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogOut = () => {

        userLogOut()
            .then(() => {
                return navigate('/login')

            })
            .catch()
    }

   
    const navLink = <>

        <NavLink to={'/'}>HOME</NavLink>
        <NavLink to={'/addProduct'}>ADD PRODUCT</NavLink>
        <NavLink to={'/myCart'}>MY CART</NavLink>
        {
            !authUser && <li><NavLink to={'/login'}>LOGIN</NavLink></li>
        }
        
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
                
                <div className="ml-4">
                   {
                        authUser ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar ring ring-primary  ">
                                <div className="w-12 rounded-full">
                                    <img src={authUser.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content  z-[1] shadow bg-[#fda4af] rounded-box w-52">
                                <li className="uppercase">
                                    <a className="justify-between">
                                        {authUser.displayName}

                                    </a>
                                </li>
                              
                                {
                                    authUser ?
                                        <li><NavLink onClick={handleLogOut} to={'/logout'}>LOGOUT</NavLink></li>
                                        :
                                        <li> <Navigate to={'/login'}></Navigate></li>
                                       
                                }
                            </ul>
                        </div>
                            :
                            <li><NavLink to={'/signUp'}>SIGN UP</NavLink></li>
                    }

                   </div>

               </div>
               
                
            </div>
        </div>
    );
};

export default Navbar;
import { useContext } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";





const Navbar = () => {

    const { authUser, userLogOut } = useContext(AuthContext)

    const navigate = useNavigate()
    const handleLogOut = () => {

        userLogOut()
            .then(() => {
                return navigate('/login')

            })
            .catch()
    }


    const navLink = <>
        <li><NavLink to={'/'}>HOME</NavLink></li>
        <li><NavLink to={'/addProduct'}>ADD PRODUCT</NavLink></li>


        <li> <NavLink to={"/myCart"} >MY CART</NavLink></li>


        {
            !authUser && <li><NavLink to={'/login'}>LOGIN</NavLink></li>
        }



    </>
    return (
        <div className="navbar text-white shadow-lg bg-red-400 text-5xl flex  font-semibold ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-sky-400  w-52">
                        {navLink}
                       {
                        authUser && <li><NavLink onClick={handleLogOut} to={'/logout'}>LOGOUT</NavLink></li>
                       }
                    </ul>
                </div>
            </div>

            <div className="navbar hidden justify-between  items-center lg:flex ">

                <ul className="menu menu-horizontal  px-2">


                    {navLink}
                    {
                        authUser?   <div className="ml-4 flex  flex-row items-center gap-4 ">
                        <div className="form-control">
                                 <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                             </div>
                                 {
                                     authUser ? <div className="dropdown dropdown-end">
                                         <label tabIndex={0} className="btn btn-ghost btn-circle avatar ring   ">
                                             <div className="w-12 rounded-full">
                                                 <img src={authUser.photoURL} />
                                             </div>
                                         </label>
                                         <ul tabIndex={0} className="menu menu-sm dropdown-content  z-[1] shadow bg-white text-sky-400 first-letter left-8 h-32 mt-8 w-52">
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
                             :
                             <div className="ml-4 flex  flex-row-reverse items-center gap-4 ">
                             <div className="form-control">
                                      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                                  </div>
                                      {
                                          authUser ? <div className="dropdown dropdown-end">
                                              <label tabIndex={0} className="btn btn-ghost btn-circle avatar ring   ">
                                                  <div className="w-12 rounded-full">
                                                      <img src={authUser.photoURL} />
                                                  </div>
                                              </label>
                                              <ul tabIndex={0} className="menu menu-sm dropdown-content  z-[1] shadow bg-white text-sky-400 first-letter left-8 h-32 mt-8 w-52">
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
          

                    }
                       
                  

                </ul>

            </div>

        </div>


    );
};

export default Navbar;

import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {

    const {userLogin}=useContext(AuthContext)
    const handleSignIn = (event) => {
        event.preventDefault();


        const form=event.target;
     
        const email=form.email.value;
        const password=form.password.value;
      
        console.log(email,password)
        userLogin(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message)
        })


    }
    return (
        <div className="min-h-screen justify-center flex py-8" >
            <div className="w-full lg:w-1/3 py-16 px-12">
                <h2 className="text-3xl mb-4">Register</h2>
                <p className="mb-4">
                    Create your account. It’s free and only take a minute
                </p>
                <form onSubmit={handleSignIn} >
                  
                   
                    <div className="mt-5">
                        <input type="text" name="email" placeholder="Email" className="border border-gray-400 py-1 px-2 w-full" />
                    </div>

                    <div className="mt-5">
                        <input type="password" name="password" placeholder="Password" className="border border-gray-400 py-1 px-2 w-full" />
                    </div>
                 
                    <div className="mt-5">
                        <button className="w-full bg-purple-500 py-3 text-center text-white">Register Now</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;


const SignUp = () => {


    const handleSignUp = (event) => {
        event.preventDefault();


        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const image=form.image.value;
        console.log(name,email,password,image)

    }
    return (

        <div className="min-h-screen justify-center flex py-8" >
            <div className="w-full lg:w-1/3 py-16 px-12">
                <h2 className="text-3xl mb-4">Register</h2>
                <p className="mb-4">
                    Create your account. It’s free and only take a minute
                </p>
                <form onSubmit={handleSignUp} >
                    <div className="gap-5">
                        <input type="text" name="name" placeholder="Name" className="border border-gray-400 py-1 px-2 w-full" />

                    </div>
                    <div className="mt-5">
                        <input type="url" name="image" placeholder="image url" className="border border-gray-400 py-1 px-2 w-full" />
                    </div>
                    <div className="mt-5">
                        <input type="text" name="email" placeholder="Email" className="border border-gray-400 py-1 px-2 w-full" />
                    </div>

                    <div className="mt-5">
                        <input type="password" name="password" placeholder="Password" className="border border-gray-400 py-1 px-2 w-full" />
                    </div>
                    {/* <div className="mt-5">
                        <input type="password" placeholder="Confirm Password" className="border border-gray-400 py-1 px-2 w-full" />
                    </div> */}

                    <div className="mt-5">
                        <button className="w-full bg-purple-500 py-3 text-center text-white">Register Now</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
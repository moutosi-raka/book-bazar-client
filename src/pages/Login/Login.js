import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
    const [data, setDate] = useState('');

    const handleLogin = data =>
    {
        console.log(data);
    }
    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='p-8 shadow-2xl rounded-lg w-1/2'>
                <h2 className='text-4xl font-bold text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            {...register("email", 
                            {required: "Email Address is required"})}
                            placeholder="email" 
                            className="input input-bordered" />
                             {errors.email && <p className='text-red-700' role="alert">{errors.email?.message}</p>}
                    </div>
                    <select className="select select-bordered w-full mt-8"
                     {...register("userType", { required: true })}
                    >
                        <option value='buyer' selected>Buyer</option>
                        <option value='seller'>Seller</option>
                    </select>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", 
                            {required: "password is required",
                             minLength: {value: 6, message: 'password must be 6 characters.'}})} placeholder="password" 
                            className="input input-bordered" />
                            {errors.password && <p className='text-red-700' role="alert">{errors.password?.message}</p>}
                    </div>
                    <input className='w-full btn my-8 text-white' type="submit" value='Login' />
                </form>
                <p className='text-center'>New to Book Bazar? <Link className='text-secondary' to="/signup">Create New Account</Link></p>
                <div className="divider">OR</div>

                     <button className='btn btn-outline w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;
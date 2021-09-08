import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { useForm } from 'react-hook-form'

function Login() {

    const { register, handleSubmit, formState: { errors, isValid }, reset, trigger } = useForm();

    const onSubmit = (e) => {
        console.log(e)
        reset()
    }
    return (
        <div className="container log p-3">
            <h2 className="text-center">Log In</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="group">
                    <label>Email</label>
                    <input className="form-control" type="text" placeholder="Enter Email" {...register("email", { required: "Email is requird", pattern: { value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: "Invalid Eimal" } })} onKeyUp={() => { trigger("email") }} />
                    {errors.email && (<span>{errors.email.message}</span>)}
                </div>

                <div className="group">
                    <label>Password</label>
                    <input className="form-control" type="password" placeholder="Enter Password" {...register("password", { required: "Password is requird" , minLength:{value:7,message:"Password is short"}})} onKeyUp={()=>{trigger("password")}} />
                    {errors.password && (<span>{errors.password.message}</span>)}
                </div>

                <div className="button text-center">
                    <button className="btn" disabled={!isValid}>
                        <Link to="/" className="link">Go</Link>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login

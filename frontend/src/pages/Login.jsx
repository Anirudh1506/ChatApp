import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {

    const [formData,setFormData]=useState({
        username:'',
        password:''
    });

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    async function handleSubmit(e){
        e.preventDefault();
        const res=await fetch("http://localhost:8000/log",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                username:formData.username,
                password:formData.password
            })
        });

        if(res.ok){ alert("Succesful login");
            setFormData({
                username:'',
                password:''
            })
        }
    }
  return (
    <div className="flex flex-col justify-center items-center h-full bg-black">
    <form
        onSubmit={handleSubmit} 
       className="flex flex-col bg-purple-700 p-6 rounded-3xl shadow-md w-96 h-1/2 space-y-4">
      <h1 className="text-2xl font-bold text-white mb-4 text-center">Login</h1>
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-bold text-white">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="px-3 py-2 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your username"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-bold text-white">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="px-3 py-2 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
        />
      </div>
      <input
        type="submit"
        value="LOGIN"
        className="py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-purple-900 transition duration-300 cursor-pointer"
      />

      <h3 className='text-white font-bold ml-5'>Don't have an Account yet! <Link to='/register' className='underline hover:text-blue-800'>Create here</Link></h3>
    </form>
  </div>
  
  )
}

export default Login
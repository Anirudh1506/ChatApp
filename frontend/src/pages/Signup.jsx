import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
    const nav=useNavigate();
    const [formData,setFormData]=useState({
        name:'',
        username:'',
        email:'',
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
        const res=await fetch("http://localhost:8000/add",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name:formData.name,
                username:formData.username,
                email:formData.email,
                password:formData.password
            })
        });

        if(res.ok){
            nav("/login")
        }

        setFormData({
            name:'',
            username:'',
            email:'',
            password:''
        })
    }
  return (
    <div className="flex flex-col justify-center items-center h-full bg-black">
      <form
        onSubmit={handleSubmit} 
        className="flex flex-col bg-purple-700 p-6 rounded-3xl shadow-md w-96 h-auto space-y-4">
        <h1 className="text-2xl font-bold text-white mb-4 text-center">Sign Up</h1>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-bold text-white">Full Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            className="px-3 py-2 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-bold text-white">Username</label>
          <input
            name='username'
            type="text"
            value={formData.username}
            onChange={handleChange}
            className="px-3 py-2 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-bold text-white">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="px-3 py-2 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-bold text-white">Password</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="px-3 py-2 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>

        <input
          type="submit"
          value="SIGN UP"
          className="py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-purple-900 transition duration-300 cursor-pointer"
        />

<h3 className='text-white font-bold ml-10'>Account already created! <Link to='/login' className='underline hover:text-blue-800'>Login</Link></h3>
      </form>
    </div>
  );
};

export default Signup;

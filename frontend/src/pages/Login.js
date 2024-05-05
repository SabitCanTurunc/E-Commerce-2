import React, { useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye,FaEyeSlash  } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Login = () => {
    const [showPassword,setShowPassword]=useState(false);
    const [data,setData] = useState({
        email:"",
        password:"",
    })

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setData((preve)=>({
           ...preve,
            [name]:value
        }))
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("data login:",data);
        
    }

    

  return (
    <section id='login'>
      <div className='mx-auto container p-4 '>

        <div className='bg-white p-4 py-5 w-full   mx-auto max-w-sm rounded-2xl '>
            <div className='w-20 h-20 mx-auto'>
                <img className='rounded-full' src={loginIcons} alt='login icon'></img>
            </div>

            <form className='pt-6' onSubmit={handleSubmit}>
                <div className=''>
                    <label>Email:</label>
                    <div className='bg-slate-200 p-2 rounded-md'>
                        <input 
                            type='email' 
                            placeholder='Enter email'  
                            name='email'
                            value={data.email}
                            onChange={handleChange}
                            className=' w-full h-full outline-none bg-transparent' />
                    </div>            
                </div>

                <div className=''> 
                    <label>Password:</label>
                    <div className='bg-slate-200 p-2 rounded-md flex'>
                        <input 
                            type={showPassword ? "text":"password"} 
                            placeholder='Enter Password' 
                            name='password'
                            value={data.password}
                            onChange={handleChange}
                            className='w-full h-full outline-none bg-transparent' />

                            
                        <div className='cursor-pointer text-xl'  onClick={()=>setShowPassword((preve)=>!preve)}>
                            <span>
                                {
                                    showPassword ? (
                                        <FaEyeSlash />
                                    ):
                                    (
                                        <FaEye />
                                    )
                                }
                            
                            </span>
                        </div>
        
                    </div>
                    <Link to={"/forgot-password"} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                        Forgot password ?
                    </Link>
                </div>
                <button className='bg-red-600 hover:bg-red-700 mt-4  text-white w-full px-5 py-2 w-full max-w-[180px] rounded-full hover:scale-110 transition-all mx-auto block'>Login</button>

                
            </form>
            <p className='my-5'>Don't have account ?  
                <Link to={"/sign-up"} className='text-red-600 hover:text-red-700 hover:underline'>Sign Up</Link>
            </p>


        </div>
      
      
      
      </div>
    </section>
  )
}

export default Login

import React, { useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye,FaEyeSlash  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import imageTobase64 from  '../helpers/imageTobase64'


const SignUP = () => {
    const [showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false)
    const [data,setData] = useState({
        email:"",
        password:"",
        name:"",
        confirmPassword:"",
        profilePic:"",
    })

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setData((preve)=>({
           ...preve,
            [name]:value
        }))
    }
    const handleUploadPic = async(e)=>{
      const file = e.target.files[0];
      const imagePic= await imageTobase64(file)
      setData((preve)=>{
        return{
          ...preve,
          profilePic: imagePic
        }
      })
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("data login:",data);
        
    }
  return (
    <section id='signup'>
      <div className='mx-auto container p-4 '>

        <div className='bg-white p-4 py-5 w-full   mx-auto max-w-sm rounded-2xl '>
            <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
              <div>
                <img className='rounded-full' src={data.profilePic || loginIcons} alt='login icon'></img>
              </div>
              <form>
                <label>
                  <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-1 cursor-pointer text-center absolute bottom-0 w-full'>
                    Upload Photo
                  </div>
                  <input type="file" className='hidden' onChange={handleUploadPic}/>
                </label>
              
              </form>
            </div>

            <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                
              <div className='grid'>
                    <label>Name:</label>
                    <div className='bg-slate-200 p-2 rounded-md'>
                        <input 
                            type='text' 
                            placeholder='Enter your name'  
                            name='name'
                            value={data.name}
                            onChange={handleChange}
                            required
                            className=' w-full h-full outline-none bg-transparent' />
                    </div>            
                </div>
                
                <div className='grid'>
                    <label>Email:</label>
                    <div className='bg-slate-200 p-2 rounded-md'>
                        <input 
                            type='email' 
                            placeholder='Enter email'  
                            name='email'
                            value={data.email}
                            onChange={handleChange}
                            required
                            className=' w-full h-full outline-none bg-transparent' />
                    </div>            
                </div>

                <div className='grid'> 
                    <label>Password:</label>
                    <div className='bg-slate-200 p-2 rounded-md flex'>
                        <input 
                            type={showPassword ? "text":"password"} 
                            placeholder='Enter Password' 
                            name='password'
                            value={data.password}
                            onChange={handleChange}
                            required
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
                    
                </div>

                <div className='grid'> 
                    <label>Confirm Password:</label>
                    <div className='bg-slate-200 p-2 rounded-md flex'>
                        <input 
                            type={showConfirmPassword ? "text":"password"} 
                            placeholder='Enter Confirm Password' 
                            name='confirmpassword'
                            value={data.confirmPassword}
                            onChange={handleChange}
                            required
                            className='w-full h-full outline-none bg-transparent' />

                            
                        <div className='cursor-pointer text-xl'  onClick={()=>setShowConfirmPassword((preve)=>!preve)}>
                            <span>
                                {
                                    showConfirmPassword ? (
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
                <button className='bg-red-600 hover:bg-red-700 mt-4  text-white px-5 py-2 w-full max-w-[180px] rounded-full hover:scale-110 transition-all mx-auto block'>SignUp</button>

                
            </form>
            <p className='my-5  '>Already have account ?  
                <Link to={"/login"} className='px-2 text-red-600 hover:text-red-700 hover:underline'>Login</Link>
            </p>


        </div>
      
      
      
      </div>
    </section>
  )
}

export default SignUP

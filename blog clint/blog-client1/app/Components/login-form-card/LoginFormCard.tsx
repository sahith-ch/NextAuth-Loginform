 "use client"
// import React from 'react'
// import Styles from "../../Login/Loginipage.module.css"
// import {  signIn } from '@/auth'
// import { Router, useRouter } from 'next/router'

// interface Props {}

// async function LoginFormCard(props: Props) {
//     const {} = props
//  const router = useRouter()
//     return (
//         <form onSubmit={(formData)=>{


  

// try{
//     signIn("credentials",  {
   
//         username:"kl",
//         password:"password",
//             redirect:false
//     })
//  router

// //const data= await axios.post("http://localhost:3000/api/auth/",payload)
        
// }catch(e){
//     console.log(e)
// }
//     }}>

//     <h1 className='text-white text-4xl'>Login</h1>
//    <div className={Styles.newUser}>
//     <input name='username'  placeholder='Username' className={Styles.inputfield}/>
// <input  name='password' placeholder='Password' className={Styles.inputfield}/>
// <button type='submit' className='text-cyan-50'>Login</button>
//  {/* <Glowbutton onClick={loginhandler} text={"Login"}/>  */}
//     </div>

//         </form>

//     )
// }

// export default LoginFormCard
 
import React from 'react';
import Styles from "../../Login/Loginipage.module.css";
import { signIn } from 'next-auth/react'; // Import signIn from next-auth/react

function LoginFormCard() {
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const formData = new FormData(event.currentTarget); // Get the form data
        
        try {
            const result = await signIn("credentials", {
                redirect: false, // Prevent automatic redirect
                username: formData.get("username"), // Get username from form data
                password: formData.get("password"), // Get password from form data
            });

            if (result?.error) {
                // Handle login error
                console.log("Error:", result.error);
            } else if (result?.ok) {
                // Redirect to home on successful login
                window.location.href = "/Home";
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 className='text-white text-4xl'>Login</h1>
            <div className={Styles.newUser}>
                <input name='username' placeholder='Username' className={Styles.inputfield} required />
                <input name='password' type='password' placeholder='Password' className={Styles.inputfield} required />
                <button type='submit' className='text-cyan-50'>Login</button>
            </div>
        </form>
    );
}

export default LoginFormCard;

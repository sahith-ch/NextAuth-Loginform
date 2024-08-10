
import Link from 'next/link'
import React from 'react'
import useRouter  from 'next/navigation'
import { usePathname } from 'next/navigation';
import { getSession, useSession } from 'next-auth/react';
import { auth } from "@/auth"
interface Props {}

async function Navbar (props: any) {
    
    const session = await auth()
// if(session.data?.user){
// return(<></>)
// } 
if(session){

    return (
        
        <div className=' flex w-full justify-between items-center bg-black  p-2'>
            <Link href='/' className='text-cyan-400 text-2xl'>Logo</Link>
            <div className='flex items-center justify-around'>
 
                <Link className='flex justify-around  mx-2 p-3 hover:bg-cyan-400  rounded-2xl hover:text-black text-cyan-500' href='/Profile' >
                Profile
                </Link>
                <Link className='flex justify-around  mx-2 p-3 hover:bg-cyan-400  rounded-2xl hover:text-black text-cyan-500' href='/write' >
                Write
                </Link>               

            </div>
        </div>


    )
}
else{
    return (
        
        <div className=' flex w-full justify-between items-center bg-black  p-2'>
            <Link href='/' className='text-cyan-400 text-2xl'>Logo</Link>
            <div className='flex items-center justify-around'>                    
                    <Link className='flex justify-around  mx-2 p-3 hover:bg-cyan-400  rounded-2xl hover:text-black text-cyan-500' href='/Signup' >
                Signup
                </Link>
                <Link className='flex justify-around  mx-2 p-3 hover:bg-cyan-400  rounded-2xl hover:text-black text-cyan-500' href='/Login' >
                Login
                </Link>
               

            </div>
        </div>


    )

}
}

export default Navbar


import { signOut } from '@/auth'
import { redirect } from 'next/dist/server/api-utils'
import React from 'react'

interface Props {
    coures:[]
}

async function Profile(props:any) {

    return (
        <div>
            <form action={async()=>{
                "use server"
                console.log("logged out")
                await signOut({redirectTo:"/Login"})
               
                console.log("logged out")
                }}>
            <button type="submit" className='flex justify-around  mx-2 p-3 hover:bg-cyan-400  rounded-2xl hover:text-black text-cyan-500' >Logout </button>

            </form>
        </div>
    )
}

export default Profile

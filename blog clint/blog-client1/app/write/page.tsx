"use server"
import React from 'react'

import Styles from "./writepage.module.css"
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
interface Props {}
const Editor = dynamic(()=>import('../utils/editor'),{ssr:false})
async function Page(props: Props) {
    const {} = props
const session = await auth();
    return (
    
        <div className={Styles.container}>
     
         <Editor session={session} />
        
        <Link href={"/publish"}>
        <button className='flex justify-around  mx-2 p-3 hover:bg-cyan-400  rounded-2xl hover:text-black text-cyan-500' >Publish </button>
        
        </Link>
     
        </div>
        
    
    )
}

export default Page

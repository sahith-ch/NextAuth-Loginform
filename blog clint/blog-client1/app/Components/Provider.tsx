
import { SessionProvider } from "next-auth/react"
import { AppProps } from 'next/app'
import React, { FC, ReactNode } from 'react'

interface Props {
children:ReactNode

}

const Provider:FC<Props> =({children})=>{
    

    return (
<SessionProvider>
{children}
</SessionProvider>
    )
}

export default Provider

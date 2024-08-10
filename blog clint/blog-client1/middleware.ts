import { usePathname } from 'next/navigation';
import  { auth  } from "@/auth"
const authroutes = [
    "/Login",
    "/Signup"
]

export default auth((req:any)=>{
    const {nextUrl} = req
    const isLogged  = !!req.auth
const isAuthroute  = authroutes.includes(nextUrl.pathname)
const isapiroutes = nextUrl.pathname.includes("/api/auth")

if(isapiroutes){
return null
 }
if(isAuthroute){
    if(isLogged){
        return Response.redirect(new URL("/Home",nextUrl))
    }
    return null;
}
if(!isLogged&&nextUrl.pathname!=="/"){
return Response.redirect(new URL("/Login",nextUrl))


}

})

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  }
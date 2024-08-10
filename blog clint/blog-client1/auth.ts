
import NextAuth from "next-auth"
import Google from 'next-auth/providers/google';
import Credentials from "next-auth/providers/credentials";
import axios from "axios";
export const { handlers, signIn, signOut, auth } = NextAuth({
  pages:{
    signIn:"/Login"
  },
  providers: [
    Google,
    Credentials({
      async authorize(Credentials){
        // Authenticate user and get token (this is just an example)
        const res = await axios.post('http://localhost:3001/users/login', Credentials);
        const token = res.data.message;
       
       if(token){
        console.log("token",token)
        return Credentials
       }
       else{
        return null
       }
      }
    })
 

  ],




})
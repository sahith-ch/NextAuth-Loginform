// import { Session } from "inspector";
// import { NextAuthOptions } from "next-auth";

// import NextAuth from "next-auth/next";
// import Google from "next-auth/providers/google";
// import GitHubProvider from "next-auth/providers/github";

//   import GoogleProvider from "next-auth/providers/google";
// import { Provider } from "next-auth/providers/index";

// // interface nextauthoptions{
// //     provider:Provider[],
// //     secret:string|undefined,
// //     session:{ strategy: string; maxAge: number; },
// //     jwt:{
// //         encription:boolean
// //     }
// // }

// export const authOptions:NextAuthOptions={
// providers: [
//   GoogleProvider({
//     clientId: process.env.NEXT_GOOGLE_CILENT_ID?process.env.NEXT_GOOGLE_CILENT_ID:"",
//     clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET?process.env.NEXT_GOOGLE_CLIENT_SECRET:""
//   }),
//   GitHubProvider({
//     clientId: process.env.GITHUB_ID? process.env.GITHUB_ID:"",
//     clientSecret: process.env.GITHUB_SECRET?process.env.GITHUB_SECRET:""
//   })
// ]as Provider[],

// secret:process.env.NEXT_AUTH_SECRET,


// }
// const handler =  NextAuth(authOptions);
// export {handler as GET,handler as POST} 


import { handlers } from '@/auth';
export const { GET, POST } = handlers


import {serialize} from 'cookie';
import axios from 'axios';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req:NExtRequest) {
  try {
    const body = await req.json();
    const { username, password } = body;

    
    if (token === 'user not found') {
      return NextResponse.json({ message: 'user not found' }, { status: 200 });
    }


    if (token) {
    // console.log("hello")
    //   // Set the token in an HTTP-only cookie
    //   const serialized = serialize('OutSiteJWT', token, {
    //     httpOnly: true,
    //     secure: process.env.NODE_ENV !== 'development', // Ensure it's set to true in production

    //     maxAge: 60 * 60 * 24 * 7, // 1 week
    //     sameSite: 'lax',
    //     path: '/', // Make sure the path is set to '/'
    //   });
// console.log("serialize",serialized)

const response = NextResponse.json({
  message:"logged in",
  success:true
})
response.cookies.set("token",token,{
  httpOnly:true,
  secure:false
})
return response
//  return new Response(JSON.stringify( {
//   message:"authenticated",
// }
// ),{
//   status:200,
//   headers:{'Set-Cookie':"hellow"}
//  })


    } 
else {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 200 });
    }
  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 200 });
  }
}
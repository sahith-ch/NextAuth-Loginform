
import { Inter } from "next/font/google";
import "./globals.css";
import type { AppProps } from "next/app"
import Navbar from "./Components/Navbar/Navbar";
import Provider from "./Components/Provider";



const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({  children}: Readonly<{children: React.ReactNode;}>) {
  
  return (
    <html lang="en">
      
      <body className={inter.className}>
 
   <div className=""  >
   <Provider>
        <Navbar/>
      
       {children} 
       </Provider>
     
        


    
        <div className="w-full bg-white p-3 ">Footer</div>
 
  
      </div>  


        
        </body>
    </html>
  );
}

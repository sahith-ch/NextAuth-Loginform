"use server"
import { url } from 'inspector';
import Glowbutton from '../Components/Glowbutton'
import  Styles from "./Loginipage.module.css"
import { signIn } from "@/auth"


import LoginFormCard from '../Components/login-form-card/LoginFormCard';
import Socials from '../Components/Socials/Socials';

interface Props {}

function Login(props: Props) {
    


    return (
      <div>
        <main className={Styles.container}>
        <div className={Styles.wrapper}>
<LoginFormCard/>
<h1 className={Styles.authdivider}><span>OR</span></h1>
<Socials/>


</div>

</main>
      </div>
        
    )
}

export default Login

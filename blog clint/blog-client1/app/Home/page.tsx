import React from 'react'
import Styles from "./Home.module.css"
import Card from '../Components/Card/Card'
import Trending from '../Components/Trending/Trending'
import Link from 'next/link'
import Search from '../Components/Search/Search'
interface Props {}

function Home(props: Props) {
    const {} = props

    return (
        <div className={Styles.container}>
            <div className={Styles.latest}>
            <div className='flex justify-center items-centerbg-black  w-full'>
<Search/>
</div>

                <Card/>
                <Card/>
                <Card/>
            <Card/>
            <Card/>
                <Card/>
                <Card/>
            <Card/>
            <Card/>
                <Card/>
                <Card/>
            <Card/>
            <Card/>
                <Card/>
                <Card/>
            <Card/>
                

            </div>

<div className={Styles.trending}>
<div className={'flex flex-col  h-96 box-border m-3 w-11/12 '&&Styles.cardContainer} >
    <Trending title = {'5 amazing new JavaScript features in ES15 (2024) '} /> 
    <Trending title = {'5 amazing new JavaScript features in ES15 (2024) '} /> 
    <Trending title = {'5 amazing new JavaScript features in ES15 (2024) '} /> 
    <Link href='/trending'>
    <p className='flex font-bold text-green-400 justify-center items-center'>Sell all</p>
    
    </Link>
    </div>
<p>Followed by you</p>
<div className={'flex flex-col  h-96 box-border m-3 w-11/12 '&&Styles.cardContainer} >
    <Trending title = {'5 amazing new JavaScript features in ES15 (2024) '} /> 
    <Trending title = {'5 amazing new JavaScript features in ES15 (2024) '} /> 
    <Trending title = {'5 amazing new JavaScript features in ES15 (2024) '} /> 
    <Link href='/trending'>
    <p className='flex font-bold text-green-400 justify-center items-center'>Sell all</p>
    
    </Link>
    </div>
</div>



        </div>
    )
}

export default Home

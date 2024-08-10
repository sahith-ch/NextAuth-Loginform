import React from 'react'
import Styles from "./publish.module.css"
interface Props {}

function Page(props: Props) {
    const {} = props

    return (
        <div className={Styles.container}>
<div className={Styles.wrapper}>
<div className={Styles.previewContainer}>
    <div className={Styles.ImageContainer}>image preview</div>
<div className={Styles.Description}>
    <input type="text" className='w-full p-2' placeholder='Description' />
    </div>
    
    </div>
     <div className={Styles.Category}>
        
        <input  className='w-full outline-none border-b-2 border-black p-2' type="text" placeholder='Category/tag' />
     <button className='bg-green-600 p-3 m-3  '>Publish</button>
     </div>
        </div>
        </div>
    )
}

export default Page

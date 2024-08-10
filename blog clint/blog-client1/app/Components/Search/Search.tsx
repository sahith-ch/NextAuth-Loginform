import React from 'react'
import Styles from "./Search.module.css"
interface Props {}

function Search(props: Props) {
    const {} = props

    return (
        <div className={Styles.container}>
            <input className={Styles.Search} placeholder='Search'/>
        </div>
    )
}

export default Search

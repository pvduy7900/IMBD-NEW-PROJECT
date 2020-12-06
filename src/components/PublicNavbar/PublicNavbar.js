import React from 'react'
import "./PublicNavbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const PublicNavbar = ({ genreList,handleClickGenre }) => {
    return (
        <div>
            <div className="nav-container">
                <div className="nav-left" ><a href="/">D MOVIE</a></div>
                <div className="nav-right">
                    <ul>
                        <li key="1"><a href="/">HOME</a></li>
                        <li key="2"><a href="/">ABOUT</a></li>
                        <li key="3"><a href="/">MOST POPULAR</a></li>
                        <li key="4"><a href="/">UPCOMING</a></li>
                        <li key="5"><a href="/">CONTACTS</a></li>
                        <li key="6"><span><FontAwesomeIcon className="icon" icon={faSearch} /></span></li>
                    </ul>
                </div>
            </div>
            {/* <div className="nav-container-2">
                <ul>
                    {genreList.map((item) => {
                        <li key={item.id}>
                            <a onClick={()=>handleClickGenre(item.id)} >{item.name}</a>
                        </li>
                    })}
                </ul>
            </div> */}
        </div>
    )
}

export default PublicNavbar

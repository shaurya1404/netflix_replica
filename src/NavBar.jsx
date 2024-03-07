import { useEffect, useState } from 'react'
import './NavBar.css'

function Navbar() {
    const [show, handleShow] = useState(false); // initializing show state variable to add effects to navbar

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } 
        else handleShow(false)
    }
    useEffect(() => { 
        window.addEventListener('scroll', transitionNavbar); // listen to eventListener scroll and trigger transitionNavbar everytime event occurs 
        return () => removeEventListener('scroll', transitionNavbar)
    }, [])

    return (
        <div className={`navbar ${show && 'nav_black'}`}> {/*navbar bg color set to black only if show variable is true*/}
            <div className="navbar_container">
                <img className="navbar_logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt=""></img>
                <img className="navbar_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                
            </div>
        </div>
    )
}

export default Navbar
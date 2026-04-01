import { Close, MenuOutlined } from '@material-ui/icons'
import TransitionLink from './TransitionLink'
import React,{useState} from 'react'
import './styles/Navbar.css'

const Navbar = () => {

    const [active,setActive] = useState(false)

    const showUl = () => {
        setActive(!active)
    }

    return (
        <div className='navbar'>
                <div className="navbar__logo">
                    {/* <img src={moon} alt="" /> */}
                </div>
                <div className="menu_icon">
                    <MenuOutlined className='menu' onClick={showUl}/>
                </div>
                <nav>
                    <ul className={active ? 'list__items active' : 'list__items'}>
                        <div className="close_icon">
                            <Close className='close' onClick={showUl}/>
                        </div>
                        <li  class="home__icon"><TransitionLink to= '/'><h1>angela loh</h1></TransitionLink></li>
                        <li><TransitionLink to='/aboutme'>About Me</TransitionLink></li>
                        <li><TransitionLink to='/bookshelf'>Bookshelf</TransitionLink></li>
                        <li><TransitionLink to='/thoughts'>Thoughts</TransitionLink></li>
                        <li><TransitionLink to='/photography'>Photography</TransitionLink></li>
                        <li><TransitionLink to='/projects'>Projects</TransitionLink></li>
                    </ul>
                </nav>
        </div>
    )
}

export default Navbar

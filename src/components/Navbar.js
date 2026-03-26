import { Close, MenuOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'
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
                        <li  class="home__icon"><Link to= '/'><h1>angela loh</h1></Link></li>
                        <li><Link to='/aboutme'>About Me</Link></li>
                        <li><Link to='/bookshelf'>Bookshelf</Link></li>
                        <li><Link to='/thoughts'>Thoughts</Link></li>
                        <li><Link to='/photography'>Photography</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                    </ul>
                </nav>
        </div>
    )
}

export default Navbar

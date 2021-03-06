import React from 'react'
import './HeaderStyles.scss'
import {Link} from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = () => {
    return (
        <div className="header">
            <Link className='logoContainer' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>

            </div>
        </div>
    )
}

export default Header

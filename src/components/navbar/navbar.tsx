import { ModeToggle } from '../modetog/modetog'
import { PageButton } from '../pagebutton/pagebutton'
import Link from 'next/link'
import './navbar.modules.css'

export default function Navbar () {
    return (
        <>
        <div className='main-nav'>
            <div className='nav-title-bar'>
                <ul className='nav-list-above'>
                    <li className='nav-mode-toggler'><ModeToggle /></li>
                    <li className='nav-page-button'><PageButton /></li>
                    <li className='nav-heading'><Link href={"/"}>CodeSol</Link></li>
                </ul>
            </div>
            <hr className='horizontal-rule'/>
        </div>
        </>
    )
}
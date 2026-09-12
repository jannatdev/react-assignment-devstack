import { GiHamburgerMenu } from 'react-icons/gi'
import Logo from '../assets/logo-text.png'

export interface NavbarProps {
    prop: string
}

export default function Navbar({ prop }: NavbarProps) {
    
    return (
        <div className='container mx-auto sticky top-0 z-50 bg-white shadow-md'>
            <nav className='flex justify-between gap-7 items-center'> 
             <span className='block ml-4 md:hidden '><GiHamburgerMenu /></span>   
            <img src={Logo} alt="" />
            <ul className=' hidden md:flex justify-between gap-6 items-center '>
                <li><a className='text-[#DB2777] text-[14px] font-medium' href="">Home</a></li>
                <li><a className='text-[#475569] text-[14px] font-medium' href="">Technologies</a></li>
                <li><a className='text-[#475569] text-[14px] font-medium' href="">Projects</a></li>
                <li><a className='text-[#475569] text-[14px] font-medium' href="">About</a></li>
                <li><a className='text-[#475569] text-[14px] font-medium' href="">Contact</a></li>
            </ul>

            <div className='flex gap-4 items-center'>
                <button className='text-[#334155] text-[14px] font-medium sm:text-[12px] md:text-[12px]'>Sign In</button>
                <button className='text-white text-[14px] font-medium bg-[#D91B7E] rounded-xl py-2 px-5 sm:text-[12px] md:text-[12px]'>Sign UP</button>
            </div>
        </nav>
        </div>
        
    )
}
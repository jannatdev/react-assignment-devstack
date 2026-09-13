import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Logo from '../assets/logo-text.png'
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
    return (
        <div>
            <div className='container mx-auto mt-20 grid md:grid-cols-4 gap-6'>
                <div className='spacey-2 text-center md:text-left'>
                    <img src={Logo} alt="" className='w-30 h-auto mx-auto md:ml-0' />
                    <p className='text-[12px] text-[#64748B] mx-auto md:text-left '>Curated tools, technologies, and resources for developers building modern software.</p>
                    <span className='text-[#EC4899] flex gap-2.5 ml-55 mt-4  md:ml-0 '><FaGithub/> <IoLogoTwitter /> <FaLinkedin /></span>
                </div>
                <div className='hidden md:block'>
                    <h2 className='Text-[16px] font-semibold text-[#0F172A]'>PRODUCT</h2>
                    <ul > 
                        <li><a className='text-[12px] text-[#64748B]' href="">Home</a></li>
                        <li><a className='text-[12px] text-[#64748B]' href="">Technologies</a></li>
                        <li><a className='text-[12px] text-[#64748B]' href="">Projects</a></li>
                        
                    </ul>
                </div>
                <div className='hidden md:block'>
                    <h2 className='Text-[16px] font-semibold text-[#0F172A]'>COMPANY</h2>
                    <ul>
                        <li><a className='text-[12px] text-[#64748B]' href="">About</a></li>
                        <li><a className='text-[12px] text-[#64748B]' href="">Contact</a></li>
                        <li><a className='text-[12px] text-[#64748B]' href="">Careers</a></li>
                        
                    </ul>
                </div>
                <div className='hidden md:block'>
                     <h2 className='Text-[16px] font-semibold text-[#0F172A]'>LEGAL</h2>
                    <ul>
                        <li><a className='text-[12px] text-[#64748B]' href="">Privacy Policy</a></li>
                        <li><a className='text-[12px] text-[#64748B]' href="">Terms of Service</a></li>
                       
                        
                    </ul>
                </div>
            </div>
            <div className='flex justify-between container px-5 md:px-0 mx-auto mt-10'>
                <p className='text-[10px] text-=[#94A3B8]'>© 2026 Dev Stack. All rights reserved.</p>
                <div className='flex gap-2'>
                    <p className='text-[10px] text-=[#94A3B8]' >Privacy</p>
                    <p className='text-[10px] text-=[#94A3B8]' >Link</p>
                </div>
            </div>
            
            
        </div>
    )
};

export default Footer;
import BannerImage from '../assets/banner-stack.png'



export interface BannerProps {
    prop: string
}

export default function Banner({ prop }: BannerProps) {
    
    return (
        <div>
            
            <header className='grid justify-center md:flex md:justify-between md:items-center container mx-auto'>
                <div>
                    <div className='w-80%]'>
                        <h1 className=' text-[45px] text-center md:text-[45px] lg:text-[60px] md:text-left font-bold  leading-17.5'>Build Your Ideal <span className=' bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span> </h1>
                        <p className='text-center md:text-left text-[14px] md:text-[16px] text-[#475569] mt-4'>Explore frontend, backend, database, and tooling options, <br />compare them side by side,
                              and put together the stack that fits your next project.</p>
                    </div >
                    <div className='my-6 text-center md:text-left'>
                         <button className='btn text-white text-[14px] font-medium  rounded-xl py-1.5 px-5 text-[14px] '>Explore Technologies</button>
                        <button className='text-[#334155] text-[14px] font-medium border border-gray-300 rounded-xl py-1.5 px-6 ml-2'>Learn More</button>
                    </div>
                       
                        
                
                </div>
                <div>
                    <img src= {BannerImage} alt="" className='mr-20' />
                </div>
            </header>
           
            
        </div>
    )
}
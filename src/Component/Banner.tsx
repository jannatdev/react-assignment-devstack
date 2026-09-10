import BannerImage from '../assets/banner-stack.png'



export interface BannerProps {
    prop: string
}

export default function Banner({ prop }: BannerProps) {
    
    return (
        <div>
            
            <header className='grid md:flex justify-between items-center container mx-20'>
                <div>
                    <div className='w-[80%] '>
                        <h1 className='text-[60px] font-bold  leading-17.5'>Build Your Ideal <span className='bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span> </h1>
                        <p className='text-=[18px] text-[#475569] mt-4'>Explore frontend, backend, database, and tooling options, <br />compare them side by side,
                              and put together the stack that fits your next project.</p>
                    </div>
                    
                        <button>Explore Technologies</button>
                        <button>Learn More</button>
                
                </div>
                <div>
                    <img src= {BannerImage} alt="" />
                </div>
            </header>
           
            
        </div>
    )
}
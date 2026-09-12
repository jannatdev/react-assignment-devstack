import { use, useState } from "react"
import type { TechnologyType } from "../type"
import AvaiableTechnologies from "./AvaiableTechnologies"
import StuckTechnologies from "./StuckTechnologies"

export interface TechnologiesProps {
    technologiesPromise: Promise<TechnologyType[]>
}

export default function Technologies({technologiesPromise}: TechnologiesProps) {
    const technologies=use(technologiesPromise)
    

    const [stuckTechnolgies,setStuckTechnologies]=useState<TechnologyType[]>([]);
    
    
    const[count,setCount]=useState(0)

    const handleRemoveButton=()=>{

        setStuckTechnologies([]);
          setCount(0);
         
          }
          
        
  
    return (
       <div>
           <div className="container mx-auto text-center md:text-left">
                <h2 className="text-[36px] font-bold">Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span> </h2>
                <p>Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="grid  md:grid-cols-12 gap-5 container mx-auto mt-10">
                <div className=" col-span-12 md:col-span-9 ">
                       
                  <AvaiableTechnologies technologies={technologies} count={count} setCount={setCount} stuckTechnolgies={stuckTechnolgies} setStuckTechnologies={setStuckTechnologies} />


                </div> 
                <div className="col-span-12 mx-6 md:col-span-3 md:mx-0 ">

                     <div className="grid justify-center items-center space-y-2 border border-gray-200 p-4 rounded-xl">
                        <h2 className="text-[18px] font-bold text-[#0F172A]">Your Stuck</h2>
                       
                        <p className="text-[16px]  text-[#94A3B8]">
                           {stuckTechnolgies.length===0?(<>No Technology Selected</>):(<>{count} selected technology</>)} </p> <br />

                            <StuckTechnologies  technologies={ technologies}  count={count} setCount={setCount} stuckTechnolgies={stuckTechnolgies} setStuckTechnologies={setStuckTechnologies}/>

                        <button 
                        onClick={handleRemoveButton}
                        className="border border- text-[12px]  text-[#94A3B8] border-gray-300 py-2.5 px-8 rounded-xl mt-4">{stuckTechnolgies.length===0?(<>Your Stuck is Empty</>):(<><span className="text-red-500">Remove All</span></>)} </button>
                       </div>
                   
                    
                 </div> 
             
           
            </div> 
               
          
     </div>
    )
    
   }

import type { TechnologyType } from "../type"
import { FaStar } from "react-icons/fa"
import { useState, type Dispatch, type SetStateAction } from "react";
import { FaCheck } from "react-icons/fa6";
import { Bounce, toast } from "react-toastify";

export interface TechnolgyCardsProps {
    technology:TechnologyType
    count:number
    
    setCount:Dispatch<SetStateAction<number>>
    stuckTechnolgies:TechnologyType[]
    setStuckTechnologies:Dispatch<SetStateAction<TechnologyType[]>>
}

export default function TechnolgyCards({technology,count,setCount,stuckTechnolgies,setStuckTechnologies}: TechnolgyCardsProps) {

    
    const isStack =stuckTechnolgies.some((stuckTechnolgy)=> stuckTechnolgy.technologyName===technology.technologyName);
       
         
    const handleStackButton=()=>{
       
        const newCount=count+1;
        if(newCount>0){
            setCount(newCount);
            // toast.success(`${technology.technologyName} is added`)
            toast(`${technology.technologyName} is added`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
         
         } 
         if (isStack){
         return ;

        }
       
      setStuckTechnologies([...stuckTechnolgies,technology])
    }
    
    
    return(
        <div className={`grid p-4 space-y-4 border ${!isStack?" border-gray-200 rounded-xl":"border-gray-500 rounded-xl"}`}>
           
            <div className="flex justify-between items-baseline">
                <img src={technology.technologyIcon} alt="" className="w-[8%] h-auto" />
                <button className="bg-[#E0F2FE] text-[10px] text-[#0284C7] py-1 px-2 rounded-lg">{technology.button}</button>
            </div>
            <div>
                 <h2 className="text-[18px] text-[#0F172A] font-bold">{technology.technologyName}</h2>
                 <p className="text-[#64748B] text-[12px]">{technology.description}</p>
            </div>

            <div className="flex justify-between items-center mt-4">
                <p className="text-[10px] text-[#475569]">{technology.technologyType}</p>
                <p className="text-[10px] text-[#475569]">{technology.serviceType}</p>
                <div className="flex gap-1 items-center">
                  <span className="text-yellow-500 text-[12px]"><FaStar /></span>
                   <p className="text-[10px] text-[#334155] font-semibold">{technology.rating}</p>
                </div>
               
            </div>
            <button
            onClick={()=>handleStackButton()} 
            disabled={isStack}
            className= {`${!isStack?"bg-black text-white":"text-[#EC4899] bg-[#f5dbe8]"}  text-[12px] font-semibold mt-2 py-2 px-6 rounded-2xl flex justify-center items-center gap-1.5 disabled:cursor-not-allowed disabled:opacity-75 `}>{!isStack?(<>Add to Stack</>):<><span className="text-[#EC4899] ">
                <FaCheck /></span> Added to stack</>}</button>
           
           
          
          </div>  
        
    )
}
import {  type Dispatch, type SetStateAction } from "react"
import type { TechnologyType } from "../type"
import { RxCross2 } from "react-icons/rx"
import { Bounce, toast } from "react-toastify"

export interface StuckTechnologiesProps {
    technologies: TechnologyType[],
    count:number, 
    setCount:Dispatch<SetStateAction<number>>,
    stuckTechnolgies:TechnologyType[],
   setStuckTechnologies:Dispatch<SetStateAction<TechnologyType[]>>
    
}

export default function StuckTechnologies({ technologies,count,setCount,stuckTechnolgies,setStuckTechnologies }: StuckTechnologiesProps) {
     
      const handleDeleteTechnology =(technology:TechnologyType)=>{
        const restTechnologies= stuckTechnolgies.filter((stuckTechnolgy)=> stuckTechnolgy.name !== technology.name)
          setStuckTechnologies(restTechnologies);

          const newDeleteCount=count-=1;
          
          setCount(newDeleteCount);
           toast.error('This item is deleted', {
              position: "top-right",
              autoClose:2000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
              })
      }
          
          
       
  
    return (
        <div>
          {stuckTechnolgies.map((technology:TechnologyType)=>{
            return(
              <div  >
                <div className="flex  items-center p-1 border border-gray-200 rounded-[5px] mt-1.5">
                  <div className="flex items-center gap-2">
                  <img src={technology.icon} alt="" className="w-[10%]"  />
                  <div>
                    <h2 className="text-[10px] font-bold">{technology.name}</h2>
                    <p className="text-[6px] text-[#94A3B8] font-bold">{technology.difficulty}</p>
                  </div>
                </div>
                <span onClick={()=>handleDeleteTechnology(technology)} className="text-[#94A3B8]"><RxCross2 /></span>
                </div>
                   
              </div>
            )
          }

         
          )}  
                          
        </div>
    )
}
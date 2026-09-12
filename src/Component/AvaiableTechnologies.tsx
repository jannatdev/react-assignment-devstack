import type { Dispatch, SetStateAction } from "react"
import type { TechnologyType } from "../type"
import TechnolgyCards from "./TechnolgyCards"


export interface AvaiableTechnologiesProps {
    technologies: TechnologyType[],
    count:number,
    
    setCount:Dispatch<SetStateAction<number>>,
    stuckTechnolgies:TechnologyType[],
    ssetStuckTechnologies:Dispatch<SetStateAction<TechnologyType[]>>
}

export default function AvaiableTechnologies({technologies,count,setCount,stuckTechnolgies,setStuckTechnologies}: AvaiableTechnologiesProps) {
    
    return (
        <div className="grid mx-4 md:grid-cols-3 md:mx-0 gap-6 ">
           {technologies?.map((technology)=>
           <TechnolgyCards technology={technology} count={count} setCount={setCount}  stuckTechnolgies={stuckTechnolgies} setStuckTechnologies={setStuckTechnologies} />
           
        )}
        </div>
    )
}
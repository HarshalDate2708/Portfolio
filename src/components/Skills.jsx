import React from "react";
import BallCanvas from "./Canvas/Ball";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles  } from "../styles";

const Skills = () =>{
    return (
        <div className="flex flex-col justify-center items-center "> 
            <h2 className={`${styles.sectionHeadText}`}>Skills</h2>
            <div className="flex flex-row flex-wrap justify-center  mt-10  border-[#804dee] border-2 mx-10 rounded-2xl p-8">
                {
                    technologies.map((skill)=>(
                        <div className=""  key={skill.name}>

                                    <div className="ml-2 mr-2">
                                        <div className="w-28 h-28 ">
                                        <BallCanvas  icon={skill.icon} /> 
                                        </div>
                                        <div>
                                            <h4 className="text-center mb-10">{skill.name}</h4>
                                        </div>
                                    </div>

                        </div>
                    ))
                }
            </div>
        </div>
    ) 
}

// export default Skills;
export default SectionWrapper(Skills,"Skills");
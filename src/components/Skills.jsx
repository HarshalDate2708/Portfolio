import React from "react";
import BallCanvas from "./Canvas/Ball";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles  } from "../styles";
import {motion,useAnimation} from "framer-motion";
import { useEffect } from "react";
import { zoomIn,fadeIn } from "../utils/motion";

const Skills = () =>{
    const controls = useAnimation();
    useEffect(()=>{
        controls.start({border : "2px solid #804dee"})
    })
    return (
        <motion.div className="flex flex-col justify-center items-center "
        // variants={zoomIn(1,1)}
        data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000"
        > 
                <h2 className={`${styles.sectionHeadText}`}>Skills</h2>
            <motion.div className="flex flex-row flex-wrap justify-center  mt-10 border-2 border-[#804dee]  mx-10 rounded-2xl xs:p-0 sm:p-1 md:p-3 p-5"
            
                // initial={{borderTop : "1px solid transparent",height:0,width:"10px"}}
                // animate={{border : "2px solid #804dee", height:"100%" ,width:"100%"}}
                // transition={{duration:0.5,delay:0.4}}
            >
                {
                    technologies.map((skill)=>(
                        <div className=""  key={skill.name}>

                                    <div className="ml-2 mr-2">
                                        <div className="lg:w-28 lg:h-28 md:h-24 md:w-24 sm:h-20 sm:w-20 xs:h-16 xs:w-16">
                                        <BallCanvas  icon={skill.icon} /> 
                                        </div>
                                        <div>
                                            <p className="text-center lg:text-[14px] md:text-[12px] sm:text-[10px] xs:text-[10px] mb-10">{skill.name}</p>
                                        </div>
                                    </div>

                        </div>
                    ))
                }
            </motion.div>
        </motion.div>
    ) 
}

// export default Skills;
export default SectionWrapper(Skills,"Skills");
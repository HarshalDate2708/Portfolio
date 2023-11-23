import React from "react";
import {motion} from 'framer-motion';
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import {fadeIn,textVariant} from '../utils/motion';
import Photo from "./Photo";
import { SectionWrapper } from "../hoc";
// import {SectionWrapper} from '../hoc/SectionWrapper'


const About = ()=>{

    return (
        <div className={`w-full`} >
          {/* mt-10 md:mt-8 sm:mt-6 */}
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText}`}> Introduction</p>
            <h2 className={`${styles.sectionHeadText} mt-4 sm:mt-2`}>About Me</h2>
          </motion.div>
          <motion.div className="flex flex-wrap items-center lg:justify-start sm:justify-center xs:justify-center md:justify-start">
            <motion.p
            variants={fadeIn("right","",1,1)}
            className="mt-5 lg:mt-7 sm:mt-2 text-secondary w-[70%] leading-10 lg:text-[20px] md:text-[17px] md:w-[70%] sm:text-[15px] sm:leading-7 sm:w-full xs:text-[13px] xs:leading-5 xs:w-full text-[13px]"
            >
                Hii👋 there! I'm skilled software developer with experience in Javascript, Typescript and Python. Along with expertise in framework like React, Node JS and Angular. 
                {/* I have worked on framework like React and Angular for developing interactive, dynamic and responsive web applications. Also, I'm  */}
                {/* familiar with some backend framework like Node JS which can used to develope backend API using express.  */}
                I'm self-motivated and quick learner.I like to work in challenging environment to prove my skills and utilize my knowledge
                to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together
                to turn your ideas into captivating digital experiences that leave a lasting impression.  
            </motion.p>
            <motion.div variants={fadeIn("left","",1,1)}>
                <Photo />
            </motion.div>
          </motion.div>
          
        </div>
    )

}

export default SectionWrapper(About,"About");
// export default About;
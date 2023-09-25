import {motion} from 'framer-motion';
import { styles } from '../styles';
import  ComputersCanvas  from "./Canvas/Computers";

const Hero = () =>{

    return (
        <section className='relative w-full h-screen mx-auto'>
            <div className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                <div className='flex flex-col justify-center items-center mt-1'>
                    <div className='h-5 w-5 rounded-full bg-[#915eff]'/>
                    <div className='w-1 h-60 bg-gradient-to-b from-[#804dee]'/>
                </div>
                <div className='w-[60%] flex flex-col justify-left items-left'>
                    <div className={`${styles.heroHeadText} text-white`}>
                        <h1>Hi I'm <span className='text-[#804dee]'>Harshal</span></h1>
                    </div>
                    <div className={`${styles.heroSubText}  text-white-100`}>
                        <p>I am frontend developer. Passionate about developing the web-applications using React, Next js and angular </p>
                    </div>
                </div>
            </div>
            <ComputersCanvas />
            <div className='absolute xs:bottom-5 bottom-10 w-full flex justify-center items-center'>
                <a href="#about">
                    <div className='w-[20px] h-[40px] rounded-3xl border-2 border-secondary flex justify-center items-starts p-1'>
                        <motion.div
                            animate = {{
                                y : [0,24,0]
                            }} 
                            transition={{
                                duration : 1.5,
                                repeat : Infinity,
                                repeatType : 'loop'
                            }}
                            className="w-1 h-1 rounded-full bg-secondary "
                        />
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Hero;
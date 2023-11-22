import {motion} from 'framer-motion';
import { styles } from '../styles';
import  ComputersCanvas  from "./Canvas/Computers";
import Typewriter from 'typewriter-effect';
import {desktopImage} from '../assets';

const Hero = () =>{

    return (
        <section className='relative w-full h-screen mx-auto'>
            <div data-aos="slide-up" className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                <div className='flex flex-col justify-center items-center mt-1'>
                    <div className='h-5 w-5 rounded-full bg-[#915eff]'/>
                    <div className='w-1 bg-gradient-to-b from-[#804dee]' style={{height:"70vh"}}/>
                </div>
                <div className='w-[55%] flex flex-col justify-left items-left'>
                    <div className={`${styles.heroHeadText} text-white`}>
                        {/* <h1>Hi I'm <span className='text-[#804dee]'>Harshal</span></h1> */}
                        <h1>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString("Hii  I'm  ")
                                typewriter.typeString('<span style="color: #804dee;">Harshal</span>')
                                .stop()
                                .start();
                                
                            }}
                            options={{cursor:""}}
                            />
                        </h1>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="3000" className={`${styles.heroSubText}  text-white-100 `}>
                            <motion.p>I am frontend developer. Passionate about developing the web-applications using React, Next js and angular </motion.p>
                        
                        
                    </div>
                </div>
            </div>
            

            <ComputersCanvas  />

            {/* <div className=" absolute w-[600px] h-[300px] md:h-200 md:w-200 sm:h-180 sm:w-180 xs:h-160 xs:w-160 mt-[40vh]" >


            
            <img src={desktopImage} className='h-full w-full'/>
            </div> */}
            
            <div className='absolute xs:bottom-5 bottom-10 w-full flex justify-center items-center'>
                <a href="#About">
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
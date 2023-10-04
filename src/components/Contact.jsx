import React from "react";
import { SectionWrapper } from "../hoc";
import { useState , useRef } from "react";
import { motion } from "framer-motion";
import emailJS from "@emailjs/browser";
import { styles } from "../styles";
import   EarthCanvas  from "./Canvas/Earth";
import { slideIn } from "../utils/motion";


const Contact = () => {

    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message : "",
    });
    const [loading,setLoading] = useState(false);
    const handleOnChange = (e) => {
        const {name , value } = e.target;
        setFormData({...formData , [name]:value})
     }
    const handleOnSubmit = (e) => { 
        e.preventDefault();
        setLoading(true);
        emailJS.send(
            'service_g2m4ft6',
            'template_bg3ex15',
            {
                from_name : formData.name,
                to_name: 'Harshal',
                from_email: formData.email,
                to_email: 'harshaldate2000@gmail.com',
                message: formData.message
            },
            'KvItyNfx34WUjVfEV'

        ).then(()=>{
            setLoading(false);
            alert('Thank you. I will get back to you as soon as possible.')
            setFormData({
                name:"",
                email:"",
                message:""
            })
        }, (error)=>{
            setLoading(false);
            console.log(error)
            alert('Something went wrong! Please try again.')
        }
        
        )
    }

    return (
        <div className="xl:flex-row flex-col-reverse flex gap-8 overflow-hidden">
            <motion.div
            //  variants={slideIn('left','tween',0.2,1)}
            data-aos="slide-right"
             className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className={`${styles.sectionSubText}`}> Get In Touch</p>
                <h4 className={`${styles.sectionHeadText} mt-4 sm:mt-2`}>Contact</h4>
          
                <form
                 ref={formRef}
                 onSubmit={handleOnSubmit}
                 className="mt-4 flex flex-col gap-2"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-1">Your Name</span>
                        <input 
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleOnChange}
                            placeholder="What's your name?"
                            className="bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-1">Your Email</span>
                        <input 
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleOnChange}
                            placeholder="What's your email?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-2">Your Name</span>
                        <textarea 
                            rows="4"
                            name="message"
                            value={formData.message}
                            onChange={handleOnChange}
                            placeholder="What do you want to say?"
                            className="bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>

                    <button
                     type="submit"
                     className="bg-[#804dee] py-1 px-8 outline-none w-fit text-whitw font-bold shadow-md shadow-primary rounded-xl"
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>

                </form>
            </motion.div>
            <motion.div
            //  variants={slideIn("right","tween",0.2,1)}
            data-aos="slide-left"
             className="xl:flex-1 xl-h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    )

}

export default SectionWrapper(Contact,"Contact");


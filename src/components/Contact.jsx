import React from "react";
import { SectionWrapper } from "../hoc";
import { useState , useRef } from "react";
import { motion } from "framer-motion";
import emailJS from "@emailjs/browser";
import { styles } from "../styles";
import   EarthCanvas  from "./Canvas/Earth";
import { slideIn } from "../utils/motion";
import { toast } from "react-toastify";

const Contact = () => {

    const formRef = useRef();
    const errorMsgObj = {
        name: "Please enter valid name.",
        email: "Please enter valid email.",
        message : "Please enter valid message.",
    }
    const [errorMsg,setError] = useState(errorMsgObj)
    const [isError,setIsError] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message : "",
    });
    const [loading,setLoading] = useState(false);
    
    const handleOnChange = (e) => {
        const {name , value } = e.target;
        const data = {...formData , [name]:value}
        setFormData((data)=>{
            return {...formData , [name]:value}
        })
        value == "" ? setError({...errorMsg,[name]:`Please enter valid ${name}`}) : setError({...errorMsg,[name]:""});
        value == "" ? setIsError(true) : setIsError(false);
        
     }

    const checkValidInput = () =>{
        // console.log(formData.name)
        
        if(errorMsg.name!=="" || errorMsg.email!=="" || errorMsg.message!=="") {
            setIsError(true)
            return false
        } else{
            setIsError(false)
            return true
        } 
        

    }
    const handleOnSubmit = (e) => { 
        e.preventDefault();
        console.log(isError)
        if(checkValidInput()){
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
            toast.success('Thank you. I will get back to you as soon as possible.')
            setFormData({
                name:"",
                email:"",
                message:""
            })
            setIsError(false)
            setError(errorMsgObj)
        }, (error)=>{
            setLoading(false);
            console.log(error)
            toast.error('Something went wrong! Please try again.')
        }
        
        )
        }else{
            toast.warn('Please enter required information...')
        }
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
                            className={`bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outlined-none ${errorMsg.name!=="" && isError ? "border-2 border-red-400 focus:outline-none" : "border-none"} font-medium`}
                        />
                        {errorMsg.name!=="" && isError? <p style={{color:"red", fontWeight:"200"}}>{errorMsg.name}</p> : ""}
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-1">Your Email</span>
                        <input 
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleOnChange}
                            placeholder="What's your email?"
                            className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none ${errorMsg.email!=="" && isError ? "border-2 border-red-400 focus:outline-none" : "border-none"} font-medium `}
                        />
                        {errorMsg.email!=="" && isError? <p style={{color:"red", fontWeight:"200"}}>{errorMsg.email}</p> : ""}
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-2">Your Message</span>
                        <textarea 
                            rows="4"
                            name="message"
                            value={formData.message}
                            onChange={handleOnChange}
                            placeholder="What do you want to say?"
                            className={`bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outlined-none ${errorMsg.message!=="" && isError ? "border-2 border-red-400 focus:outline-none" : "border-none"} font-medium`}
                        />
                        {errorMsg.message!=="" && isError? <p style={{color:"red", fontWeight:"200"}}>{errorMsg.message}</p> : ""}

                    </label>

                    <button
                     type="submit"
                     className="bg-[#804dee] py-1 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                     
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


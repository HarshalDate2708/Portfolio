import { useEffect, useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { navLinks } from "../constants/index.js";
import {Resume,menu,close,hdlogo,logo4} from '../assets';
const Navbar = () =>{

    const [active,setActive] = useState("");
    const [toggle,setToggle] = useState(false)


    return (
        <nav className={`${styles.paddingX} w-full flex-items-center py-3 fixed top-0 z-20 bg-primary`}>
            <div className="w-full flex justify-between item-center max-w-7x1 mx-auto">
                <Link 
                 to="/"
                 className="flex items-center gap-2"
                 onClick={()=>{
                    setActive("");
                    window.scrollTo(0,0);
                 }}
                >
                    <img src={logo4} alt="logo" className="w-11 h-11 object-contain"></img>
                    <p className="text-white text-[18px] font-bold cursor-pointer flex">Harshal &nbsp; &nbsp; <span className="hidden md:block"> {"{"} Software Engineer {"}"}</span></p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row items-center gap-10">
                    {
                        navLinks.map((navItem)=>(
                            <li 
                              key={navItem.id}
                              className={`${
                                active === navItem.title ? "text-white" : "text-secondary"}
                                hover:text-white text-[18px] font-medium cursor-pointer
                                `} 
                              onClick={()=>setActive(navItem.title)}
                            >
                                <a href={`#${navItem.id}`}> {navItem.title}</a>
                            </li>
                        )
                            
                        )
                        
                    }
                    <li >  
                    <a
                        href={Resume}
                        download="Harshal Date(Resume)"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button
                            className="bg-[#804dee] py-1 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                        >Get Resume</button>
                    </a> </li>
            
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                    src={ toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain cursor-pointer"
                    onClick={()=>setToggle(!toggle)}
                    ></img>
                
                <div className={`${!toggle ? 'hidden' : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-0 min-w-[140px] z-10 rounded-xl`}>
                <ul className="list-none flex flex-col justify-end item-start gap-3">
                    {
                        navLinks.map((navItem)=>(
                            <li 
                              key={navItem.id}
                              className={`${
                                active === navItem.title ? "text-white" : "text-secondary"}
                                hover:text-white text-[18px] font-poppins font-medium cursor-pointer
                                `} 
                              onClick={()=>{
                                setToggle(!toggle)
                                setActive(navItem.title)
                              }}
                            >
                                <a href={`#${navItem.id}`}> {navItem.title}</a>
                            </li>
                        )
                            
                        )
                        
                    }
                    
                    <li >  
                    <a
                        href={Resume}
                        download="Harshal Date(Resume)"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button
                            className="bg-[#804dee] py-1 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                        >Get Resume</button>
                    </a> </li>
                </ul>
                </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;
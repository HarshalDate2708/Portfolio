import React from 'react';
import { motion } from 'framer-motion';
// import photo from '../assets'
import {logo,menu,close,hdlogo,profile} from '../assets';


const Photo = () => {

    return (

        <motion.div
            className="photo-container h-40 w-40 sm:mt-6 xs:mt-10 lg:ml-[50%] md:ml-[50%] sm:ml-0 xs:ml-0"
        >

            <motion.img

                src={profile} // Replace with your photo URL

                alt="Profile Photo"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='w-full h-full border-white border-2 rounded-full'

            />

        </motion.div>

    );

};



export default Photo;
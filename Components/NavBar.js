import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const NavBar = () => {
    return (
    <motion.div 
        className="mt-5 ml-5 sticky flex shadow-xl rounded-full ring-2 ring-gray-50 top-0 absolute"
        style={{width:'50px', height:'50px'}}>
            <button className="rounded-full py-3 px-3.5 shadow-xl">
                <FontAwesomeIcon style={{height:'25px', width:'25px'}} icon={faBars} /> 
            </button>
    </motion.div>)
}

export default NavBar;
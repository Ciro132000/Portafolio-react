import React from "react";
import SVGS from '../../exports/conocimientos'
import { motion } from "framer-motion";
import './slider.css'

function Slider(){
    return(
        <motion.div className="slider-container">
            <motion.div className="slider" drag='x' dragConstraints={{right:0, left:-2700}} >
                {SVGS.map(svg => (
                    <motion.div className="item"> 
                        <img src={svg} /> 
                    </motion.div>
                ))
                }

{SVGS.map(svg => (
                    <motion.div className="item"> 
                        <img src={svg} /> 
                    </motion.div>
                ))
                }
            </motion.div>
        </motion.div>
    )
}

export default Slider;
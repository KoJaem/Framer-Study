import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from "framer-motion";

export default function Box4() {
    const[isOpen, setIsOpen] = useState(false);

  return (
      <div className="box-container">
          <motion.div
            layout
            data-isOpen={isOpen}
            initial={{borderRadius: 50}}
            className="parent"
            onClick={()=>setIsOpen(!isOpen)}
          >
              <motion.div layout className="child" />
          </motion.div>
        </div>
  );
}

import React from "react";
import { motion } from "framer-motion";

export default function ByteSize() {

  return (
    <section className="w-full bg-white py-6 px-4 md:px-10 lg:px-20 flex flex-col">
           

      {/* What Ayati Brew’s + 360 Integrated Solutions */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 mb-10"
      >
         {/* Left Side - Heading + Icon + Image */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:w-1/3">
                   <h3 className="text-4xl font-bold text-blue-900 relative">
                    Byte-Sized AI  <br/> (Ayati Intelligence)
          <span className="block h-1 w-24 bg-blue-700 mt-1 mx-auto md:mx-0"></span>
        </h3>
                 
                </div>
        
                {/* Right Side - Text */}
                <p className="max-w-3xl text-gray-600 leading-relaxed md:w-2/3 text-center md:text-left">
                 At AyatiWorks, we’re all about unlocking a digital gateway for our clients! Whether it's sparking consumer conversations through brand marketing, launching online shopping sprees, building cool platforms for entertainment and finance, managing enterprise networks, or supercharging performance— we’ve got it covered! Our secret sauce? Practical, trustworthy, and dependable solutions that make your digital dreams a reality!
                </p>
       
      </motion.div>

     
           

    </section>
  );
}

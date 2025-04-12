import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from 'motion/react'
import { ReactTyped } from "react-typed";


const Header = () => {


  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <motion.div
  initial={{ scale: 0 }}
  whileInView={{ scale: 1 }}
  transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}>
  <Image src={assets.Profile__img} alt='' className='rounded-full w-32' />
</motion.div>

        <motion.h3 initial={{ y: -20, opacity: 0 }}
whileInView={{ y: 0, opacity: 1 }}
transition={{ duration: 0.6, delay: 0.3 }}

         className='flex items-end gap-2 text-xl md:text-2xl mb:3 font-Ovo'>
            Hi, I am Fahad Ali <Image src={assets.hand_icon} alt='' className='w-6' />
        </motion.h3>
        <motion.h1 initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
         className="text-3xl sm:text-4xl lg:text-[50px] font-Ovo font-normal mt-2 mb-2">
      <ReactTyped
        strings={["Shopify Developer", "Frontend Developer", "Javascript Expert", "Custom Liquid Expert", "Customization Expert" ,"Product Listing Specialist"]}
        typeSpeed={50}
        backSpeed={20}
        loop
      />
    </motion.h1>
        <motion.p initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}  
        className='max-w-2xl mx-auto font-Outfit'>
         Excited to have you here! See my projects and discover how I can enhance your store.
         I focus on performance, responsiveness, and conversions to ensure your success!

        </motion.p>
        <div className='flex flex-col sm:flex-row  items-center gap-4 mt-4'>
            <motion.a initial={{ y: 30, opacity: 0 }}
whileInView={{ y: 0, opacity: 1 }}
transition={{ duration: 0.6, delay: 1 }}
             href='#contact' className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>Contact me <Image src={assets.right_arrow_white} alt='' className='w-4' /> </motion.a>
            <motion.a initial={{ y: 30, opacity: 0 }}
whileInView={{ y: 0, opacity: 1 }}
transition={{ duration: 0.6, delay: 1.2 }}
             href='/fahad_resume.pdf' download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:text-black bg-white'>
            My Resume <Image src={assets.download_icon} alt='' className='w-4' />
            </motion.a>
        </div>
    </div>
  )
}

export default Header

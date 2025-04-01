import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'
import { motion } from 'motion/react'


const About = ({isDarkMode}) => {
  return (
    <motion.div initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
     id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4 initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.3 }}
      className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>
      <motion.h2 initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.5 }}
      className='text-center text-5xl font-Ovo'>About Me</motion.h2>

    <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8}}
     className='flex w-full flex-col lg:flex-row items-center gap-10 my-10'>
        <motion.div initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
        className='w-74 sm:w-80 rounded-3xl max-w-none '>
            <Image src={assets.my_about_img} alt='user' className='w-full rounded-3xl' />
        </motion.div>
        <motion.div initial={{ opacity: 0}}
  whileInView={{ opacity: 1}}
  transition={{ duration: 0.6, delay: 0.8 }}
        className='flex-1'>
          <p className='mb-10 max-w-2xl font-Outfit'>
I am a Expert Shopify developer specializing in creating custom Shopify themes, sections, and integrations. With expertise in Liquid, HTML, CSS, JavaScript, and jQuery. Whether it's theme customization, Shopify app integration, or Payment method integration, I help businesses scale with seamless and efficient Shopify solutions.

Let me know if you'd like any modifications! 🚀
            </p> 

          <motion.ul initial={{ opacity: 0}}
  whileInView={{ opacity: 1}}
  transition={{ duration: 0.8, delay: 1 }}
          className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
  {infoList.map(({ icon, iconDark, title, description }, index) => (
    <motion.li 
    whileHover={{ scale: 1.05 }}
    key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
      <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'/>
      <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
      <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
    </motion.li>
  ))}
</motion.ul>

<motion.h4 initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.3, duration: 0.5 }} 
className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Get in touch and explore my work & services!</motion.h4>

<motion.ul initial={{ opacity: 0 }}
  whileInView={{ opacity: 1}}
  transition={{ delay: 1.5, duration: 0.6 }} 
className='flex items-center gap-3 sm:gap-5'>
  {toolsData.map(({icon, link}, index) => (
    <motion.li  whileInView={{ scale: 1.1}}
      className='flex items-center hover:shadow-black hover:bg-lightHover dark:hover:bg-darkHover justify-center w-10 sm:w-12 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' 
      key={index}
    >

     <a target='_blank' href={link}><Image src={icon} alt='Tool' className='w-7 sm:w-7'/></a>
    </motion.li>
  ))}
</motion.ul>




        </motion.div>
    </motion.div>


    </motion.div>
  )
}

export default About

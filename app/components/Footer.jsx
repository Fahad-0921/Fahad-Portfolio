import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logooo_dark : assets.logooo} alt='' className='w-36 mx-auto mb-2' />

        <div className='w-max flex  flex-col items-start gap-2 mx-auto'>

  {/* <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} azlt='' className='w-6'/> */}
  <li className='flex items-center gap-3 mt-3'><MdEmail size={24} />qfahad654@gmail.com</li>
  <li className='flex items-center gap-4 mt-3'><FaPhoneAlt /> +92 3043980905</li>
</div>

      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
  <p>© 2025 Fahad Ali Dev. All rights reserved.</p>
  <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
    <li><a target='_blank' href="https://github.com/Fahad-0921">GitHub</a></li>
    <li><a target='_blank' href="https://www.linkedin.com/in/fahad-ali-4443862b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a></li>

  </ul>
</div>

    </div>
  )
}

export default Footer

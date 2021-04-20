import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import Image from 'next/image';
import {IoMdGitNetwork} from 'react-icons/io'
import {CgWorkAlt} from 'react-icons/cg'
const Sidebar = () => {
   return (
      <>
        <Image
            src='/img/aiub.jpg'
            alt="Picture of the author"
            width={250}
            height={250}
            className="w-8 h-8 rounded-full "
         />
         <h3 className='my-4 text-3xl font-medium dark:text-white tracking-wider font-kaushan'>
            <span className='text-green-500'>Hasan</span> Ahamed
         </h3>
         <p className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 dark:bg-dark-100 rounded-full dark:bg-black-500'>
           <IoMdGitNetwork className="w-6 h-6"/> Full-Stack Developer
         </p>
         {/* Resume */}
         <a
            href='/Resume'
            className='flex items-center justify-center px-2 py-1 my-2 dark:bg-dark-100 bg-gray-200 rounded-full cursor-pointer dark:bg-black-500'>
            <CgWorkAlt className='w-6 h-6' />
            <span> Hire Me</span>
         </a>

         {/* Socials */}
         <div className='flex justify-around w-9/12 mx-auto my-5 text-blue-500  md:w-full '>
            <a href='https://www.youtube.com/channel/UClW8d1f5m0QAE_Ig024EP6A'>
               <AiFillYoutube className='w-8 h-8 cursor-pointer hover:text-green-500' />
            </a>
            <a href='https://www.linkedin.com/in/lithaxor/'>
               <AiFillLinkedin className='w-8 h-8 cursor-pointer hover:text-green-500' />
            </a>
            <a href='https://www.instagram.com/lithaxor/'>
               <AiFillInstagram className='w-8 h-8 cursor-pointer hover:text-green-500' />{' '}
            </a>
            <a href='https://www.github.com/lithaxor/'>
               <AiFillGithub className='w-8 h-8 cursor-pointer hover:text-green-500' />{' '}
            </a>
         </div>

         {/* Contacts */}
         <div
            className='py-4 my-5 dark:bg-dark-100  bg-gray-200 dark:bg-black-500 rounded-lg'
            style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
            <div className='flex items-center justify-center'>
               <GoLocation className='mr-2' /> <span>Dhaka,Bangladesh </span>
            </div>
            <p className='my-2 '> officials.hasan@gmail.com </p>
         </div>

         {/* Email Button */}

         <button
            className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue-400 to-green-500 focus:outline-none'
            onClick={() => window.open('mailto:officials.hasan@gmail.com')}>
            Email me
         </button>
        
      </>
   )
}

export default Sidebar
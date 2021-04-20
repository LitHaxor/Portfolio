import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'
import {ThemeProvider} from 'next-themes'
function MyApp({ Component, pageProps }) {
   return (
     <ThemeProvider attribute="class">
         <div className='grid dark:text-white  grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 '>
         {/* // do this div style later (after putting the content) */}
         <div className='h-full col-span-12 p-4  shadow-md dark:shadow-custom-dark text-base text-center dark:bg-dark-500  bg-white  lg:col-span-3 rounded-2xl '>
            {/* //!sidebar */}
            <Sidebar />
            
         </div>
         <div className='flex flex-col col-span-12 dark:bg-dark-500 shadow-xl dark:shadow-custom-dark bg-white rounded-2xl dark:text-white lg:col-span-9'>
            {/* //!navbar */}
            <Navbar/>
            {/* //!about */}
            <Component {...pageProps} />
         </div>
      </div>
     </ThemeProvider>
   )
}

export default MyApp
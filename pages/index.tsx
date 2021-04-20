import { GetStaticPropsContext } from 'next';
import ServiceCard from '../components/ServiceCard';
import {services} from '../data'
export default function Home() {
  return (
    <div className="flex flex-col px-6 pt-1 flex-grow">
      <h5 className="text-xl my-3 font-medium">
          Currently student of BSc in Computer Science in American International University-Bangladesh. 
          <br/>I'm a full-stack developer capable of developing robust, scaleable client and server software.
      </h5>
      <div className="bg-gray-50 dark:bg-dark-500 p-2 rounded-md">
        <h1 className="text-xl font-bold">My Expertise</h1>
        <div className="grid lg:grid-cols-2 gap-6 my-4">
          {
            services.map(service =>(
              <div className="bg-gray-100 rounded-lg lg:col-span-1 ">
                <ServiceCard service={service}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

// export const getServerSideProps= async ( context: GetServerSideProps) =>{
//   const res = await fetch('http://localhost:3000/api/projects');
//   const data = await res.json();

//   return {
//     props: {
//       services: data
//     }
//   }
// }

// export const getStaticProps =async (context:GetStaticPropsContext) =>{
    
//     const res = await fetch('http://localhost:3000/api/projects');
//     const data = await res.json();
//     return{
//       props: {
//         services: data
//       }
//     }
// }
import { FunctionComponent, useState } from "react";
import { Project } from "../type";
import Image from "next/image";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
// TODO Github
import { MdClose } from "react-icons/md";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

const ProjectCard: FunctionComponent<{ project: Project }> = ({
  project: {
    name,
    image_path,
    deployed_url,
    github_url,
    description,
    key_techs,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);
  // TODO scroll to top
  return (
    <AnimateSharedLayout type="crossfade">
      {/* //step 1 */}
      <motion.div  layoutId={name} onClick={() => setShowDetail(true)}>
        <Image
          src={image_path}
          alt={name}
          layout="responsive"
          width={300}
          height={150}
          className="cursor-pointer "
        /> 

        <motion.p className="my-2 text-center">{name}</motion.p>
      </motion.div>
      {/* //step 1 */}
      <AnimatePresence>
      {showDetail && (
        <motion.div layoutId={name} className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 overflow-hidden dark:bg-dark-200 dark:text-gray-100 md:grid-cols-2 gap-x-12 ">
          <motion.div>
            <motion.div className="border-4 border-gray-100 ">
              <Image
                src={image_path}
                alt={name}
                className="overflow-hidden"
                layout="responsive"
                width={300}
                height={150}
              /> 
              
            </motion.div>
            <motion.div className="flex justify-center my-4 space-x-3">
              <motion.a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm dark:bg-dark-500 "
              >
                <AiFillGithub /> <span>Github</span>
              </motion.a>
              <motion.a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm dark:bg-dark-500"
              >
                <AiFillProject /> <span>Project</span>
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div>
            <motion.h2 className="mb-3 text-xl font-medium md:text-2xl ">{name}</motion.h2>
            <motion.h3 className="my-3 text-base font-medium">{description}</motion.h3>

            <motion.div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((value, i) => (
                <motion.span
                  key={i}
                  className="p-1 px-2 my-1 bg-gray-300 rounded-sm dark:bg-dark-500"
                >
                  {value}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.button
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
            onClick={() => setShowDetail(false)}
          >
            <MdClose size={30} />
          </motion.button>
        </motion.div>
      )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};


export default ProjectCard;
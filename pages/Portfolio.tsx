import { useState } from "react"
import ProjectCard from "../components/ProjectCard"
import ProjectNavbar from "../components/ProjectNavbar"
import { projects as projectsData } from "../data"
import { Category } from "../type"

const Portfolio = () => {
    const [projects,setProjects] = useState(projectsData);
    const [active, setActive] = useState('all');
    const handleFilter=(category:Category | 'all')=>{
        if(category === 'all'){
            setProjects(projectsData);
            setActive('all')
            return;
        }
        const filtered= projectsData.filter(
            (projects)=>(
                projects.categories.includes(category)
            )
        )
        setProjects(filtered)
        setActive(category)
    }

    return (
        <div className="px-5 py-2 overflow-y-scroll " style={{ height: "65vh" }}>
           <ProjectNavbar handleFilter={handleFilter} active={active}/>
        <div className="relative grid grid-cols-12 gap-4 my-3">
          {/* <AnimatePresence> */}
          {projects.map((project,id) => (
            <div
              key={id}
              className="col-span-12 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 sm:col-span-6 lg:col-span-4 hover:bg-gray-300"
            >
              <ProjectCard project={project} key={id} />
            </div>
          ))}
          {/* </AnimatePresence> */}
        </div>
      </div>
    )
}

export default Portfolio

import { FC } from "react"
import { Category } from "../type"

const NavItem:FC<{
    value: Category | 'all',
    handleFilter: Function,
    active: string
}> = ({
    value,
    handleFilter,
    active
}) => {

    let ac= active === value ? 'text-green-500 border-b border-green-500' : '';
    
    return (
        <li className={`capitalize cursor-pointer ${ac} hover:text-green-600`} onClick={()=>handleFilter(value)}>
            {value}
        </li>
    )
}



const ProjectNavbar:FC<{
    handleFilter: Function,
    active: string
}> = (props) => {
    return (
        <div className="px-2 py-2 space-x-3  list-none flex">
            <NavItem value="all"  {...props}/>
            <NavItem value="react"  {...props}/>
            <NavItem value="node"  {...props}/>
            <NavItem value="express"  {...props}/>
            <NavItem value="nextjs" {...props}/>
            <NavItem value="postgres" {...props}/>
        </div>
    )
}

export default ProjectNavbar

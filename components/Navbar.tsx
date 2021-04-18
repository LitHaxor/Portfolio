import React, { FunctionComponent, useEffect } from 'react'
import Link from 'next/link';
import {useRouter} from 'next/router'

interface Items {
    active: string,
    setActive: Function,
    name: string,
    route: string
}
const NavItem:FunctionComponent<Items> = ({
    active,
    setActive,
    name,
    route
}) =>{
    return(
       active !== name ?(
        <Link href={route} key={name}>
            <a className="hover:text-blue-400">
                <span onClick={()=>setActive(name)}>{name}</span>
            </a>    
        </Link>
       ): (<></>)
    )
}


const Navbar = () => {
    const {pathname} = useRouter();
    const [active, setActive] = React.useState<string>();
    useEffect(
        ()=>{
            if(pathname ==="/") setActive('About')
            else if (pathname==="/Portfolio") setActive('Portfolio')
            else if(pathname==="/Resume ") setActive('Resume')
        },[])
    return (
        <div className="flex  justify-between my-6">
            <span className="font-bold text-green-500 text-xl mx-6 pt-2 pr-2 border-b-4 text-green border-green-500">
                {active}
            </span>
            <div className="text-gray-600 dark:text-white space-x-3 text-xl mx-2 p-2">
                <NavItem 
                    active={active} 
                    setActive={setActive} 
                    name="About"
                    route="/"/>
                <NavItem 
                    active={active} 
                    setActive={setActive} 
                    name="Portfolio"
                    route="/Portfolio"/>
                <NavItem 
                    active={active} 
                    setActive={setActive} 
                    name="Resume"
                    route="/Resume"/>
            </div>
        </div>
    )
}

export default Navbar

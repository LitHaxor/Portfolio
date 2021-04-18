
import { FC } from 'react';
import {School} from '../type';

import {FaUniversity} from 'react-icons/fa'
const Schools:FC<School> = ({
    degree,
    graduation,
    name
}) => {
    return (
       
            <div className="mx-6 flex">
                <FaUniversity className="inline-block w-8 h-12 mr-4 text-green-600"/> 
                <div>
                    <h3 className="text-xl font-bold"> {name}</h3>
                    <p className="text-blue-500">{degree} • <span className="text-blue-600">{graduation}</span></p>
                </div>
            </div>
    )
}

export default Schools

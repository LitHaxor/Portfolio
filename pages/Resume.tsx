import Schools from '../components/Schools';
import  {schools} from '../data';
import {IoSchoolOutline} from 'react-icons/io5'
import {GiSkills} from 'react-icons/gi'
const Resume = () => {
    return (
        <div className="p-4">
            <div className="grid md:grid-cols-2 flex-row">
                <div className="flex flex-col">
                    <h3 className="text-2xl my-2 font-bold"><IoSchoolOutline className="inline-block mx-2"/>Education</h3>
                        {
                            schools.map(({name,degree,graduation})=>(
                                <Schools 
                                name={name}
                                degree={degree}
                                graduation={graduation}/>
                            ))
                        }
                </div>
                <div className="my-4">
                    <h3 className="text-2xl font-bold"><GiSkills  className="inline-block mr-2"/>Proffesional Experience</h3>
                        
                    <div>

                    </div>
                </div>
            </div>

                    


        </div>
    )
}

export default Resume

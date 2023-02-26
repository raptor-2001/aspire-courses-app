import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendar, faChalkboardTeacher, faUsers } from '@fortawesome/free-solid-svg-icons';
import courses from '../../data';
import { Link } from 'react-router-dom';


const CourseCard = ({ title, id }) => {


    let content;
    courses.map((e => {
        if (title == e.title) {
            content = e;
            return
        }
    }))

    // console.log(content);

    return (
        
        <div className="max-w-7xl bg-white shadow-lg rounded-lg overflow-hidden flex px-3 max-h-60">
            <div className='flex-[2]'>

                <img src={content.image} alt={content.title} className="max-w-sm h-full object-cover bg-contain" />
            </div>
            <div className='flex-[2]'>

                <div className="py-4 px-6">
                    <h2 className="text-lg font-bold text-gray-800">{content.title}</h2>
                    <p className="text-sm text-gray-600 mt-2">{content.description}</p>
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faClock} className="text-gray-400 mr-2" />
                            <span className="text-gray-600">{content.duration}</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faChalkboardTeacher} className="text-gray-400 mr-2" />
                            <span className="text-gray-600">{content.instructor}</span>
                        </div>
                    </div></div>
            </div>
            <div className='flex-1 '>

                <div className="flex items-center">
                    <FontAwesomeIcon icon={faCalendar} className="text-gray-400 mr-2" />
                    <span className="text-gray-600">{content.date}</span>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faUsers} className="text-gray-400 mr-2" />
                    <span className="text-gray-600">{content.credit}</span>
                </div>
                <div className="mt-4">
                    <span className="p-2 rounded-lg bg-gray-400 text-gray-800 text-sm font-medium">{content.category}</span>
                </div>
                <Link
                to={`/course-info/${content.title}`}
                >
                    <button className='bg-blue-500 p-4 rounded-xl self-center text-white font-medium mt-5 block text-center w-full '>Read More</button>
                </Link>
                
            </div>
        </div>
    )
}

export default CourseCard
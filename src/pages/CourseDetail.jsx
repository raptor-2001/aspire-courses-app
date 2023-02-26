import React from 'react'
import { useParams } from 'react-router-dom'
import courses from '../../data';

const CourseDetail = () => {

    const params = useParams();
    let course;

    console.log(params.title)

    courses.map((e) => {
      if(params.title == e.title) {
        course = e;
        return;
      }
    })

   return (
    <>
    <div className="my-10 max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">{course.title}</h2>
      <p className="mt-2 text-gray-600">{course.description}</p>
      <div className="mt-4">
        <div className="flex items-center">
          <span className="font-semibold">Instructor:</span>
          <span className="ml-2">{course.instructor}</span>
        </div>
        <div className="flex items-center">
          <span className="font-semibold">Duration:</span>
          <span className="ml-2">{course.duration}</span>
        </div>
        <div className="flex items-center">
          <span className="font-semibold">Published:</span>
          <span className="ml-2">{course.date}</span>
        </div>
        <div className="flex items-center">
          <span className="font-semibold">Level:</span>
          <span className="ml-2">{course.level}</span>
        </div>
        <div className="flex items-center">
          <span className="font-semibold">credit:</span>
          <span className="ml-2">{course.credit}</span>
        </div> 
        <a target_blank href={course.link}>
        <button className='bg-red-600 text-white mt-8 w-20 p-2 rounded-md'>
            start
        </button>   
        </a>
       </div>
      </div>
    </>
  )
}

export default CourseDetail
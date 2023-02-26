import React from 'react'
import { useNavigate } from 'react-router-dom';
import { provider } from '../../data'

const Profile = () => {

  let profile = provider[0];

  let navigate = useNavigate();

  const goToForm = () => {
    
    navigate(`/course-form/${provider.name}`);
  
  };

  console.log(profile)

  return (
    <>
    <div className="max-w-4xl mx-auto container m-auto">
      <div className="flex items-center mb-4">
        <img src={profile.logo} alt="Coursera logo" className="w-16 h-16 mr-4" />
        <h1 className="text-3xl font-bold">{profile.name}</h1>
      </div>
      <p className="text-gray-700 mb-4">{profile.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className='mt-10'>
          <h2 className="text-2xl font-bold mb-2">Courses offered by {profile.name}</h2>
          <ul className="list-disc list-inside">
            <li><a href={profile.courses[0].link} className="text-blue-600 hover:underline">{profile.courses[0].title}</a></li>
            <li><a href={profile.courses[1].link} className="text-blue-600 hover:underline">{profile.courses[1].title}</a></li>
          </ul>
        </div>
      </div>
    </div>
      <a
        className="btn ml-20 p-2 text-center text-white bg-purple-600 rounded-md shadow hover:bg-purple-400 cursor-pointer"
        onClick={goToForm}
      >
        Add Course
      </a>
    </>
  )
}

export default Profile
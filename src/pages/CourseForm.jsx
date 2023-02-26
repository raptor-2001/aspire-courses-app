import React from 'react'
import Footer from '../components/Footer'

const CourseForm = (scholarshipDetails) => {


  return (
    <>
        <div className="max-w-md my-10 mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create Scholarship</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="departmentname" className="block font-medium">
           Department Name
          </label>
          <input
            type="text"
            name="departmentname"
            id="name"
            className=" bg-blue-100 gw-full border-gray-300 rounded-md shadow-sm px-4 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="scheamname" className="block font-medium">
           Scheam Name
          </label>
          <input
            type="text"
            name="scheamname"
            id="scheamname"
            className=" bg-blue-100 gw-full border-gray-300 rounded-md shadow-sm px-4 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="scheamdescription" className="block font-medium ">
            Scheam Description
          </label>
          <textarea
            name="scheamdescription"
            id="scheamdescription"
            rows="3"
            className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2  bg-blue-100 "
            required
          />
        </div>
        <div>
          <label htmlFor="scheamammount" className="block font-medium">
            Scheam Amount
          </label>
          <input
            type="number"
            name="scheamammount"
            id="scheamammount"
            className=" bg-blue-100  w-full border-gray-300 rounded-md shadow-sm px-4 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="documentsrequired" className="block font-medium ">
            Documents Required
          </label>
          <textarea
            name="documentsrequired"
            id="documentsrequired"
            rows="3"
            className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2  bg-blue-100 "
            required
          />
        </div>
        <h1 className="block text-lg text-gray-700 font-bold mb-2">
            Eligibility Criteria 
        </h1>
        <div>
          <label htmlFor="gender" className="block font-medium">
            Gender
          </label>
          <select
            name="gender"
            id="gender"
            className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2"
            required
          >
            <option value="">Choose a gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
            <option value="everyone">Everyone</option>
          </select>
        </div>
        <div>
          <label htmlFor="familyincome" className="block font-medium">
            Family Income
          </label>
          <input
            type="number"
            name="familyincome"
            id="familyincome"
            className=" bg-blue-100  w-full border-gray-300 rounded-md shadow-sm px-4 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="cast" className="block font-medium">
            Cast
          </label>
          <select
            name="cast"
            id="cast"
            className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2"
            required
          >
            <option value="">Choose a cast</option>
            <option value="open">Open</option>
            <option value="obc">OBC</option>
            <option value="st">ST</option>
            <option value="sc">SC</option>
            <option value="everyone">Everyone</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="applicationLink">
            Application Link
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="applicationLink" type="text" placeholder="https://example.com/apply" />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="startdate">
           Start Date
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="startdate" type="date" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="enddate">
           End Date
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="enddate" type="date" />
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
        <h1 className="block text-lg text-gray-700 font-bold mb-2">
            Contact 
          </h1>
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="appearance-none block w-full  bg-blue-100  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="name"
            type="text"
            name="name"
            placeholder="Jane Doe"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none block w-full  bg-blue-100  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="email"
            type="email"
            name="email"
            placeholder="janedoe@example.com"
            required
          />
         </div>
        </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            className="appearance-none block w-full  bg-blue-100  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="phone"
            type="tel"
            name="phone"
            placeholder="555-123-4567"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="address">
            Address
          </label>
          <textarea
            className="no-resize appearance-none block w-full  bg-blue-100  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="address"
            name="address"
            placeholder="123 Main St, Anytown USA 12345"
            required
          ></textarea>
         </div>
        </div>
        <div className="flex justify-center">
          <button
            className="btn btn-block mx-10 w-full  px-4 py-2 my-5 text-center text-white bg-purple-600 rounded-md shadow hover:bg-purple-400 cursor-pointer"
            
          >
          Add Scholarship
        </button>
        </div>
      </form>
    </div>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default CourseForm
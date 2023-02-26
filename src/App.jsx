import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Sources from './pages/Sources'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Navbar from './components/Navbar'


import RequireAuth from './components/RequireAuth'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ResetPassword from './components/ResetPassword'

import Course from './pages/Course'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import CourseForm from './pages/CourseForm'



const App = () => {

  return (
    <div>
      
        <Navbar/>
    
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/courses/course" element={<Course/>}/>
          <Route path="/sources" element={<Sources/>} />
          <Route 
            path="/profile" 
            element={
            <RequireAuth>
              <Profile/>
            </RequireAuth>
            } 
          />
          <Route 
            path="/course-form/:companyname" 
            element={
            <RequireAuth>
              <CourseForm/>
            </RequireAuth>
            } 
          />
          <Route path="/course-info/:title" element={<CourseDetail/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/singup" element={<SignUp/>} />
          <Route path="/reset-password" element={<ResetPassword/>} />
        </Routes>

    </div>
  )
}

export default App

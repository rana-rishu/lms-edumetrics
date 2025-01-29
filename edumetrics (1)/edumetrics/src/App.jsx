import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Developer from './components/Developer'
import CollegeDetail from './components/CollegeDetail'
import Profile from './components/profile'
import { AuthContextProvider } from './context/AuthContext'

import Protect from './components/Protect'
import ReviewForm from './components/ReviewForm'
import ContactForm from './components/ContactUs'
import CollegePage from './components/CollegePage'

const App = () => {
return (
    <BrowserRouter>
    <AuthContextProvider>
        <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dashboard" element={<Protect><Dashboard /></Protect>} />
            <Route path="/review" element={<Protect><ReviewForm/></Protect>} />
            <Route path="/profile" element={<Protect><Profile/></Protect>} />
            <Route path="/contact" element={<ContactForm/>} />
            <Route path="/CollegePage" element={<CollegePage/>} />
            <Route path="/developer" element={<Protect><Developer /></Protect>} />
            <Route path="/collegedetail" element={<Protect><CollegeDetail /></Protect>} />
        </Routes>
        </div>
    </AuthContextProvider>
    </BrowserRouter>
)
}

export default App

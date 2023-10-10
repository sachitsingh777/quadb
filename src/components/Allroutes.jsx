import React from 'react'
import {  Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import JobList from "./JobList"
import ApplyForm from './ApplyForm';
import SuccessPage from "./SuccessPage"
import Login from './Login';
import Signup from './Signup';
const Allroutes = () => {
  return (
    <Routes>
    <Route path="/" exact element={<Home/>} />
    <Route path="/job-list" element={<JobList/>} />
    <Route path="/apply" element={<ApplyForm/>} />
    <Route path="/success" element={<SuccessPage/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
   </Routes>
  )
}

export default Allroutes
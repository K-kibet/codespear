import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Footer } from './components/Footer';
import { Topbar } from './components/Topbar';
import Course from './pages/Course'
import { Home } from './pages/Home';
import { Sidebar } from './components/Sidebar';
import { Error } from './pages/ErrorPage/Error';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ArrowUpward } from '@mui/icons-material';
import { Courses } from './pages/Courses';

import {
  Routes,
  Route,
  Outlet
} from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
  overflow-x: hidden;
`

const ButtonToTop = styled.button`
    width: 60px;
    height: 60px;
    position: fixed;
    cursor: pointer;
    bottom: 20px;
    right: 30px;
    border: none;
    outline: none;
    background-color: #e91776;
    color: white;
    border-radius: 50%;
    font-size: 34px;
    z-index: 99;
    transition: all 0.4s ease-in-out;
    &:hover{
      background-color: rgb(96, 95, 95);
      cursor: pointer;
}
`


export default function App() {

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
  })
    
  }
  return (
    <Container>
      <Topbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='courses' element={<Courses />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path="*"  element={<Error />} />
         
      </Routes>
      
      <Footer />
      
      <ButtonToTop onClick={handleScroll} >
        <ArrowUpward style={{color: "white", fontSize: "24px"}}/>
      </ButtonToTop>
    </Container>
  )
}

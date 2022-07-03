import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Footer } from './components/Footer';
import { Topbar } from './components/Topbar';
import Course from './pages/Course';
import { Home } from './pages/Home';
import { Sidebar } from './components/Sidebar';
import { Error } from './pages/ErrorPage/Error';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ArrowUpward } from '@mui/icons-material';
import { Courses } from './pages/Courses';
import { useAuth } from './firebase';
import {
  Routes,
  Route,
} from "react-router-dom";
import Resources from './pages/Resources';

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
    width: 50px;
    height: 40px;
    position: fixed;
    cursor: pointer;
    bottom: 10px;
    right: 20px;
    border: none;
    outline: none;
    border: 1px solid #e91776;
    background-color: transparent;
    border-radius: 50%;
    z-index: 99;
    transition: all 0.4s ease-in-out;
    &:hover{
      background-color: rgb(96, 95, 95);
      cursor: pointer;
}
`


export default function App() {
  const signedUser = useAuth();
  const [user, setUser] = useState('');
  useEffect(() => {
    setUser(signedUser);
  }, [signedUser]);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
  })}

  return (
    <Container>
      <Topbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='courses' element={<Courses />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='resources' element={<Resources />} />
          <Route path='register' element={!user ? <Register /> : () => {return}} />
          <Route path='login' element={!user ? <Login /> : () => {return}} /> 
          <Route path="*"  element={<Error />} />
         
      </Routes>
      
      <Footer />
      
      <ButtonToTop onClick={handleScroll} >
        <ArrowUpward style={{color: "#e91776", fontSize: "24px"}}/>
      </ButtonToTop>
    </Container>
  )
}

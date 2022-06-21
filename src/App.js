import React from 'react';
import styled from 'styled-components';
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

const Container = styled.div`
  width: 99.9vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export default function App() {
  return (
    <Container>
      <Topbar />
      <Home />
      <Footer />
    </Container>
  )
}

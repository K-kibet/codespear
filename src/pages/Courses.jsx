import React from 'react';
import styled from 'styled-components';
import { Flyer } from '../components/Flyer';
import { CoursesComp } from '../components/CoursesComp';
import { Newsletter } from '../components/Newsletter';
import { Navbar } from '../components/Navbar';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`

export const Courses = () => {
  return (
    <Container>
        <Navbar />
        <Flyer />
        <CoursesComp />
        <Newsletter />
    </Container>
  )
}

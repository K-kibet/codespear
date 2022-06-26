import React from 'react';
import styled from 'styled-components';
import { Courasel } from '../components/Courasel';
import { Newsletter } from '../components/Newsletter';
import { Featured } from '../components/Featured';
import Bg from '../assets/home.svg';
import { CoursesComp } from '../components/CoursesComp';

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 10px;
    background-image: url(${Bg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export const Home = () => {
  return (
    <Container>
      <CoursesComp />
      <Featured />
      <Newsletter />
    </Container>
  )
}

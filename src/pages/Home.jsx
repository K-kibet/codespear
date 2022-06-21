import React from 'react';
import styled from 'styled-components';
import { Courasel } from '../components/Courasel';
import Src from '../assets/download.png';
import Src1 from '../assets/download (1).png'
import { Newsletter } from '../components/Newsletter';

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 100px;
    padding-top: 10px;
`
const CourseContainer = styled.div`
  width: 90%;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
`
const Course = styled.div`
  width: calc((100% - 250px) / 4);
  height: calc((100% - 30px) / 2);
  margin: 10px 10px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: center;
  margin: 10px 10px;
`
export const Home = () => {
  return (
    <Container>
      <Newsletter />
    </Container>
  )
}

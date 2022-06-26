import React from 'react';
import styled from 'styled-components';
import { CoursesInfo } from '../courses';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #9c9c9c;
  text-align: center;
  line-height: 1.125;
  margin-bottom: 1.1rem;
  margin-top: 10px;
`

const Wrapper = styled.div`
  width: 90%;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  background-color: transparent;
  padding: 10px 10px;
`
const Course = styled.div`
    width: 5rem;
    height: 5rem;
    margin: 0.5rem 0.5rem;
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding: 5px 5px;
`

const CourseTitle = styled.h1`
  font-size: 1.1rem;
  font-weight: 300;
  color: #9c9c9c;
  text-align: center;
  line-height: 1.1;
`
const Icon = styled.img`
  width: 4rem;
  height: 4rem;
  margin-bottom: 10px;
  object-fit: fill;
  object-position: center;
  border-radius: 10px;
`


export const CoursesComp = () => {
  return (
    <Container>
        <Title>Trending Technologies</Title>
        <Wrapper>
          {CoursesInfo.map(course => {
            return (
              <Course>
                <Icon src={course.img}/>
                <CourseTitle>{course.name}</CourseTitle>
            </Course>
            )
          })}
        
        </Wrapper>
    </Container>
  )
}

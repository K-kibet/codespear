import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    position: relative;
`

const Title = styled.h1`
    font-size: 20px;
    font-weight: 500;
    position: absolute;
`


export const Courasel = () => {
  return (
    <Container>
      <Title>The center of art</Title>
    </Container>
  )
}

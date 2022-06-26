import { KeyboardArrowDown } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import {keyframes} from 'styled-components';
import Bg from '../assets/pattern.svg';

const startAnimate = keyframes`
    0%{
        opacity: 1;
        transform: translateY(10px);
    }
    50%{
        opacity: 0.5;
        transform: translateY(20px);
    }
    100%{
        opacity: 1;
        transform: translateY(10px);
    }
`

const Container = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

`

const Title = styled.p`
  width: 100%;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
  color: #9c9c9c;
  margin: 20px 0;
`

const ScrollButton = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    z-index: 2;
    animation: ${startAnimate} 2s ease-in infinite;
    color: white;
    &:hover{
        background-color: #89e97c;
        cursor: pointer;
    }
`

export const Flyer = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: 350,
            left: 0,
            behavior: 'smooth'
        })
    }
  return (
    <Container>
        <Title>Explore Technologies</Title>
        <ScrollButton onClick={handleScroll}>
            <KeyboardArrowDown />
        </ScrollButton>
    </Container>
  )
}

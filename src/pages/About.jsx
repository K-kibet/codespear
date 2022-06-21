import React from 'react';
import styled from 'styled-components';
import { Facebook, GitHub, Instagram, LinkedIn, Reddit, Telegram, Twitter, YouTube} from '@mui/icons-material';
import Bg from '../assets/blob.svg'

const Container = styled.div`
    width: 95%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${Bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
                                                                                                                                           
`

const Title = styled.h3`
    font-size: 22px;
    width: 100%;
    color: #046A38;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Description = styled.div`
    width: 90%;
    border: 1px solid teal;
    height: 200px;
    font-family: fantasy;
    padding: 10px 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    font-size: 20px;
    line-height: 1.8em;
    @media screen and (min-width:800px) {
        width: 60%;
    }
`

const IconContainer = styled.div`
    width: 80%;
    margin-bottom: 20px;
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding: 0 50px;

    *:hover{
        cursor: pointer;
        box-shadow: 5px 5px 12px #5d83c0, -5px -5px 12px #5d83c0;
        border-radius: 6px;
    }
`
const Span = styled.span`
    width: 90%;
    font-weight: 400;
    font-size: 17px;
    text-align: center;
    margin: 20px;
`

export const About = () => {
  return (
    <Container>
        <Title>LEARN WITH CODESHERE</Title>
        <Description>
            Technology has become part and parcel of our modern lifestyle. <br />
            Learn fundamental skill to become a software developer and create <br />
            software programs that are marketable to over 2 billion people today.
        </Description>
        <Span>Connect with us</Span>
        <IconContainer>
            <Facebook />
            <Twitter />
            <Instagram />
            <LinkedIn />
            <YouTube />
            <GitHub />
            <Reddit />
            <Telegram />
        </IconContainer>
    </Container>
  )
}

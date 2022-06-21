import { Google, Facebook, GitHub } from '@mui/icons-material';
import React, { useState } from 'react';
import styled from 'styled-components';
import Bg from '../assets/login.svg';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${Bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 1200px) {
      transform: scale(0.7);
    }
    @media (max-width: 1000px) {
      transform: scale(0.6);
    }
    @media (max-width: 800px) {
      transform: scale(0.5);
    }
  @media (max-width: 600px) {
      transform: scale(0.4);
    }

`

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 400px;
    height: 100%;
`

const IconContainer = styled.div`
    width: 90%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;

`

const Input = styled.input`
    width: 350px;
    height: 40px;
    margin: 4px 0;
    padding-left: 25px;
    font-size: 13px;
    letter-spacing: 0.15px;
    border: none;
    outline: none;
    font-family: "Montserrat", sans-serif;
    background-color: #ecf0f3;
    transition: 0.25s ease;
    border-radius: 8px;
    box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;

    &:focus {
    box-shadow: inset 4px 4px 4px #d1d9e6, inset -4px -4px 4px #f9f9f9;
  }
`

const Span = styled.span`
    margin-top: 30px;
    margin-bottom: 12px;
`

const FormLink = styled.a`
    margin-top: 30px;
    margin-bottom: 12px;
`
const Title = styled.h1`
    font-size: 34px;
    font-weight: 700;
    line-height: 3;
    color: #181818;
`

const Button = styled.button`
    width: 180px;
    height: 50px;
    border-radius: 25px;
    margin-top: 50px;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 1.15px;
    background-color: #4B70E2;
    color: #f9f9f9;
    
    border: none;
    outline: none;
    &:hover{
      box-shadow: 5px 5px 12px #d1d9e6, -5px -5px 12px #f9f9f9;
      cursor: pointer;
    }
`
export const Login = () => {
  return (
    <Container>
            <Form>
                <Title>Welcome Bac</Title>
                <IconContainer>
                  <Google />
                  <Facebook />
                  <GitHub />
                </IconContainer>
                <Span>
                  OR
                </Span>
                <Input type="text" placeholder="Name"/>
                <Input type="text" placeholder="Email"/>
                <Input type="password" placeholder="Password"/>
                <Button type='submit'>SIGN IN</Button>
            </Form>
            <Span>
              Already registered? Login <FormLink>here</FormLink>
            </Span>
    </Container>
  )
}

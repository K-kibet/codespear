import { Email, Phone, Place, Facebook, Twitter, Instagram, GitHub, YouTube, Pinterest } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: black;
`

const Title = styled.h1`
  text-align: center;
  margin: 0 auto;
  padding: 40px 0;
  font: 300 60px 'Oswald', sans-serif;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 6px
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  position: relative;
  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`

const Form = styled.form`
  width: 450px;
  font-family: 'Lato';
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
  @media screen and (max-width: 569px) {
   width: 90%;
  }
`

const Input = styled.input`

  width: 400px;
  height: 35px;
  background-color: #3b3b3b;
  border: none;
  color: #fff;
  letter-spacing: 1px; 
  margin-bottom: 20px;
  padding: 0 5px;
  outline: none;
  @media screen and (max-width: 569px) {
    width: 280px;
  }
`

const Text = styled.textarea`
  width: 400px;
  min-height: 200px;
  background-color: #3b3b3b;
  margin-bottom: 20px;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 5px;
  outline: none;
  @media screen and (max-width: 569px) {

    width: 280px;
  }
`

const Button = styled.button`
  margin-top: 15px;
  height: 34px;
  width: 160px;
  font-size: 20px;
  font-weight: 500;
  color: #575656;
  overflow: hidden;
  transition: all .2s ease-in-out;
  cursor: pointer;
  @media screen and (max-width: 410px) {
    width: 70%;
  }
`

const ContactContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 850px) {
    margin: 0 auto;
    margin-top: 60px;
    max-width: 300px;
  }
  @media screen and (max-width: 569px) {
    width: 80%;
  }
`

const ContactList = styled.ul`
  width: 90%;
  list-style-type: none;
  margin-left: -30px;
  padding-right: 20px;
  margin-bottom: 20px;

`

const ContactItem = styled.li`
width: 100%;
  line-height: 4;
  color: #aaa;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  @media screen and (max-width: 850px) {
    line-height: 60px;
    &::after{
        line-height: 60px;
    }
  }
  @media screen and (max-width: 569px) {
    line-height: 55px;
    font-size: 2rem;
    &::after{
        line-height: 55px;
    }
  }
`

const ContactText = styled.div`
  font: 300 18px 'Lato', sans-serif;
  letter-spacing: 1.9px;
  color: #bbb;
  margin-left: 56px;
  *{
    color: #bbb;
    text-decoration: none;
    transition-duration: 0.2s;
    &:hover{
        color: #fff;
        text-decoration: none;
    }
  }

  @media screen and (max-width: 569px) {
    width: 280px;
  }
`

const SocialIcons = styled.ul`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 22px;
  text-align: center;
  width: 100%;
  margin: 20px auto;
  padding: 0;
`
const SocialIcon = styled.li`
  position: relative; 
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  line-height: 60px;
  border-radius: 50%;
  color: #fff;
  background-color: rgb(27,27,27);
  cursor: pointer; 
  transition: all .2s ease-in-out;
  a{
    color: #fff;
  }
  &::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 60px;
    line-height: 60px;
    border-radius: 50%;
    opacity: 0;
    box-shadow: 0 0 0 1px #fff;
    transition: all .2s ease-in-out;
  }

  &:hover{
    background-color: #fff; 
    a {
        color: #000;
    }
    &::after{
        opacity: 1;  
        transform: scale(1.12);
        transition-timing-function: cubic-bezier(0.37,0.74,0.15,1.65);
    }
  }
`
const Break = styled.hr`
    border-color: rgba(255,255,255,.6);
    width: 90%;
`
const Copyright = styled.div`
  font: 200 14px 'Oswald', sans-serif;
  color: #555;
  letter-spacing: 1px;
  text-align: center;
  margin-top: 20px;
`
export const Contact = () => {
  return (
    <Container>
      <Title>Contact</Title>
      <Wrapper>
        <Form>
          <Input type="text"  placeholder="NAME" value="" required />
          <Input type="email"  placeholder="EMAIL" value="" required />
          <Text placeholder="MESSAGE" required/>
          <Button type="submit" >SEND</Button>
        </Form>
        <ContactContainer>
          <ContactList>
            <ContactItem>
              <Place />
              <ContactText>City, State</ContactText>
            </ContactItem>
            <ContactItem>
              <Phone />
              <ContactText>(212) 555-2368</ContactText>
            </ContactItem>
            <ContactItem>
              <Email />
              <ContactText>hitmeup@gmail.com</ContactText>
            </ContactItem>
          </ContactList>
          <Break />
          <SocialIcons>
            <SocialIcon>
              <a href=''><Facebook /></a>
            </SocialIcon>
            <SocialIcon>
              <a href=""><Twitter /></a>
            </SocialIcon>
            <SocialIcon>
              <a href=""><Instagram /></a>
            </SocialIcon>
            <SocialIcon>
              <a href=""><GitHub /></a>
            </SocialIcon>
            <SocialIcon>
              <a href=""><YouTube /></a>
            </SocialIcon>
            <SocialIcon>
              <a href=""><Pinterest /></a>
            </SocialIcon>
          </SocialIcons>
          <Break />
          <Copyright>&copy; ALL RIGHTS RESERVED</Copyright>
        </ContactContainer>
      </Wrapper>
    </Container>
  )
}

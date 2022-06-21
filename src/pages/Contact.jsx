import { Email, Phone, Place, Facebook, Twitter, Instagram, GitHub, YouTube, Pinterest } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  max-width: 840px;
  @media screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }
`

const Form = styled.form`
  /*float: left;*/
  max-width: 400px;
  font-family: 'Lato';
  font-weight: 400;
  @media screen and (max-width: 850px) {
    margin: 0 auto;
  }
  @media screen and (max-width: 569px) {
    float: none;
    margin: 0 auto;
  }
`

const Input = styled.input`
  max-width: 400px;
  background-color: #000;
  color: #fff;
  letter-spacing: 1px; 
  @media screen and (max-width: 569px) {
    margin: 0 auto;
  }
`

const Text = styled.textarea`
  max-width: 400px;
  background-color: #000;
  color: #fff;
  letter-spacing: 1px;
  @media screen and (max-width: 569px) {
    margin: 0 auto;
    width: 280px;
  }
`

const Button = styled.button`
  margin-top: 15px;
  height: 34px;
  width: 400px;
  overflow: hidden;
  transition: all .2s ease-in-out;
  @media screen and (max-width: 410px) {
    width: 99%;
  }
`

const ContactContainer = styled.div`
  max-width: 400px;
  @media screen and (max-width: 850px) {
    margin: 0 auto;
    margin-top: 60px;
    max-width: 300px;
  }
  @media screen and (max-width: 569px) {
    float: none;
    margin: 0 auto;
    margin-top: 60px;
    max-width: 280px;
  }
`

const ContactList = styled.ul`
  list-style-type: none;
  margin-left: -30px;
  padding-right: 20px;

`

const ContactItem = styled.li`
  line-height: 4;
  color: #aaa;
  @media screen and (max-width: 850px) {
    height: 60px;
    width: 60px;
    line-height: 60px;
    &::after{
        width: 60px;
        height: 60px;
        line-height: 60px;
    }
  }
  @media screen and (max-width: 569px) {
    height: 55px;
    width: 55px;
    line-height: 55px;
    font-size: 2rem;
    &::after{
        width: 55px;
        height: 55px;
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
  position: relative;
  font-size: 22px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  @media screen and (max-width: 850px) {
    left: 0;
  }
`
const SocialIcon = styled.li`
  position: relative; 
  display: inline-block;
  height: 60px;
  width: 60px;
  margin: 10px 3px;
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
`
const Copyright = styled.div`
  font: 200 14px 'Oswald', sans-serif;
  color: #555;
  letter-spacing: 1px;
  text-align: center;
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
          <Button type="submit" value="SEND"/>
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
              <a href=""><Twitter /></a>
              <a href=""><Instagram /></a>
              <a href=""><GitHub /></a>
              <a href=""><YouTube /></a>
              <a href=""><Pinterest /></a>
            </SocialIcon>
          </SocialIcons>
          <Break />
          <Copyright>&copy; ALL OF THE RIGHTS RESERVED</Copyright>
        </ContactContainer>
      </Wrapper>
    </Container>
  )
}

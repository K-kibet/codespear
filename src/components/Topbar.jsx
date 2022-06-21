import {Search } from '@mui/icons-material';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Image from '../assets/icon.png';
import UserImage from '../assets/person.png';

const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2px 5px;
    background-color: #C5B4E3;
    position: fixed;
    top: 0;
    padding: 0 20px;
    z-index: 100;
`

const Icon = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  cursor: pointer;
`

const SearchContainer = styled.div`
    width: 230px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding: 5px 0px;
    border-radius: 20px;
    overflow: hidden;
`

const Input = styled.input`
    border: none;
    padding-left: 8px;
    outline: none;
    flex: 7;
    height: inherit;
`
const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;

`

const Item = styled.div`
  margin-left: 20px;
  font-weight: 600;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover{
    text-shadow: 5px 5px 12px #5d83c0, -5px -5px 12px #5d83c0;
    text-decoration: 1px solid #5d83c0 underline;
    
  }

`
const UserContainer = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  margin-right: 20px;
`

const User = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`

const Button = styled.button`
    width: 120px;
    height: 38px;
    border-radius: 5px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
    margin-right: 20px;
    background-color: ${props => props.bg};
    cursor: pointer;
`

export const Topbar = () => {
  const [user, setUser] = useState(true);
  return (
    <Container>
      <Icon src={Image}/>
      <SearchContainer>
        <Input type='search'/>
        <Search style={{
          height: '35px',
          flex: 2,
          backgroundColor: 'teal',
          cursor: 'pointer'
        }}/>
      </SearchContainer>
      <Navigation>
        <Item>Home</Item>
        <Item>Courses</Item>
        <Item>About</Item>
        <Item>Contact</Item>
      </Navigation>
      
        {user && <User src={UserImage}/>}
        {!user && <UserContainer>
            <Button bg='teal'>LOGIN</Button>
            <Button bg='black'>REGISTER</Button>
          </UserContainer>
        }
        
      

    </Container>
  )
}

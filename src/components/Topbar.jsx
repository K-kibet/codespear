import { Logout, Search } from '@mui/icons-material';
import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from '../assets/icon.png';
import UserImage from '../assets/person.png';
import { Outlet, NavLink, Link } from "react-router-dom";
import { addCourse, logOut, useAuth } from '../firebase';

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
    border-radius: 10px;
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
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  color:hsl(51.1,50%, 95%);
  transition:all 250ms ease-out;
  cursor: pointer;
  &:hover{
    transform: scale(1.05);
    text-shadow: 5px 5px 2.3px #89388e;
    
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

const UserCard = styled.div`
  width: 200px;
  height: 250px;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  position: fixed;
  right: 0;
  top: 102px;
  z-index: 100;
  background-color: #e2e2e2;
  border-radius: 5px;
`

const UserCardList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const CardItem = styled.li`
  text-align: start;
  width: 100%;
  padding: 5px 5px;
  margin: 5px 0;
  cursor: pointer;
  &:hover{
    background-color: #919090;
  }
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
  const signedUser = useAuth();
  const [user, setUser] = useState('');
  useEffect(() => {
    setUser(signedUser);
  }, [signedUser]);

  const handleSignOut = () => {
    logOut();
  }

  const handleAdd = () => {
    addCourse();
  }
  return (
    <Container >
      <Icon src={Image} onClick={handleAdd}/>
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
        
        <Item><NavLink to='/' className='link' style={({ isActive }) => {
              return {
                color: isActive ? "#68478D" : "",
              };
            }}>Home</NavLink></Item>
        <Item><NavLink to='/courses' className='link' style={({ isActive }) => {
              return {
                color: isActive ? "#68478D" : "",
              };
            }}>Courses</NavLink></Item>
        <Item><NavLink to='/about' className='link' style={({ isActive }) => {
              return {
                color: isActive ? "#68478D" : "",
              };
            }}>About</NavLink></Item>
        <Item><NavLink to='/contact' className='link' style={({ isActive }) => {
              return {
                color: isActive ? "#68478D" : "",
              };
            }}>Contact</NavLink></Item>
        <Item><NavLink to='/resources' className='link' style={({ isActive }) => {
              return {
                color: isActive ? "#68478D" : "",
              };
            }}>Resources</NavLink></Item>
      </Navigation>
        {user && <Button bg='#ED1D24' onClick={handleSignOut} style={{
          position: 'fixed',
          right: 0,
          top: '102px',
          zIndex: 100
        }}>Log out <Logout  style={{
              marginLeft: '10px',
              
            }}/></Button>}
        {user && <User src={user.photoURL ? user.photoURL : UserImage} />}
        {!user && <UserContainer>
            <Button bg='teal'><Link to='login' className='link' >LOGIN</Link></Button>
            <Button bg='black'><Link to='register' className='link' >REGISTER</Link></Button>
          </UserContainer>
        }
        <UserCard >
          <UserCardList>
            <CardItem>Update profile</CardItem>
            <CardItem>Dashboard</CardItem>
            
          </UserCardList>
          <Button bg='#ED1D24'>Log out <Logout  style={{
              marginLeft: '10px'
            }}/></Button>
        </UserCard>
      <Outlet />
    </Container>
  )
}

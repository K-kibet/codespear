import React from 'react'
import styled from 'styled-components';
import { CloudUpload, ContactSupport, Dashboard, GitHub, Info, Notifications, PowerSettingsNew, ShoppingBag, TrendingUp } from '@mui/icons-material';



const Container = styled.div`
    height: 90vh;
    position: fixed;
    left: 0px;
    top: 100px;
    background-color: #b4b3b3;
    &:hover{
    span {
        display: flex;
    }
  }
`

const Title = styled.h1`
  width: 100%;
  height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 10px;
  color: #06a4af;
`
const Navigation = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 20px;
  
`

const Item = styled.li`
    padding-left: 5px;
    list-style: none;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    &:hover{
        background-color: #4e4c4c;
    }
`

const Span = styled.span`
    width: 200px;
    height: 100%;
    display: none;
    
`

const Button = styled.button`
    border-radius: 5px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5px;
    margin-bottom: 10px;
    padding: 0 10px;
    &:hover{
        background-color: #4e4c4c;
    }
`
export const Sidebar = () => {
  return (
    <Container>
        <Navigation>
            <Item>
                <Dashboard style={{
                    width: '30px',
                    height: '30'
                }}/>
                <Span>Dashboard</Span>
            </Item>
            <Item>
                <TrendingUp style={{
                    width: '30px',
                    height: '30'
                }}/>
                <Span>Trending</Span>
            </Item>
            
            <Item>
                <ShoppingBag style={{
                    width: '30px',
                    height: '30'
                }}/>
                <Span>Shop</Span>
            </Item>
            <Item>
                <Notifications style={{
                    width: '30px',
                    height: '30'
                }}/>
                <Span>Notifications</Span>
            </Item>
            <Item>
                <ContactSupport style={{
                    width: '30px',
                    height: '30'
                }}/>
                <Span>Contact</Span>
            </Item>
            <Item>
                <Info style={{
                    width: '30px',
                    height: '30'
                }}/>
                <Span>About</Span>
            </Item>
        </Navigation>
        <Button style={{position: 'absolute', bottom: '50px'}}>
                <PowerSettingsNew style={{
                    width: '30px',
                    height: '30'
                }}/>
                <Span>Logout</Span>
        </Button>
        
  </Container>
  )
}

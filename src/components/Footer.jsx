import { Facebook, Instagram, LinkedIn, Pinterest, Twitter, YouTube } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background-color: #2c2b2b;
    color: white;
    position: relative;
`

const Wrapper = styled.div`
    width: calc((100% - 50px) / 4);
    height: 70%;
    margin: 20px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.div`
    width: 100%;
    font-size: 18px;
    text-align: center;
    margin-bottom: 10px;
`
const Navigation = styled.ul`
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
`

const Item = styled.li`
    width: 90%;
    padding: 5px 5px;
    margin-bottom: 5px;
    list-style: none;
    &:hover{
        cursor: pointer;
        background-color: #b4b4b4;
    }

`
const FooterBottom = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    padding: 0px 5px;
    margin-top: 10px;
`

const Text = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    
`
const Break = styled.hr`
    width: 90%;
    border-radius: 50%;
    background-color: #FA4616;
    margin-bottom: 20px;
`

export const Footer = (props) => {
  return (
    <Container>
        <Wrapper>
            <Title>Codespear</Title>
            <Break />
            <Text>About the company, little discription goes here..</Text>
        </Wrapper>
        <Wrapper>
            <Title>Quick Links</Title>
            <Break />
            <Navigation>
                <Item><Link className='link' to='/register'> Get Started</Link></Item>
                <Item><Link className='link' to='/about'>Success Stories</Link></Item>
                <Item><Link className='link' to='/about'>About</Link></Item>
                <Item ><Link className='link' to='/contact'>Contact</Link></Item>
            </Navigation>
        </Wrapper>
        <Wrapper>
            <Title>Codespear</Title>
            <Break />
            <Navigation>
                <Item><Link className='link' to='/'>Home</Link></Item>
                <Item><Link className='link' to='/'>Front-end development</Link></Item>
                <Item><Link className='link' to='/about'>FAQ</Link></Item>
            </Navigation>
        </Wrapper>
        <Wrapper>
            <Title>Contact us</Title>
            <Break />
            <Navigation style={{flexDirection: 'row'}}>
                <Link className='link' to='/'>
                    <Facebook style={{
                        cursor: 'pointer',
                        color: '#4267B2'
                    }}/>
                </Link>
                
                <Link className='link' to='/'>
                    <Twitter style={{
                        cursor: 'pointer',
                        color: '#1DA1F2'
                   }}/>
                </Link>
                
                <Link className='link' to='/'>
                    <Instagram style={{
                        cursor: 'pointer',
                        color: '#C13584'
                    }}/>
                </Link>
                
                
                <Link className='link' to='/'>
                    <Pinterest style={{
                        cursor: 'pointer',
                        color: '#E60023'
                    }}/>
                </Link>
                
                <Link className='link' to='/'>
                    <LinkedIn style={{
                        cursor: 'pointer',
                        color: '#0e76a8'
                    }}/>
                </Link>
                
                <Link className='link' to='/'>
                    <YouTube style={{
                       cursor: 'pointer',
                       color: '#c4302b'
                    }}/>
                </Link>
                
                
            </Navigation>
        </Wrapper>

        <FooterBottom>
            <Text>&copy;2022</Text>
            <Text><Link className='link' to='/'>Terms of use</Link></Text>
            <Text><Link className='link' to='/'>Privacy Policy</Link></Text>
        </FooterBottom>

    </Container>
  )
}

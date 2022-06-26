import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    background-color: #c8e098;
`

const Item = styled.a`
    font-size: 20px;
    text-decoration: none;
    &:hover{
        cursor: pointer;
        text-shadow: 5px 5px 12px #009A17, -5px -5px 12px #009A17;
        text-decoration: dashed;

    }
`

export const Navbar = () => {
  return (
    <Container>
        <Item>Java</Item>
        <Item>JavaScript</Item>
        <Item>C</Item>
        <Item>Python</Item>
        <Item>C++</Item>
        <Item>Kivy</Item>
        <Item>Dart</Item>
        <Item>jQuery</Item>
        <Item>PHP</Item>
        <Item>Laravel</Item>
    </Container>
  )
}

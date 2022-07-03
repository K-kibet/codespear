import React from 'react';
import styled from 'styled-components';

const Container = styled.table`
    width: 90%;
    height: 400px;
    padding: 10px;
    background-color: rgb(207, 214, 222);
    justify-content: space-around;
    border-radius: 10px;
    border: 2px solid green;
`

const Row = styled.tr`
    justify-content: space-between;
`

const Data = styled.td`
    background: black;
    color: white;
    font-size: 18px;
    font-weight: 600;
    border-radius: 10px;
    border: 1px solid green;
    text-align: center;
    cursor: pointer;  
    &:hover{
       background-color: rgb(93, 23, 23);
    } 
`

const CourseFlyer = () => {
    return (
        <Container>
            <Row>
            </Row>
            <Row id="1">
                <Data colspan="2">True</Data>
                <Data>@</Data>
                <Data>{}</Data>
                <Data>=</Data>
                <Data>+</Data>
                <Data>.</Data>
                <Data>;</Data>
                <Data>|</Data>
                <Data>$</Data>
                <Data>[]</Data>
                <Data>!=</Data>
                <Data colspan="2">False</Data>
            </Row>
            <Row id="2">
                <Data>.</Data>
                <Data colspan="2">.</Data>
                <Data></Data>
                <Data></Data>
                <Data></Data>
                <Data></Data>
                <Data></Data>
                <Data></Data>
                <Data></Data>
                <Data></Data>
                <Data></Data>
                <Data></Data>
                <Data></Data>
            </Row>
            <Row id="3">
                <Data colspan="2">C</Data>
                <Data>C++</Data>
                <Data>jQuery</Data>
                <Data>HTML</Data>
                <Data>CSS</Data>
                <Data>Swift</Data>
                <Data style={{backgroundColor: "rgb(64, 7, 138)"}}>PHP</Data>
                <Data>Java</Data>
                <Data>Python</Data>
                <Data>Django</Data>
                <Data>Android</Data>
                <Data>Bootstrap</Data>
                <Data>Laravel</Data>
          </Row>
          <Row id="4">
                <Data colspan="2">MongoDB</Data>
                <Data>Ajax</Data>
                <Data>XML</Data>
                <Data>Canvas</Data>
                <Data>json</Data>
                <Data>Tailwind</Data>
                <Data>GraphQl</Data>
                <Data>Typescript</Data>
                <Data>Kotlin</Data>
                <Data>Dart</Data>
                <Data>MySQL</Data>
                <Data colspan="2"  >Chrome</Data>
          </Row>
          <Row id="5">
                <Data colspan="2">Linux</Data>
                <Data>ReactJS</Data>
                <Data>NextJS</Data>
                <Data>R.Native</Data>
                <Data>NodeJS</Data>
                <Data>Angular</Data>
                <Data>Ionic</Data>
                <Data>Flutter</Data>
                <Data>Numpy</Data>
                <Data>Pandas</Data>
                <Data>Matplotlib</Data>
                <Data colspan="2" style={{backgroundColor: "rgb(212, 198, 6)"}}>Javascript</Data>
          </Row>
          <Row>
                <Data colspan="3">IoT</Data>
                <Data colspan="2">Wordpress</Data>
                <Data colspan="4">3.0 Web</Data>
                <Data  style={{backgroundColor: "rgb(245, 79, 13)"}}>Git</Data>
                <Data>NFT</Data>
                <Data>Bitcoin</Data>
                <Data>DAO</Data>
                <Data>Xampp</Data>
            </Row>
         
            
        </Container>
    );
}

export default CourseFlyer;

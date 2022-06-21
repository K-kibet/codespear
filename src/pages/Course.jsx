import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const Sidebar = styled.div`
  max-width: 290px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-right: 2px solid #00C0A3;
  top: 0;
  position: fixed;
  left: 2px;
`

const Title = styled.h1`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 10px;
  color: ${props => props.bg};
`
const Navigation = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  overflow-x: hidden;
`

const Item = styled.li`
    width: 100%;
    padding-left: 5px;
    list-style: none;
    margin-bottom: 10px;
`
const Wrapper = styled.div`
  width: calc(100% - 290px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
`
const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 5px 5px 5px 5px;
`

const Description = styled.p`
    width: 100%;
    margin-bottom: 5px;
    padding-left: 5px;
    margin-bottom: 5px;
    line-height: 1.5em;
`
const Code = styled.div`
  width: 98%;
  padding-left: 20px;
  margin: 10px;
  background-color: #131212;
  color: #CBA135;
  font-family: 	'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`
const Break = styled.br``


const Course = () => {
  const code = function greetMe(yourName) { alert("Hello " + yourName); }
    return (
        <Container>
            <Sidebar>
              <Title bg='#1E8FD5'>Javascript</Title>
              <Navigation>
                <Item>Introduction</Item>
                <Item>Prequis</Item>
                <Item>JavaScript and Java</Item>
                <Item>Hello world</Item>
                <Item>Variables</Item>
                <Item>Declaring variables</Item>
                <Item>Variable scope</Item>
                <Item>Global variables</Item>
                <Item>Constants</Item>
                <Item>Data types</Item>
                <Item>String</Item>
                  <Item>Number</Item>
                  <Item>Boolean</Item>
                  <Item>null</Item>
                  <Item>undefined</Item>
                  <Item>Symbol</Item>
                <Item>Loops and Iteration</Item>
                <Item>if...else statement</Item>
                <Item>while statement</Item>
                <Item>Functions</Item>
                <Item>Function declarations</Item>
                <Item>Higher-order functions</Item>
                <Item>Closures</Item>
                <Item>Objects</Item>
                <Item>Prototypes</Item>
                <Item>Inheritance</Item>
                <Item>Regular Expressions</Item>
                <Item>Constructors & classes</Item>
              </Navigation>
            </Sidebar>
            <Wrapper>
              <Title></Title>
              <Content>
                <Title>Introduction</Title>
                <Description>
                JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them. JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:

Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.
Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.
                </Description>
                

              </Content>
              <Content>
                <Title>Hello World!</Title>
                <Description>
                  To get started with writing JavaScript, open the Scratchpad and write your first "Hello world" JavaScript code:
                </Description>
                <Code>

<iframe height="300" style={{width: '100%'}} scrolling="no" title="Simple CSS Grid Dashboard" src="https://codepen.io/trooperandz/embed/YRpKjo?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/trooperandz/pen/YRpKjo">
  Simple CSS Grid Dashboard</a> by Matthew Holland (<a href="https://codepen.io/trooperandz">@trooperandz</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
                </Code>
              


              </Content>


            </Wrapper>
        </Container>
    );
}

export default Course;

import React from 'react'
import styled  from 'styled-components';
import Html from '../assets/html.png';
import Css from '../assets/css.png';
import JavaScript from '../assets/js.png';


const Container  = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Wrapper = styled.div`
  width: 95%;
  height: inherit;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 10px 0;
`

const Title = styled.h1`
  width: 100%;
  font-size: 22px;
  font-weight: 400;
  text-align: center;
  font-size: 1.5rem;
  color: #9c9c9c;
  line-height: 1.125;
  margin-bottom: 1.25rem;
  margin-top: 10px;
`

const Item = styled.div`
  width: 300px;
  height: 90%;
  border: 1px solid #aa1aaa;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  background-color: #bdbaba;
  margin-bottom: 20px;
`

const Image = styled.img`
  width: 60%;
  height: 50%;
  margin-bottom: 10px;
  object-fit: fill;
  object-position: center;
  border-radius: 10px;
`

const Break = styled.hr`
  width: 100%;
  height: 1px;
  background-color:  #f55b23;
  border-radius: 50%;
`

const Description = styled.p`
  width: 100%;
  padding: 20px 20px;
  line-height: 1.8em;
  color: #4b4a4a;
`

export const Featured = () => {
  return (
    <Container>
        <Title>Learn the fundamentals of web development</Title>
        <Wrapper>
            <Item>
                <Image src='https://static.javatpoint.com/htmlpages/images/html-tutorial.png'/>
                <Break />
                <Description >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsa ex quod voluptate,
                </Description>
            </Item>
            <Item>
                <Image src={Css}/>
                <Break />
                <Description >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsa ex quod voluptate,
                </Description>
            </Item>
            <Item>
                <Image src={JavaScript}/>
                <Break />
                <Description >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsa ex quod voluptate,
                </Description>
            </Item>
        </Wrapper>
        
        
    </Container>
  )
}

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    margin: 20px 0;

    @media screen and (max-width: 780px) {
        flex-direction: column;
    }
`

const Wrapper = styled.div`
    width: calc((100% / 3) - 100px);
    min-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
    background-color: #d3d3d3;
    border-radius: 10px;
    @media screen and (max-width: 780px) {
        width: 80%;
    }
`

const Title = styled.h1`
    width: 100%;
    color: #0ead16;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
`

const ItemContainer = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    list-style: none;
`

const Item = styled.li`
    width: 100%;
    padding: 5px 10px;
    color: rgba(5, 5, 5, 0.5);
    &:hover{
        cursor: pointer;
        background-color: #e2e2e2;
    }
`

export default function Resource() {
  return (
    <Container>
        <Wrapper>
            <Title>Channels</Title>
            <ItemContainer>
                <Item>Dcode</Item>
                <Item>Mosh</Item>
            </ItemContainer>
        </Wrapper>

        <Wrapper>
            <Title>Channels</Title>
            <ItemContainer>
                <Item>Dcode</Item>
                <Item>Mosh</Item>
            </ItemContainer>
        </Wrapper>

        <Wrapper>
            <Title>Channels</Title>
            <ItemContainer>
                <Item>Dcode</Item>
                <Item>Mosh</Item>
            </ItemContainer>
        </Wrapper>
    </Container>
  )
}

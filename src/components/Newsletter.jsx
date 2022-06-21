import { Send } from '@mui/icons-material';
import React from 'react';
import styled  from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: relative;
    background-color: black;
`

const Title = styled.h1`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
  position: relative;
`

const Text = styled.p`
  margin-bottom: 14px;
  font-size: 14px;
  color: #7e7e7e;
  line-height: 28px;
`

const InputContainer = styled.div`
  width: 300px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`

const Input = styled.input`
  flex: 1;
  width: 100%;
  padding: 14px 28px;
  background: #2E2E2E;
  border: 1px solid #2E2E2E;
  color: #fff;
`

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    background: #ff5e14;
    padding: 13px 20px;
    border: 1px solid #ff5e14;
    top: 0;
`

export const Newsletter = () => {
  return (
    <Container>
        <Title>Subscribe</Title>
        <Text>Don’t miss to subscribe to our new feeds, kindly fill the form below.</Text>
        <InputContainer>
          <Input />
          <Button>
            <Send style={{
              color: '#fff',
              fontSize: '22px',
              transform: 'rotate(-6deg)'
            }}/>
          </Button>
          
        </InputContainer>
    </Container>
  )
}

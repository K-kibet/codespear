import React from 'react';
import styled from 'styled-components';
import Resource from '../components/Resource';

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
export default function Resources() {
  return (
    <Container>
        <Wrapper>
            <Resource />
        </Wrapper>
    </Container>
  )
}

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: calc(100vh - 56px - 78px);
color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color: ${({ theme }) => theme.bgLighter};
border: 1px solid ${({ theme }) => theme.soft};
padding: 20px;
gap: 5px;
`;

const Title = styled.h1`
font-weight: 500;
font-size: 24px;
`;
const SubTitle = styled.h2`
font-weight: 300;
font-size: 20px;
`;
const Input = styled.input`
background-color: transparent;
outline: none;
border: 1px solid ${({ theme }) => theme.soft};
padding: 5px;
color: ${({ theme }) => theme.text};
width: 100%;
border-radius: 3px;
`;
const Button = styled.button`
    background-color: ${({ theme }) => theme.soft};
    outline: none;
    border: none;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 3px;
`;

const More = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-size: 10px;
`;

const Links = styled.div`
    margin-left: 20px;
`;

const Link = styled.span`
    margin-left: 10px;
`;

const SingIn = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Sign in</Title>
                <SubTitle>to continue to LamaTube</SubTitle>
                <Input placeholder='username' />
                <Input type="password" placeholder='password' />
                <Button>Sign in</Button>
                <Title>or</Title>
                <Input placeholder='username' />
                <Input placeholder='email' />
                <Input placeholder='password' type="password" />
                <Button>Sign up</Button>
            </Wrapper>
            <More>
                English (USA)
                <Links>
                    <Link>Help</Link>
                    <Link>Privacy</Link>
                    <Link>Terms</Link>
                </Links>
            </More>
        </Container>
    )
}

export default SingIn
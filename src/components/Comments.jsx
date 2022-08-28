import React from 'react'
import styled from 'styled-components'
import Comment from './Comment';

const Container = styled.div`
`;

const NewComment = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #999;
`;

const Input = styled.input`
flex:1;
background-color: transparent;
border: none;
color: ${({ theme }) => theme.text};
outline:none;
border-bottom: 1px solid ${({ theme }) => theme.soft};
padding: 5px;
`;

const Comments = () => {
    return (
        <Container>
            <NewComment>
                <Avatar src="https://yt3.ggpht.com/ytc/AMLnZu9U1YR60O4hjCfJHtYSjlpRNJx07bOADEDb6X-d=s176-c-k-c0x00ffffff-no-rj" />
                <Input placeholder='Add a comment...' />
            </NewComment>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </Container>
    )
}

export default Comments
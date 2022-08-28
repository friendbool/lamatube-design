import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
width: ${({type}) => type !== "sm" && "360px"};
margin-bottom: ${({type}) => type === "sm" ? "10px" : "45px"};
cursor: pointer;
display: ${({type}) => type === "sm" && "flex"};
gap: 10px;
`;

const Image = styled.img`
width: 100%;
height: ${({type}) => type === "sm" ? "120px" : "202px"};
object-fit: cover;
background-color: #999;
flex:1;
`;

const Details = styled.div`
display: flex;
margin-top: ${({type}) => type !== "sm" && "16px"};
gap:12px;
flex:1;
`;

const ChannelImage = styled.img`
width:36px;
height:36px;
border-radius: 50%;
background-color: #999;
display: ${({type}) => type === "sm" && "none" };
`;

const Texts = styled.div`
`;
const Title = styled.h1`
font-size: 16px;
font-weight: 500;
color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
font-size: 14px;
color: ${({ theme }) => theme.textSoft};
margin: 9px 0;
`;
const Info = styled.div`
font-size: 14px;
color: ${({ theme }) => theme.textSoft};
`;



const Card = ({type}) => {
    return (
        <Link to="/video/test" style={{ textDecoration: "none" }}>
            <Container type={type}>
                <Image type={type} src="https://i.ytimg.com/vi/SO96rMc9GwM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIHrB3MmcAHqYg65VOL6AsAXKNYA" />
                <Details type={type}>
                    <ChannelImage type={type} src="https://yt3.ggpht.com/ytc/AMLnZu9U1YR60O4hjCfJHtYSjlpRNJx07bOADEDb6X-d=s176-c-k-c0x00ffffff-no-rj" />
                    <Texts>
                        <Title>Test Video</Title>
                        <ChannelName>Lama Dev</ChannelName>
                        <Info>660,908 views · 1 day ago</Info>
                    </Texts>
                </Details>
            </Container>
        </Link >
    )
}

export default Card
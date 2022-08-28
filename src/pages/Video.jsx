import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import React from 'react'
import styled from 'styled-components'
import Comments from '../components/Comments';
import Card from '../components/Card';

const Container = styled.div`
display:flex;
gap:25px;
`;

const Content = styled.div`
flex:5;
`;

const VideoWrapper = styled.div`
`;

const Title = styled.h1`
font-size: 18px;
font-weight: 400;
margin-top:20px;
margin-bottom: 10px;
color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

const Info = styled.span`
color: ${({ theme }) => theme.text};
`;

const Buttons = styled.div`
display: flex;
gap: 20px;
color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
display: flex;
align-items: center;
gap: 5px;
`;

const Hr = styled.hr`
border: 0.5px solid ${({ theme }) => theme.soft};
margin: 15px 0;
`;

const Channel = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #999;
`;

const ChannelDetail = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
font-weight: 500;
color: ${({ theme }) => theme.text};
`;

const ChannelCounter = styled.span`
color: ${({ theme }) => theme.textSoft};
margin-top: 5px;
margin-bottom: 20px;
font-size: 12px;
`;

const Description = styled.p`
font-size: 14px;
`;

const Subscribe = styled.button`
border: none;
background-color:#cc1a00;
font-weight: 500;
color:white;
border-radius: 3px;
height: max-content;
padding: 10px 20px;
cursor:pointer;
`;

const Recommandation = styled.div`
flex:2;
`;

const Video = () => {

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            title="video"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            width="788.54"
            height="443"
            type="text/html"
            src="https://www.youtube.com/embed/DBXH9jJRaDk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com">
          </iframe>
        </VideoWrapper>
        <Title>Text Video</Title>
        <Details>
          <Info>660,908 views · 1 day ago</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon /> 123
            </Button>
            <Button>
              <ThumbDownOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://yt3.ggpht.com/ytc/AMLnZu9U1YR60O4hjCfJHtYSjlpRNJx07bOADEDb6X-d=s176-c-k-c0x00ffffff-no-rj" />
            <ChannelDetail>
              <ChannelName>Lama Dev</ChannelName>
              <ChannelCounter>200k Subscribers</ChannelCounter>
              <Description>
                Ipsum labore irure deserunt aute dolore.
                Anim cupidatat qui est laborum labore incididunt excepteur reprehenderit adipisicing dolore ut incididunt.
                Laboris dolore deserunt reprehenderit nulla reprehenderit cupidatat cillum reprehenderit cupidatat.
                Nostrud est aliqua nisi laboris tempor ut labore sunt et veniam.
                Ea exercitation aliqua incididunt ipsum eu enim do id exercitation non culpa.
                Labore mollit enim aliqua duis sit aliqua velit sunt adipisicing labore minim.
                Voluptate laboris adipisicing enim qui nulla do laboris.</Description>
            </ChannelDetail>
            <Subscribe>SUBSCRIBE</Subscribe>
          </ChannelInfo>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommandation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommandation>
    </Container>
  )
}

export default Video
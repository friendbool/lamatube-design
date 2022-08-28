import React from "react";
import styled from "styled-components";
import LamatuTube from '../img/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from "react-router-dom";

const Container = styled.div`
flex: 0 1;
min-width: 190px;
background-color: ${({ theme }) => theme.bg}; 
height: 100vh;
color: ${({ theme }) => theme.text};
font-size: 14px;
position: sticky;
top:0;
overflow: auto;

scrollbar-width: auto;
scrollbar-color: #a0545480;

&::-webkit-scrollbar {
width: 4px;
height: 4px;
}

&::-webkit-scrollbar-track {
background: #a0545480;
}

&::-webkit-scrollbar-thumb {
background-color: #a0545480;
border-radius: 10px;
border: none;// 1px solid #ffffff;
}
`;

const Wrapper = styled.div`
padding: 18px 26px;
`;

const Logo = styled.div`
display: flex;
align-items: center;
gap: 5px;
font-weight: bold;
margin-bottom: 25px;
`;

const Img = styled.img`
height: 25px;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 7.5px 0;
    
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover{
        background-color: ${({ theme }) => theme.soft};
    }
`;

const TextOverflow = styled.span`
display: inline-block;
text-overflow: ellipsis;
white-space: nowrap;
word-break: break-all;
`;

const Hr = styled.hr`
margin: 15px 0;
border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div`
`;
const Button = styled.button`
padding: 5px 15px;
background-color: transparent;
border: 1px solid #3ea6ff;
color: #3ea6ff;
border-radius: 3px;
font-weight: 500px;
margin-top: 10px;
cursor:pointer;
display: flex;
align-items: center;
gap: 5px;
`;

const Title = styled.h2`
font-size: 14px;
color:#aaaaaa;
font-weight: 500;
`;

const Menu = ({ setDarkMode, darkMode }) => {
    return <Container>
        <Wrapper>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <Logo>
                    <Img src={LamatuTube} />
                    LamaTube
                </Logo>
            </Link>
            <Item><HomeIcon />Home</Item>
            <Item>
                <ExploreOutlinedIcon />
                Explore
            </Item>
            <Item>
                <SubscriptionsOutlinedIcon />
                <TextOverflow>Subscriptions</TextOverflow>
            </Item>
            <Hr />
            <Item>
                <VideoLibraryOutlinedIcon />
                Library
            </Item>
            <Item>
                <HistoryOutlinedIcon />
                History
            </Item>
            <Hr />
            <Login>
                Sign in to loke videos, comment, and subscribe.
                <Link to="/signin" style={{ textDecoration: "none" }}>
                    <Button><AccountCircleOutlinedIcon />SIGN IN</Button>
                </Link>
            </Login>
            <Hr />
            <Title>BEST OF LAMATUBE</Title>
            <Item>
                <LibraryMusicOutlinedIcon />
                Music
            </Item>
            <Item>
                <SportsBasketballOutlinedIcon />
                Sports
            </Item>
            <Item>
                <SportsEsportsOutlinedIcon />
                Gaming
            </Item>
            <Item>
                <MovieOutlinedIcon />
                Movies
            </Item>
            <Item>
                <ArticleOutlinedIcon />
                News
            </Item>
            <Item>
                <LiveTvOutlinedIcon />
                Live
            </Item>
            <Hr />
            <Item>
                <SettingsOutlinedIcon />
                Settings
            </Item>
            <Item>
                <FlagOutlinedIcon />
                Report
            </Item>
            <Item>
                <HelpOutlineOutlinedIcon />
                Help
            </Item>
            <Item onClick={() => setDarkMode(darkMode => !darkMode)}>
                <SettingsBrightnessOutlinedIcon />
                {darkMode ? "Light" : "Dark"} Mode
            </Item>
        </Wrapper>
    </Container>
}

export default Menu; 
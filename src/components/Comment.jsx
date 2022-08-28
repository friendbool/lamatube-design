import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
gap: 10px;
margin: 30px 0;
`;

const Avatart = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
background-color: #999;
`;

const Details = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`;

const Name = styled.span`
color: ${({ theme }) => theme.text};
font-size: 13px;
font-weight: 500;
`;

const Date = styled.span`
color: ${({ theme }) => theme.textSoft};
font-size: 12px;
font-weight: 400;
margin-left: 5px;
`;

const Text = styled.p`
color: ${({ theme }) => theme.text};
font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatart src="https://yt3.ggpht.com/ytc/AMLnZu9U1YR60O4hjCfJHtYSjlpRNJx07bOADEDb6X-d=s176-c-k-c0x00ffffff-no-rj" />
      <Details>
        <Name>John Doe <Date>3 days ago</Date></Name>
        <Text>
          Culpa ea in minim id nostrud anim velit. Ut nisi laboris dolore ipsum. Quis nostrud aliquip dolore exercitation consectetur dolore exercitation labore occaecat eu aliqua ullamco aute velit.
        </Text>
      </Details>
    </Container>
  )
}

export default Comment
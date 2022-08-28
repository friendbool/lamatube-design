import React, { useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

const Home = () => {

  const [video, setVideos] = useState([]);

  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  )
}

export default Home
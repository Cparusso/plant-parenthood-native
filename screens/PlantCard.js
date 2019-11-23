import React from 'react'
import { ScrollView, StyleSheet, Text, Image } from 'react-native';

import styled from 'styled-components';

const CardContainer = styled.Text`
  flex: 1;
`
const CardContent = styled.Text`
  flexDirection: column;
`

const Container = styled.View`
    background: #fff;
    height: 200px;
    width: 150px;
    border-radius: 14px;
    margin: 18px;
    margin-top: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`

const Cover = styled.View`
    width: 100%;
    height: 120px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    overflow: hidden;
`

const CardImage = styled.Image`
    width: 100%;
    height: 100%;
`

const Content = styled.View`
    padding-top: 10px;
    flex-direction: column;
    align-items: center;
    height: 60px;
`

const Title = styled.Text`
    color: #3c4560;
    font-size: 20px;
    font-weight: 600;
`

const PriceCaption = styled.Text`
    color: #b8b3c3;
    font-size: 15px;
    font-weight: 600;
    margin-top: 4px;
`

const PlantCard = ({ plant }) => {
  console.log(plant)

  return (
    <Container>
      <Cover>
        <CardImage source={{uri: plant.picture}}/>
      </Cover>
      <Content>
          <Title>{plant.common_name}</Title>
          <PriceCaption>{plant.binomial_name}</PriceCaption>
      </Content>
    </Container>
  )
}

export default PlantCard

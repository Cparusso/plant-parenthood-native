import React from 'react'
import { ScrollView, StyleSheet, Text, Image } from 'react-native';

const PlantCard = ({ plant }) => {
  console.log(plant)

  return (
    <ScrollView style={styles.container}>
      <Image style={{height:75, width:75}} source={{uri: plant.picture}}/>
      <Text>{plant.common_name}</Text>
      <Text>{plant.binomial_name}</Text>
    </ ScrollView>
  )
}

export default PlantCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

import React, {useState, useEffect} from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import PlantCard from './PlantCard';

import styled from 'styled-components';

export default function Plants() {
  const [plants, setPlants] = useState([])
  const [hasErrors, setErrors] = useState(false)

  useEffect(() => {
    fetch('http://taco.local:3000/plants')
    .then(resp => {
      return resp.json()
    })
    .then(setPlants)
    .catch(err => console.log(err))
  }, [setPlants])

  return (
    <ScrollView style={styles.container}>
       {plants.map(plant => <PlantCard key={plant.id} plant={plant} />)}
    </ScrollView>
  );
}

Plants.navigationOptions = {
  title: 'Plants',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

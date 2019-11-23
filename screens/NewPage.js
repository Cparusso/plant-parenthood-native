import React, {useState, useEffect} from 'react';
import { ScrollView, StyleSheet, Text, Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import PlantCard from './PlantCard';

export default function NewPage() {
  return (
    <ScrollView style={styles.container}>
       <Text>LOL</Text>
       <Button title="THIS A BUTTN"/>
    </ScrollView>
  );
}

NewPage.navigationOptions = {
  title: 'SPAGHETTI',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from '../components/Icon';
import Line from '../components/Line';



export default class PeopleDetailPage extends Component {

  render() {
    const { people } = this.props.route.params;
    const { first } = people.name;
    const { large } = people.picture;
    return (
      <View style={styles.container}>
          <Icon url={ large } styleImage={styles.avatar}/>
          <View style={styles.detailContainer}>
            <Line label="Email:" content={people.email}/>
            <Line label="Cidade:" content={people.location.city}/>
            <Line label="Estado:" content={people.location.state}/>
            <Line label="Tel:" content={people.phone}/>
            <Line label="Cel:" content={people.cell}/>
            <Line label="Nacionalidade:" content={people.nat}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  avatar: {
    aspectRatio: 1,
    borderRadius: 10
  }, 
  detailContainer: {
    backgroundColor: 'white',
    marginTop: 20,
    elevation: 1
  }
})
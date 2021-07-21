import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PeopleListItem from './PeopleListItem';

const PeopleList = props =>  {
    const { peoples, onPressItem } = props;

    const items = peoples.map( people => {
        return <PeopleListItem people={people} key={people.name.first} navegationPeopleDetail={onPressItem} />
    });

    return (
        <View style={styles.container}>
            { items }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
});

export default PeopleList;

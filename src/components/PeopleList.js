import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import PeopleListItem from './PeopleListItem';

const PeopleList = props =>  {
    const { peoples, onPressItem } = props;

    return (
        <FlatList style={styles.container}
            data={ peoples }
            keyExtractor={(item, index) => item.name.first + index}
            renderItem={({ item }) => (
                <PeopleListItem
                 people={item} 
                 navegationPeopleDetail={onPressItem} />
            )} />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
});

export default PeopleList;

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from './Icon';


const PeopleListItem = props => {
    const { people } = props;
    const { first, last } = people.name;
    const { thumbnail } = people.picture;
    return (
        <View style={styles.line}>
            <Icon url = {thumbnail}/>
            <Text style={styles.lineText}>{`${first} ${last}`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection:'row',
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    }
});

export default PeopleListItem;
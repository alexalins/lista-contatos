import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PeopleListItem = props => {
    const { people } = props;
    const { title, first, last } = people.name;
    return (
        <View style={styles.line}>
            <Text style={styles.lineText}>{`${title} ${first} ${last}`}</Text>
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
    }
});

export default PeopleListItem;
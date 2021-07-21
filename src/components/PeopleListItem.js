import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from './Icon';


const PeopleListItem = props => {
    const { people, navegationPeopleDetail } = props;
    const { first, last } = people.name;
    const { thumbnail } = people.picture;
    return (
        <TouchableOpacity onPress={() => navegationPeopleDetail(first)}>
            <View style={styles.line}>
                <Icon url={thumbnail} />
                <Text style={styles.lineText}>{`${first} ${last}`}</Text>
            </View>
        </TouchableOpacity>
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
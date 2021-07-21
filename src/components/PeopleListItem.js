import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from './Icon';


const PeopleListItem = props => {
    const { people, navegationPeopleDetail } = props;
    const { first, last } = people.name;
    const { thumbnail } = people.picture;
    return (
        <TouchableOpacity onPress={() => navegationPeopleDetail(people)}>
            <View style={styles.line}>
                <Icon url={thumbnail} styleImage = {styles.avatar}/>
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
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 50
    },
});

export default PeopleListItem;
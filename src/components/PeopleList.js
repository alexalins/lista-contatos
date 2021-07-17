import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const PeopleList = props =>  {
    const { peoples } = props;

    const textElements = peoples.map(people => {
        const { first } = people.name
        return <Text key={first}>{first}</Text>
    })

    return (
        <View>
            { textElements }
        </View>
    )
}

export default PeopleList;

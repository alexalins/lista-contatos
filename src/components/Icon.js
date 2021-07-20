import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

const Icon = props => {
    const { url } = props;
    return (
        <Image source={{uri: url}} style={styles.avatar}/>
    );
}

const styles = StyleSheet.create({
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 50
    },
})

export default Icon;
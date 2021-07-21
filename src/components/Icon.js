import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

const Icon = props => {
    const { url } = props;
    const { styleImage } = props;
    return (
        <Image source={{uri: url}} style={styleImage}/>
    );
}

export default Icon;
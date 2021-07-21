import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Line = (props) => {
    const {label = "-", content = "-"} = props;

    return (
        <View style={styles.line}>
            <Text style={[styles.cell, styles.label]}>{label}</Text>
            <Text style={[styles.cell, styles.content, content.length > 12 ? styles.longLabel : null]}>{content}</Text>
        </View>
    );
};

export default Line;

const styles = StyleSheet.create({
    line: {
      flexDirection: 'row',
      paddingTop: 3,
      paddingBottom: 3,
      borderWidth: 1,
      borderColor: '#C5C5C5'
    },
    cell: {
      fontSize: 18,
      paddingLeft: 5,
    },
    label: {
      fontWeight: 'bold',
      flex: 1
    },
    content: {
        flex: 2
    },
    longLabel: {
        fontSize: 16,
    }
  });
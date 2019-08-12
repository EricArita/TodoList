import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class TodoItem extends Component {
    render() {
        const {
            data: { id, body, status },
            onPressButton,
            onLongPressButton,
        } = this.props
        const buttonStyle = status === 'Active' ? styles.activeButton : styles.doneButton
        return (
            <TouchableOpacity
                style={buttonStyle}
                onPress={onPressButton}
                onLongPress={onLongPressButton}
            >
                <Text style = {styles.text}>{id}. {body}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    activeButton:
    {
        backgroundColor: 'blue',
        borderRadius: 15,
        paddingVertical: 10,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    doneButton:
    {
        backgroundColor: 'green',
        borderRadius: 15,
        paddingVertical: 10,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:
    {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    }
})

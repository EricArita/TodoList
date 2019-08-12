import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TodoDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static navigationOptions = {
        title: 'Todo Detail',
        headerTitleStyle: {
          textAlign: "center",
          flex: 1
        },
      };

    render() {
        const { navigation } = this.props;
        const todoItem = navigation.getParam('data');
        const { body, status } = todoItem;
        statusStyle = todoItem.status === 'Active' ? styles.activeStatus : styles.doneStatus;
        return (
            <View style={styles.container}>
                <Text style={styles.body}>{body}</Text>
                <Text style={statusStyle}>{status}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    body:
    {
      fontSize: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    activeStatus:
    {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'blue'
    },
    doneStatus:
    {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'green'
    }
  })
  

import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { TODOS } from '../constants/Utils';
import TodoItem from '../components/TodoItem';

export default class CompleteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completeList: TODOS
    };
  };

  static navigationOptions = {
    title: 'Complete List',
    headerTitleStyle: {
      textAlign: "center",
      flex: 1
    },
  };

  render() {
    const { completeList } = this.state;
    const newCompleteList = completeList.filter(item => {
      return item.status !== 'Active';
    });
    return (
      <ImageBackground style={styles.imageBackground} source={require('../assets/CompleteBackground.jpg')}>
        <ScrollView contentContainerStyle={styles.container}>
          {
            newCompleteList.map(item => {
              return (
                <TodoItem data={item} />
              )
            })
          }
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container:
  {
    justifyContent: 'center',
    marginHorizontal: 15,
    paddingBottom: 1000
  },

  imageBackground:
  {
    width: '100%',
    height: '100%'
  }
})

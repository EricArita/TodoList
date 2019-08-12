import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { TODOS } from '../constants/Utils';
import TodoItem from '../components/TodoItem';

export default class ActivityScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activityList: TODOS
    };
  };

  static navigationOptions = {
    title: 'Activity List',
    headerTitleStyle: {
      textAlign: "center",
      flex: 1
    },
  };

  render() {
    const { activityList } = this.state;
    const newActivityList = activityList.filter(item => {
      return item.status !== 'Done';
    });
    return (
      <ImageBackground style={styles.imageBackground} source={require('../assets/ActiveBackground.jpg')}>
        <ScrollView contentContainerStyle={styles.container}>
          {
            newActivityList.map(item => {
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

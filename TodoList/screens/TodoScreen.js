import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import { TODOS } from "../constants/Utils";
import TodoItem from "../components/TodoItem";

export default class TodoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      todoList: TODOS,
    };
  }

  static navigationOptions = {
    title: 'Todo List',
    headerTitleStyle: {
      textAlign: "center",
      flex: 1
    },
  };

  onChange = text => {
    this.setState({
      inputText: text,
    })
  };

  onSubmit = () => {
    const { todoList } = this.state
    const newTodo = {
      body: this.state.inputText,
      status: 'Active',
      id: todoList.length + 1
    };
    const newTodoList = [...todoList, newTodo]
    this.setState({
      todoList: newTodoList,
      inputText: '',
    })
  };
  onPressTodoItem = id => {
    const { todoList } = this.state;
    const todo = todoList.find(todo => todo.id === id);
    todo.status = todo.status === 'Active' ? 'Done' : 'Active';
    const foundIndex = todoList.findIndex(todo => todo.id === id);
    todoList[foundIndex] = todo;
    const newTodoList = [...todoList];
    this.setState({
      todoList: newTodoList
    }, () => {
      setTimeout(() => {
        this.props.navigation.navigate('TodoDetail', { data: todo })
      }, 100)
    })
  };

  onLongPressTodoItem = todo => {
    Alert.alert(
      'Delete your todo?',
      todo.body,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => this.onConfirmDelete(todo.id) }
      ],
      { cancelable: true }
    );
  }

  onConfirmDelete = id => {
    const { todoList } = this.state;
    const newTodoList = todoList.filter(todo => todo.id !== id);
    this.setState({
      todoList: newTodoList
    });
  }

  render() {
    const { todoList } = this.state
    return (
      <ImageBackground style={styles.imageBackground} source={require('../assets/background.jpg')}>
        <KeyboardAvoidingView enabled behavior="padding" keyboardVerticalOffset={100}>
          <ScrollView contentContainerStyle={styles.container}>
            {
              todoList.map(item => {
                return (
                  <TodoItem
                    data={item}
                    onPressButton={() => this.onPressTodoItem(item.id)}
                    onLongPressButton={() => this.onLongPressTodoItem(item)}
                  />
                )
              })
            }
            <TextInput
              style={styles.textInput}
              onChangeText={this.onChange}
              value={this.state.inputText} />
            <Button title="Submit" onPress={this.onSubmit} />
          </ScrollView>
        </KeyboardAvoidingView>
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
  textInput:
  {
    height: 50,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    marginVertical: 15,
    paddingHorizontal: 10,
    color: 'white',
    fontSize: 18
  },
  imageBackground:
  {
    width: '100%',
    height: '100%'
  }
})

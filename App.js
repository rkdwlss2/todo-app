import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './Header';
import Body from './Body';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    text: '할일1',
                    completed: false,
                },
                {
                    text: '할일2',
                    completed: true,
                },
                {
                    text: '할일3',
                    completed: false,
                },
            ],
        };
    }

    addTodo = (text) => {
        // 기존의 Todo 배열에 새로운 Todo를 추가
        const newTodo = {
            text: text,
            completed: false,
        };
        this.setState((prevState) => ({
            todos: [...prevState.todos, newTodo],
        }));
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Todo App</Text>
                <Header addTodo={this.addTodo} />
                <Body todos={this.state.todos} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 50,
    backgroundColor: "#EEE",
  },
  title: {
    fontWeight: "800",
    fontSize: 30, 
    marginLeft: 20,
    marginBottom: 20,
  }
});
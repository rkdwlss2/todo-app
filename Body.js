import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

class Body extends Component {
    // 나머지 코드와 스타일은 그대로 유지

    handleDeleteTodo = (index) => {
        // 클릭된 Todo 항목을 제외한 나머지 항목을 유지
        const updatedTodos = this.props.todos.filter((_, i) => i !== index);
        this.props.onDelete(updatedTodos); // 삭제 후 상태 업데이트
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.todos.map((data, index) => (
                    <View key={index} style={styles.todo}>
                        <View style={styles.todoText}>
                            <TouchableOpacity style={styles.todoCheckbox}>
                                {data.completed ? (
                                    <MaterialCommunityIcons size={20} name='checkbox-marked-circle-outline' />
                                ) : (
                                    <MaterialCommunityIcons size={20} name='checkbox-blank-circle-outline' />
                                )}
                            </TouchableOpacity>
                            <Text>{data.text}</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.handleDeleteTodo(index)}>
                            <MaterialCommunityIcons style={styles.todoDelBtn} size={30} name='delete-outline' />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 5,
        marginHorizontal: 20,
        padding: 10,
        backgroundColor: "#FFF",
        borderRadius: 10,
    },
    todo: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        height: 50,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    todoCheckbox: {
        marginRight: 5,
    },
    todoText: {
        flexDirection: 'row',
    },
    todoDelBtn: {
        color: '#777'
    }
});

export default Body;
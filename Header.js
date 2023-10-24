import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodoText: '', // 새로운 Todo의 텍스트를 저장하는 상태
        };
    }

    handleInputChange = (text) => {
        this.setState({ newTodoText: text });
    }

    handleAddTodo = () => {
        const { newTodoText } = this.state;
        if (newTodoText) {
            this.props.addTodo(newTodoText); // 부모 컴포넌트(App)에 새로운 Todo 추가 요청
            this.setState({ newTodoText: '' }); // 입력 필드 초기화
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.input}>
                    <TextInput
                        style={styles.inputText}
                        placeholder='Enter new todo'
                        autoCorrect={false}
                        value={this.state.newTodoText}
                        onChangeText={this.handleInputChange}
                    />
                    <TouchableOpacity onPress={this.handleAddTodo}>
                        <MaterialCommunityIcons style={styles.addBtn} size={30} name='plus-circle' />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20,
    },
    input: {
        borderRadius: 10,
        backgroundColor: "#FFF",
        paddingLeft: 10,
        paddingRight: 10,
        height: 50,
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    inputText: {
        flex: 1,
    },
    addBtn: {
        color: '#4169E1'
    }
});

export default Header;
import React from 'react';
import { View, StyleSheet, Text } from "react-native";

import TodoListItem from './TodoListItem';
import { TodoData } from '../../screens/Home/stores/definitions';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    root: {
        padding: 4,
        display: 'flex',
        flexGrow: 1,
        backgroundColor: 'blue'
    }
});

interface TodoListProps {
    todos: TodoData[];
    editingIndex: number;
    onEditBegin: (index: number) => void;
    onEditEnd: (message: string) => void;
    onDeleteTodo: (index: number) => void;
}

function TodoList(props: TodoListProps) {
    const { todos = [] } = props;
    return (
        <View style={styles.root}>
            { 
                todos.map((todo, index) => (
                    <TouchableNativeFeedback key={`${todo.message}:${index}`} onPress={() => props.onEditBegin(index)} onLongPress={() => props.onDeleteTodo(index)}>
                        <TodoListItem message={todo.message} isEditing={index === props.editingIndex} onEditEnd={props.onEditEnd} />       
                    </TouchableNativeFeedback>  
                ))
            }
        </View>
    );
}

export default TodoList;
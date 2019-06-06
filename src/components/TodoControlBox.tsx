import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    root: {
        // backgroundColor: 'red'
        display: 'flex',
        justifyContent: 'center',
        padding: 4
    },
    todoHeader: {
        fontSize: 15
    },
    textInput: {
        height: 40,
        borderColor: 'gray', 
        borderWidth: 1,
        margin: 4
    },
    addButton: {
        margin: 4
    }
});


interface TodoControlBoxProps {
    onInsertTodo: (message: string) => void;
}

function TodoControlBox(props: TodoControlBoxProps) {

    const [ text, setText ] = useState('');

    return (
        <View style={styles.root}>
            <Text style={styles.todoHeader}>What TODO</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={text => setText(text)}
                value={text}
            />
            <Button title="Add" onPress={() => props.onInsertTodo(text)} />
        </View>
    );
}

export default TodoControlBox;
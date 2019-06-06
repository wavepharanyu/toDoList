import React, { useState } from 'react';
import { View, StyleSheet, Text } from "react-native";
import { TextInput } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    root: {
        padding: 8,
        marginBottom: 4,
        backgroundColor: 'green'
    }
});

interface TodoListItemProps {
    message: string;
    isEditing: boolean;
    onEditEnd: (message: string) => void;
}

function TodoListItem(props: TodoListItemProps) {
    const { message } = props;

    const [ text, setText ] = useState(message);

    return (
        <View style={styles.root}>
            { props.isEditing ? 
                <TextInput value={text} onChangeText={text => setText(text)} onBlur={() => props.onEditEnd(text)} /> 
                :
                <Text>{ message }</Text> 
            }
        </View>
    );
}

export default TodoListItem;
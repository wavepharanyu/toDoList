import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert, StyleProp } from "react-native";
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

function showOnTrue(value: boolean) {
    return { display: value ? 'flex' : 'none' } as { display: 'flex' | 'none' };
}

function TodoListItem(props: TodoListItemProps) {
    const { message } = props;
    const [ text, setText ] = useState(message);

    return (
        <View style={styles.root}>
            {/* { props.isEditing ?  */}
                <TextInput style={showOnTrue(props.isEditing)} value={text} onChangeText={text => setText(text)} onBlur={() => props.onEditEnd(text)} /> 
                {/* : */}
                <Text style={showOnTrue(!!!props.isEditing)}>{ message }</Text> 
            {/* } */}
        </View>
    );
}

export default TodoListItem;
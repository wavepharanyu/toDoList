import React from 'react';
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    root: {
        padding: 8,
        marginBottom: 4,
        backgroundColor: 'green'
    }
});

interface Props {
    message: string;
}

function TodoListItem(props) {
    const { message } = props;
    return (
        <View style={styles.root}>
            <Text>{ message }</Text>
        </View>
    );
}

export default TodoListItem;
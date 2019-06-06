import React, { useState, useEffect } from 'react';
import {Platform, StyleSheet, Text, View, Button, Switch, AppState} from 'react-native';

import { connect } from 'react-redux';
import { NavigationScreenProps } from 'react-navigation';

import TodoControlBox from '../../components/TodoControlBox';
import TodoList from '../../components/ToDoList';
import { ScrollView } from 'react-native-gesture-handler';
import { TodoData } from './stores/definitions';
import { AppStates } from '../../store/states';
import { AtLeastOne } from '../../helpers/types';
import { insertTodo, deleteTodo, beginEdit, endEdit } from './stores/actions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
    }
});

interface HomeScreenProps extends NavigationScreenProps {
    todos: TodoData[];
    editingIndex: number;
    onInsertTodo: (message: string) => void;
    onEditBegin: (index: number) => void;
    onDeleteTodo: (index: number) => void;
    onEditEnd: (message: string) => void;
}

function mapStateToProps(globalState: AppStates, ownProps) {
    const state = globalState.todo;
    return {
        todos: state.todos,
        editingIndex: state.editingIndex
    } as AtLeastOne<HomeScreenProps>;
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onInsertTodo: (message: string) => dispatch(insertTodo(message)),
        onEditBegin: (index: number) => dispatch(beginEdit(index)),
        onDeleteTodo: (index: number) => dispatch(deleteTodo(index)),
        onEditEnd: (message: string) => dispatch(endEdit(message))
    };
}

function HomeScreen(props: HomeScreenProps) {

    const handleNextScreenButton = () => {
        props.navigation.navigate('Another')
    };

    return (
        <View style={styles.container}>
            <TodoControlBox onInsertTodo={message => props.onInsertTodo(message)}/>
            <ScrollView style={{ backgroundColor: 'orange' }}>
                <TodoList 
                    todos={props.todos} 
                    editingIndex={props.editingIndex} 
                    onEditBegin={index => props.onEditBegin(index)} 
                    onDeleteTodo={index => props.onDeleteTodo(index)} 
                    onEditEnd={message => props.onEditEnd(message)}
                />
            </ScrollView>
            <Button
                onPress={() => handleNextScreenButton()}
                title="Go to another screen"
                color="#841584"
                accessibilityLabel="Switch to another screen"
            />
        </View>
    );
}

HomeScreen.navigationOptions = {
    title: "HomeScreen"
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
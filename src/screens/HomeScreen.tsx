import React, { useState, useEffect } from 'react';
import {Platform, StyleSheet, Text, View, Button, Switch} from 'react-native';

import { connect } from 'react-redux';
import { NavigationScreenProps } from 'react-navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

interface Props extends NavigationScreenProps {
    counter: number;
    incCounter: () => void;
}

function mapStateToProps(globalState, ownProps) {
    const state = globalState.main;
    return {
        counter: state.counter
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        incCounter: () => dispatch({ type: 'ACTION_INCREMENT_COUNTER' })
    };
}

function HomeScreen(props: Props) {
    const [ isChecked, setChecked ] = useState(false);
    const { counter, incCounter } = props;
    
    const handleNextScreenButton = () => {
        props.navigation.navigate('Another')
    };

    return (
        <View style={styles.container}>
            <Text>{ counter }</Text>
            <Switch value={isChecked} onValueChange={e => setChecked(e.valueOf())} />
            <Button
                onPress={() => incCounter()}
                title="Increment Counter"
                color="#841584"
                accessibilityLabel="Click here to increment counter"
            />
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
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

}

function AnotherScreen(props: Props) {

    const handleBackButton = () => {
        props.navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Text>This is Another Screen</Text>
            <Button 
                onPress={() => handleBackButton()}
                title="Go Back!"
            />
        </View>
    );
}

AnotherScreen.navigationOptions = {
    title: "AnotherScreen"
}

export default AnotherScreen;
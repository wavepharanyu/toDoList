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
    welcomeText: {
        fontSize: 40
    }
});

interface WelcomeScreenProps extends NavigationScreenProps {

}

function WelcomeScreen(props: WelcomeScreenProps) {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate("Main");
        }, 1000);
    });

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome</Text>
        </View>
    );
}

export default WelcomeScreen;
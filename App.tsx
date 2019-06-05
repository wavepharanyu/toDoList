import React, { useState, useEffect } from 'react';
import {Platform, StyleSheet, Text, View, Button, Switch} from 'react-native';

import { } from 'redux';
import { connect } from 'react-redux';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

interface Props {}
interface States {
  counter: number;
}

function App(props: Props) {

  const [ counter, setCounter ] = useState(0);
  const [ isChecked, setChecked ] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Text style={styles.instructions}>To get started, edit App.tsx</Text>
      <Text style={styles.instructions}>{instructions}</Text>
      <Text>{ counter }</Text>
      <Switch value={isChecked} onValueChange={e => setChecked(e.valueOf())} />
      <Button
        onPress={() => setCounter(counter + 1)}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

export default connect(null, null)(App);

// export default class App extends React.Component<Props, States> {
//   state = {
//     counter: 0
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.tsx</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//         <Text>{ this.state.counter }</Text>
//         <Button
//           onPress={() => this.setState(state => ({ counter: state.counter + 1 }))}
//           title="Learn More"
//           color="#841584"
//           accessibilityLabel="Learn more about this purple button"
//         />
//       </View>
//     );
//   }
// }

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
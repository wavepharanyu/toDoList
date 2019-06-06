import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import AnotherScreen from './screens/AnotherScreen';

import createSwitchAnimatedNavigator from 'react-navigation-animated-switch';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Another: { screen: AnotherScreen },
}, {
  initialRouteName: "Home"
});

const WelcomeNavigator = createSwitchAnimatedNavigator({
  Welcome: { screen: WelcomeScreen },
  Main: MainNavigator
}, {
  initialRouteName: "Welcome"
});

const App = createAppContainer(WelcomeNavigator);

export default App;
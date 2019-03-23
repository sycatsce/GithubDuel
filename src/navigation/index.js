import React from 'react';
import { createAppContainer, createSwitchNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../features/Home/HomeScreen';
import DuelScreen from '../features/Duel/DuelScreen';
import PopularScreen from '../features/Popular/PopularScreen';
import ResultsScreen from '../features/Duel/ResultsScreen';

const DuelSwitch = createStackNavigator({
  Duel: DuelScreen,
  Results : ResultsScreen
});

const BottomTabNavigator = createBottomTabNavigator({
  Duel: {
    screen: DuelSwitch,
    navigationOptions: {
      tabBarIcon: ({}) => (
        <Icon name="bolt" size={20} color="#000" />
      )
    }
  },
  
  Popular: {
    screen: PopularScreen,
    navigationOptions: {
      tabBarIcon: ({}) => (
        <Icon name="fire" size={20} color="#000" />
      )
    }
  }
}, {
  tabBarOptions:{
    activeTintColor: '#000',
    style: { backgroundColor: '#fff' }
  }
});

const Navigator = createSwitchNavigator({
  Home: HomeScreen,
  Bottom : BottomTabNavigator,
});

export default createAppContainer(Navigator);
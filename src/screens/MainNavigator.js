// @flow
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RacersScreen from './RacersScreen';
import RacesScreen from './RacesScreen';
import RacerDetailsScreen from './RacerDetailsScreen';

const {Navigator, Screen} = createStackNavigator();

export default function MainNavigator() {
  return (
    <Navigator>
      <Screen name="Racers" component={RacersScreen}></Screen>
      <Screen name="Races" component={RacesScreen}></Screen>
      <Screen name="RacerDetails" component={RacerDetailsScreen} options={({ route }) => ({ title: route.params.fullName })}></Screen>
    </Navigator>
  );
}

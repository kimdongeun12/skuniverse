// ./navigation/StackNavigator.js

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screen/Home/Home';

import AlignmentScreen from '../Screen/Alignment/Alignment';

import MapsScreen from '../Screen/Maps/Maps';
import MapsLists from '../Screen/Maps/MapsStack/MapsLists';
import MapsListsDetail from '../Screen/Maps/MapsStack/MapsListsDetail';

import MypageScreen from '../Screen/Mypage/Mypage';

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const AlignmentStack = createNativeStackNavigator();
const MapsStack = createNativeStackNavigator();
const MypageStack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};


const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <HomeStack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={({navigation, route}) => ({
          headerLeft: null,
          headerTitle: '앱이름',
        })}
      />
    </Stack.Navigator>
  );
}

const AlignmentStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <AlignmentStack.Screen 
        name="Alignment" 
        component={AlignmentScreen} 
        options={({navigation, route}) => ({
          headerLeft: null,
          headerTitle: '앱이름',
        })}
        
      />
    </Stack.Navigator>
  );
}

const MapsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <MapsStack.Screen
        name="Maps"
        component={MapsScreen}
        options={({navigation, route}) => ({
          headerLeft: null,
          headerTitle: '앱이름',
        })}
      />
      <MapsStack.Screen
        name="MapsLists"
        component={MapsLists}
        options={({navigation, route}) => ({
          headerLeft: null,
        })}
      />
      <MapsStack.Screen
        name="MapsListsDetail"
        component={MapsListsDetail}
        options={({navigation, route}) => ({
          headerLeft: null,
        })}
      />
    </Stack.Navigator>
  );
}

const MypageStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <MypageStack.Screen 
        name="Mypage" 
        component={MypageScreen} 
        options={({navigation, route}) => ({
          headerLeft: null,
          headerTitle: '앱이름',
        })}
      />
    </Stack.Navigator>
  );
}

export { HomeStackNavigator, AlignmentStackNavigator ,MapsStackNavigator , MypageStackNavigator };
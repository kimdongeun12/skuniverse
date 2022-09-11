// ./navigation/StackNavigator.js

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../Screen/Home/Home';
import Alignment from '../Screen/Alignment/Alignment';
import Maps from '../Screen/Maps/Maps';
import MapsLists from '../Screen/Maps/MapsStack/MapsLists';
import MapsDetail from '../Screen/Maps/MapsStack/MapsDetail';
import Mypage from '../Screen/Mypage/Mypage';

const Stack = createNativeStackNavigator();

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
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

const AlignmentStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Alignment" component={Alignment} />
    </Stack.Navigator>
  );
}

const MapsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName="MapsLists">
      <Stack.Screen
        name="MapsLists"
        component={MapsLists}
      />
      <Stack.Screen
        name="MapsDetail"
        component={MapsDetail}
      />
    </Stack.Navigator>
  );
}

const MypageStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Mypage" component={Mypage} />
    </Stack.Navigator>
  );
}

export { HomeStackNavigator, AlignmentStackNavigator ,MapsStackNavigator , MypageStackNavigator };
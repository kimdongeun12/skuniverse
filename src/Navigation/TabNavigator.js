
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from 'react-native-vector-icons/Ionicons';
import { HomeStackNavigator, AlignmentStackNavigator ,MapsStackNavigator , MypageStackNavigator } from "./StackNavigator";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator initialRouteName="HomeStack">
      <Tab.Screen 
      name="HomeStack" 
      component={HomeStackNavigator} 
      options={{
        headerShown: false,
        title: '홈',
        tabBarIcon: ({color, size}) => (
          <Icon name="home-outline" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen name="AlignmentStack" 
      component={AlignmentStackNavigator} 
      options={{
        headerShown: false,
        title: '맞춤검색',
        tabBarIcon: ({color, size}) => (
          <Icon name="filter-outline" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen name="MapsStack" 
      component={MapsStackNavigator} 
      options={{
        headerShown: false,
        title: '지도검색',
        tabBarIcon: ({color, size}) => (
          <Icon name="map-outline" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen name="MypageStack" 
      component={MypageStackNavigator} 
      options={{
        headerShown: false,
        title: '마이페이지',
        tabBarIcon: ({color, size}) => (
          <Icon name="person-circle" color={color} size={size} />
        ),
      }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from 'react-native-vector-icons/Ionicons';
import { HomeStackNavigator, AlignmentStackNavigator ,MapsStackNavigator , MypageStackNavigator } from "./StackNavigator";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Home" 
      component={HomeStackNavigator} 
      options={{
        headerShown: false,
        title: '홈',
        tabBarIcon: ({color, size}) => (
          <Icon name="home-outline" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen name="Alignment" 
      component={AlignmentStackNavigator} 
      options={{
        headerShown: false,
        title: '홈',
        tabBarIcon: ({color, size}) => (
          <Icon name="filter-outline" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen name="Maps" 
      component={MapsStackNavigator} 
      options={{
        headerShown: false,
        title: '홈',
        tabBarIcon: ({color, size}) => (
          <Icon name="map-outline" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen name="Mypage" 
      component={MypageStackNavigator} 
      options={{
        headerShown: false,
        title: '홈',
        tabBarIcon: ({color, size}) => (
          <Icon name="person-circle" color={color} size={size} />
        ),
      }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
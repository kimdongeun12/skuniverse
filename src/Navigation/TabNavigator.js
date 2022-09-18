
import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';
import {  LoginStackNavigator, HomeStackNavigator, AlignmentStackNavigator ,MapsStackNavigator , MypageStackNavigator} from "./StackNavigator";    // hong-da-hyeon 작업


const Tab = createBottomTabNavigator();

// 로그인, 회원가입 화면에서는 bottom tab 없애기
const getVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Login";
  if(routeName == 'Login' || routeName == 'NewLogin'){
    return "none"
  }
  return
};

const BottomTabNavigator = ({navigation}) => {

  return (
    <Tab.Navigator initialRouteName="MypageStack">
      <Tab.Screen 
      name="HomeStack" 
      component={HomeStackNavigator}
      options={{
        headerShown: false,
        tabBarVisible: false,
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
      
      {/*  tabBarStyle : 로그인, 회원가입에서는 bottom tab 없애기 위함 */}
      <Tab.Screen 
        name="MypageStack" 
        component={MypageStackNavigator} 
        options={({ route }) => ({
            tabBarStyle: {display: getVisibility(route)},
            headerShown: false,
            title: '마이페이지',
            tabBarIcon: ({color, size}) => (
              <Icon name="person-circle" color={color} size={size} />
            ),
        })}
      />

    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
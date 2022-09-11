import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Main from './Pages/Main/Main';
import Alignment from './Pages/Alignment/Alignment';
import Maps from './Pages/Maps/Maps';
import Mypage from './Pages/Mypage/Mypage';

const Tab = createBottomTabNavigator();

function BottomTabNavigationApp() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Main}
          options={{
            title: '홈',
            tabBarIcon: ({color, size}) => (
              <Icon name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Alignment"
          component={Alignment}
          options={{
            title: '맞춤검색',
            tabBarIcon: ({color, size}) => (
              <Icon name="filter-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Maps"
          component={Maps}
          options={{
            title: '지도검색',
            tabBarIcon: ({color, size}) => (
              <Icon name="map-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Mypage"
          component={Mypage}
          options={{
            title: '마이페이지',
            tabBarIcon: ({color, size}) => (
              <Icon name="person-circle" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabNavigationApp;

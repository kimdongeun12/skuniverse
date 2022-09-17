// ./navigation/StackNavigator.js

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screen/Home/Home';

import ItemDetailScreen from '../Components/ItemDetail'

import AlignmentScreen from '../Screen/Alignment/Alignment';

import MapsScreen from '../Screen/Maps/Maps';
import MapsLists from '../Screen/Maps/MapsStack/MapsLists';

import MypageScreen from '../Screen/Mypage/Mypage';
import TermpageScreen from '../Screen/Mypage/TermDetail/Termpage';             // hong-da-hyeon 작업

import LoginScreen from '../Screen/LoginPage/Login';            // hong-da-hyeon 작업
import NewLoginScreen from '../Screen/LoginPage/NewLogin';      // hong-da-hyeon 작업

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const AlignmentStack = createNativeStackNavigator();
const MapsStack = createNativeStackNavigator();
const MypageStack = createNativeStackNavigator();
//const TermpageStack = createNativeStackNavigator();       // hong-da-hyeon 작업
const LoginStack = createNativeStackNavigator();      // hong-da-hyeon 작업
const NewLoginStack = createNativeStackNavigator();   // hong-da-hyeon 작업


const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};


// hong-da-hyeon 작업
  // const LoginStackNavigator = () => {
  //   return (
  //      <Stack.Navigator screenOptions={screenOptionStyle}>
  //        <LoginStack.Screen 
  //          name="Login" 
  //          component={LoginScreen} 
  //          options={({navigation, route}) => ({
  //            headerLeft: null,
  //            headerTitle: '로그인',
  //          })}
  //        />
  //        <LoginStack.Screen 
  //          name="NewLogin" 
  //          component={NewLoginScreen} 
  //          options={({navigation, route}) => ({
  //            headerLeft: null,
  //            headerTitle: '회원가입',
  //          })}
  //        />
  //      </Stack.Navigator>
  //      // <Stack.Navigator initialRouteName="LoginStack">
  //      //     		<LoginStack.Screen
  //      //                 		name="LoginScreen"
  //      //                 		component={LoginScreen}
  //      //                 		options={{headerShown: false}}
  //      //          	/>
  //      //           <NewLoginStack.Screen
  //      //                 		name="NewLoginScreen"
  //      //                 		component={NewLoginScreen}
  //      //                 		options={{headerShown: false}}
  //      //           />
  //      // </Stack.Navigator>
  //   );
  // }

const HomeStackNavigator = () => {
  
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
        
        {/* <LoginStack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={({navigation, route}) => ({
            headerLeft: null,
            headerTitle: '로그인',
          })}
        />
        <LoginStack.Screen 
          name="NewLogin" 
          component={NewLoginScreen} 
          options={({navigation, route}) => ({
            headerLeft: null,
            headerTitle: '회원가입',
          })}
        /> */}
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
          headerTitle: route.params.districtParams.district_nm,
        })}
      />
      <MapsStack.Screen
        name="ItemDetail"
        component={ItemDetailScreen}
        options={({navigation, route}) => ({
          headerTitle: route.params.detailParams.fclty_nm,
          // headerTitle: 'sss',
        })}
      />
    </Stack.Navigator>
  );
}

// hong-da-hyeon 작업
const MypageStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>

      <LoginStack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={({navigation, route}) => ({
            visible:false,
            tabBarVisible: false,
            headerLeft: null,
            headerTitle: '로그인',
          })}
        />

        <LoginStack.Screen 
          name="NewLogin" 
          component={NewLoginScreen} 
          options={({navigation, route}) => ({
            headerLeft: null,
            headerTitle: '회원가입',
          })}
        />
      
      {/* headerTitle -> Login을 통해 넘어온 ID값*/}
      <MypageStack.Screen 
        name="Mypage" 
        component={MypageScreen} 
        options={({navigation, route}) => ({
          headerLeft: null,
          //headerTitle: 'skuniverse 님',
          headerTitle:route.params.IdOfUser+' 님',
        })}
      />
      <MypageStack.Screen 
        name="Termpage" 
        component={TermpageScreen} 
        options={({navigation, route}) => ({
          headerLeft: null,
        })}
      />
    </Stack.Navigator>
  );
}

export { HomeStackNavigator, AlignmentStackNavigator ,MapsStackNavigator , MypageStackNavigator };
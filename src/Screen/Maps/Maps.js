
import React from 'react';
import {Text , View , Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styled from "styled-components";
import MapsLists from './MapsStack/MapsLists';
import MapsListsDetail from './MapsStack/MapsListsDetail';

const Stack = createNativeStackNavigator();


function Maps() {
  return (
    <Stack.Navigator initialRouteName="MapsLists">
      <Stack.Screen
        name="MapsLists"
        component={MapsLists}
      />
      <Stack.Screen
        name="MapsDetail"
        component={MapsListsDetail}
      />
    </Stack.Navigator>
  );
}


const MapsWrap = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const ImageButton = styled.Button`
  padding: 16px;
`

export default Maps;
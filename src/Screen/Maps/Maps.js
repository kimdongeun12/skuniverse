
import React from 'react';
import {Text , View , Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styled from "styled-components";

const Stack = createNativeStackNavigator();


function Maps({navigation}) {
  return (
    <MapsWrap>
      <ImageButton title="버튼" onPress = {() => navigation.push('MapsLists')}/>
    </MapsWrap>
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
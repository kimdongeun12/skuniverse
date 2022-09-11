
import React from 'react';
import {Text , View , Button} from 'react-native';
import styled from "styled-components";

function MapsLists({navigation}) {
  return (
    <MapsWrap>
      <ImageButton title="버튼" onPress = {() => navigation.push('MapsDetail')}/>
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

export default MapsLists;
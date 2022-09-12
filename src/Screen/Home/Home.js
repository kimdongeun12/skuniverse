
import React from 'react';
import {Text , View} from 'react-native';
import styled from "styled-components";

function Main({navigation}) {
  return (
    <MainWrap>
      <Text>Main</Text>
    </MainWrap>
  );
}


const MainWrap = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export default Main;
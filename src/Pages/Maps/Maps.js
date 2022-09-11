
import React from 'react';
import {Text , View} from 'react-native';
import styled from "styled-components";

function Maps() {
  return (
    <MapsWrap>
      <Text>Maps</Text>
    </MapsWrap>
  );
}


const MapsWrap = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export default Maps;
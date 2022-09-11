
import React from 'react';
import {Text , View} from 'react-native';
import styled from "styled-components";

function Alignment() {
  return (
    <AligmentWrap>
      <Text>Alignment</Text>
    </AligmentWrap>
  );
}

const AligmentWrap = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export default Alignment;
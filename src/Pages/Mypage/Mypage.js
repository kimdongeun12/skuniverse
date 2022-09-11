
import React from 'react';
import {Text , View} from 'react-native';
import styled from "styled-components";

function Mypage() {
  return (
    <MypageWrap>
      <Text>Mypage</Text>
    </MypageWrap>
  );
}


const MypageWrap = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export default Mypage;
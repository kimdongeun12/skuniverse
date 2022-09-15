// Login/Login.js : hong-da-hyeon 작업중

import React from 'react';
import {Text , View} from 'react-native';
import styled from "styled-components";

function Login() {
  return (
    <AligmentWrap>
      <Text>Login</Text>
    </AligmentWrap>
  );
}

const AligmentWrap = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export default Login;
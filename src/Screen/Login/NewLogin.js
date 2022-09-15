
import React , {useState , useEffect} from 'react';
import {Text , View} from 'react-native';
import styled from "styled-components";


 function NewLogin() {
   return (
     <NewLoginWrap>
       <Text>회원가입</Text>
     </NewLoginWrap>
   );
 }

const NewLoginWrap = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export default NewLogin;
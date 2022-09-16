// Login/Login.js : hong-da-hyeon 작업중

import React, {useState}  from 'react';
import {Text , View, StyleSheet, TextInput, Button, TouchableOpacity, StatusBar, Alert} from 'react-native';
import styled from "styled-components";
import storage from "../../storage"


const ToNewLogin = ({navigation}) => (
    <ImageBtnWrap>
      <ImageButtonNewLogin title="" onPress = {() => navigation.navigate('NewLogin')}>
      <TextStyleNewLogin>회원가입</TextStyleNewLogin>
      </ImageButtonNewLogin>
    </ImageBtnWrap>
  );


const Login = ({navigation}) => {

    // userId, userPW : 사용자가 입력하는 ID, PW가 담기는 변수(?)
    const [userId, setUserId] = useState('');
    const [userPW, setuserPW] = useState('');

    return (
        <AligmentWrap>
            <LoginExplainWrap>
                <LoginTitle>Login</LoginTitle>
                <AppExplanation>나에게 맞는 예술회관을 찾아보세요!</AppExplanation>
            </LoginExplainWrap>

            
            <TextInput
                style={StyleLoginBox.textInput1}
                placeholder={'아이디'}
                onChangeText={setUserId}
                value={userId}
            />

            <TextInput
                style={StyleLoginBox.textInput2}
                placeholder={'비밀번호'}
                onChangeText={setuserPW}
                value={userPW}
                secureTextEntry={true} //--> 비번 * 해주는 것 같긴 하지만..
            />
            
            <LoginButton
            onPress={() => Alert.alert("id: " + userId + " pw : " + userPW)}>
                <LoginTextWrap>
                    <TextLogin>로그인</TextLogin>
                </LoginTextWrap>
            </LoginButton>

            <ToNewLogin
                    navigation = {navigation}
                />
        </AligmentWrap>
    );  
};

// 전체 layout wrap
const AligmentWrap = styled.View`
   flex: 1;
   justify-content: flex-start;
   align-items: flex-start;
   padding: 30px;
 `

// 아이디 + 비밀번호 창
const StyleLoginBox = StyleSheet.create({
    
    textInput1: {               // 아이디창
      height: 40,
      width: 300,
      borderWidth: 1,
      marginTop: 20,
      backgroundColor: '#fff',
      marginBottom: 5,
    },
    textInput2: {               // 비밀번호창
      height: 40,
      width: 300,
      borderWidth: 1,
      backgroundColor: '#fff',
      marginBottom: 5,
    },
  });

// Login + Explain Wrap
const LoginExplainWrap = styled.View`
    justify-content: flex-start;
    align-items: flex-start;
    marginTop: 30px;
`

  // 'Login' title
const LoginTitle = styled.Text`
    font-size: 40px;
    color: #121212;
    font-weight: 600;
    font-weight: bold;
`

// Login title 아래 설명
const AppExplanation = styled.Text`
    font-size: 15px;
    color: #121212;
    font-weight: 300;
    font-weight: bold;
`

// Login Button
const LoginButton = styled.TouchableOpacity`
  height: 40px;
  width: 300px;
  marginTop: 10px;
  background-color: #9AC4F8;
  color: #121212;
`

// Login Text Wrap : for Text center
const LoginTextWrap = styled.View`
  alignItems: center;
`

// Login Button에서 '로그인' text
const TextLogin = styled.Text`
    font-size: 15px;
    color: #121212;
    font-weight: 200;
    padding: 10px;
    font-weight: bold;
`

// 회원가입 button
const ImageButtonNewLogin = styled.TouchableOpacity`
  marginLeft: 0px;
`

// 회원가입 button wrap
const ImageBtnWrap = styled.View`
  marginTop: 10px;
  padding: 0 ;
`

// 회원가입 text
const TextStyleNewLogin = styled.Text`
  font-size: 14px;
  color: #454343;
  font-weight: bold;
  text-decoration: underline;
`
export default Login;
import React , {useState , useEffect} from 'react';
import {Text , View, StyleSheet, TextInput, Button, TouchableOpacity, StatusBar, Alert} from 'react-native';
import styled from "styled-components";
import storage from "../../storage"
import axios from 'axios';

const ToNewLogin = ({navigation}) => (
    <ImageBtnWrap>
      <ImageButtonNewLogin title="" onPress = {() => navigation.navigate('NewLogin')}>
      <TextStyleNewLogin>회원가입</TextStyleNewLogin>
      </ImageButtonNewLogin>
    </ImageBtnWrap>
  );

function Login ({navigation}) {

  const [Token, SetToken] = useState([]);

    // userId, userPW : 사용자가 입력하는 ID, PW가 담기는 변수(?)
    const [userId, setUserId] = useState('');
    const [userPW, setuserPW] = useState('');

    const GetUserUrl = `${storage.server}/users/login`;
    //console.log(GetUserUrl);

    const login = async (id, password) => {
      try {
        let GetData = await axios({
          method: 'POST',
          url: GetUserUrl,
          data: {
            id: id,
            password: password
          }
        })
        if(GetData.status == 200) {
          navigation.navigate('Mypage',{IdOfUser : userId})
          console.log(GetData.status)
          console.log(GetData.data)
          SetToken(GetData.data.token)
        }
        SetToken(GetData.data)
      } catch(err) {
        console.log(err);
       if(err.response.status == 400) {
         alert("아이디 혹은 비밀번호를 입력해주세요.")
       }
       else {
         alert("아이디 혹은 비밀번호를 틀렸습니다.")
       }
      }
    };
  

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
            {/* onPress={() => Alert.alert("id: " + userId + " pw : " + userPW + PostData) */}
            <LoginButton
              onPress = {() => login(userId, userPW)}>
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
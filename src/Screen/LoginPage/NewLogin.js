
import React , {useState , useEffect} from 'react';
import {Text , View, StyleSheet, TextInput, Alert} from 'react-native';
import styled from "styled-components";
import storage from "../../storage"
import axios from 'axios';

 function NewLogin() {

  const [Token, SetToken] = useState([]);

    // userId, userPW : 사용자가 입력하는 ID, PW가 담기는 변수(?)
    const [userId, setUserId] = useState('');
    const [userPW, setuserPW] = useState('');
    const [userSex, setuserSex] = useState('');
    const [userFrom, setuserFrom] = useState('');
    const [userAge, setuserAge] = useState('');

    const GetUserUrl = `${storage.server}/users/login`;
    //console.log(GetUserUrl);g

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
          navigation.navigate('Home')
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
    <NewLoginWrap>
            <LoginExplainWrap>
                <LoginTitle>회원가입</LoginTitle>
                <AppExplanation>나의 회원정보를 입력해주세요!</AppExplanation>
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
            
            <TextInput
                style={StyleLoginBox.textInput2}
                placeholder={'성별(여:1, 남:0)'}
                onChangeText={setuserSex}
                value={userSex}
            />

            <TextInput
                style={StyleLoginBox.textInput2}
                placeholder={'국적(현지인:0, 외국인:1)'}
                onChangeText={setuserFrom}
                value={userFrom}
            />

            <TextInput
                style={StyleLoginBox.textInput2}
                placeholder={'나이'}
                onChangeText={setuserAge}
                value={userAge}
            />

            <LoginButton
              onPress={() => Alert.alert(userId + " " + userPW + " " + userSex + " " + userFrom + " " + userAge)}>
                <LoginTextWrap>
                    <TextLogin>로그인</TextLogin>
                </LoginTextWrap>
              </LoginButton>
          </NewLoginWrap>
   );
 }

const NewLoginWrap = styled.View`
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
export default NewLogin;
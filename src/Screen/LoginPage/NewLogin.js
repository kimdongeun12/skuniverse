
import React , {useState , useEffect} from 'react';
import {Text , View, StyleSheet, TextInput, Alert} from 'react-native';
import styled from "styled-components";
import storage from "../../storage"
import axios from 'axios';

 function NewLogin({navigation}) {

    const [Token, SetToken] = useState([]);

    // userId, userPW : 사용자가 입력하는 ID, PW가 담기는 변수(?)
    const [userId, setUserId] = useState('');
    const [userPW, setuserPW] = useState('');
    const [userSex, setuserSex] = useState('');
    const [userFrom, setuserFrom] = useState('');
    const [userAge, setuserAge] = useState('');

    const PushUserUrl = `${storage.server}/users`;
    //console.log(PushUserUrl);

    const newlogin = async (id, password, sex, nationality, age) => {
      console.log(PushUserUrl);
      try {
        let GetData = await axios({
          method: 'POST',
          url: PushUserUrl,
          data: {
            id: id,
            password: password,
            sex: sex,
            age: age,
            nationality: nationality
          }
        })
        console.log(GetData.status);
        
        // 우선.. 데이터 몇개 입력안했을때 그냥 db에 저장되는것 같아서 따로 한번더 뺴줌
        if(userId=="" || userPW=="" || userAge=="" || userFrom=="" || userSex==""){
          alert("요청 데이터 오류(데이터 부족 혹은 아이디 중복)")
        }

        // 성공시
        if(GetData.status == 201) {
          
          navigation.navigate('Login')        // 회원가입 성공 시 : Login으로 이동
          console.log(GetData.status)
          console.log(GetData.data)
          SetToken(GetData.data.token)
        }
        SetToken(GetData.data)
      } catch(err) {
        console.log(err);
       if(err.response.status == 400) {
         alert("요청 데이터 오류(데이터 부족 혹은 아이디 중복)")
       }
       else {
         alert("서버 에러")
       }
      }
    };

   return (
    <NewLoginWrap>
            <NewLoginExplainWrap>
                <NewLoginTitle>회원가입</NewLoginTitle>
                <AppExplanation>나의 회원정보를 입력해주세요!</AppExplanation>
            </NewLoginExplainWrap>

            
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
                placeholder={'성별(남:0, 여:1)'}
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

            {/* onPress={() => Alert.alert(userId + " " + userPW + " " + userSex + " " + userFrom + " " + userAge)} */}
            <NewLoginButton
              onPress = {() => newlogin(userId, userPW, userSex, userFrom, userAge)}>
                <NewLoginTextWrap>
                    <TextNewLogin>회원가입</TextNewLogin>
                </NewLoginTextWrap>
            </NewLoginButton>
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
    color: '#121212',
    backgroundColor: '#fff',
    marginBottom: 5,
  },
  textInput2: {               // 비밀번호창
    height: 40,
    width: 300,
    borderWidth: 1,
    color: '#121212',
    backgroundColor: '#fff',
    marginBottom: 5,
  },
});

// NewLogin + Explain Wrap
const NewLoginExplainWrap = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  marginTop: 30px;
`

// 'NewLogin' title
const NewLoginTitle = styled.Text`
  font-size: 40px;
  color: #121212;
  font-weight: 600;
  font-weight: bold;
`

// NewLogin title 아래 설명
const AppExplanation = styled.Text`
  font-size: 15px;
  color: #121212;
  font-weight: 300;
  font-weight: bold;
`

// NewLogin Button
const NewLoginButton = styled.TouchableOpacity`
height: 40px;
width: 300px;
marginTop: 10px;
background-color: #9AC4F8;
color: #121212;
`

// NewLogin Text Wrap : for Text center
const NewLoginTextWrap = styled.View`
alignItems: center;
`

// NewLogin Button에서 '회원가입' text
const TextNewLogin = styled.Text`
  font-size: 15px;
  color: #121212;
  font-weight: 200;
  padding: 10px;
  font-weight: bold;
`

export default NewLogin;
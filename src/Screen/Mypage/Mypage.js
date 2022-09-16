
import React from 'react';
import {Button, Text , View, Alert, StyleSheet, Linking, TouchableOpacity} from 'react-native';
import styled from "styled-components";
import storage from "./../../storage"
import axios from 'axios';

const ca_no = 1; // 문화예술회관 고유번호
const title = '이용약관';

const ToTermPage = ({navigation}) => (
  <ImageBtnWrap>
    <ImageButtonTerm title="" onPress = {() => navigation.navigate('Termpage')}>
    <TextStyleTerms>{title}</TextStyleTerms>
    </ImageButtonTerm>
  </ImageBtnWrap>
);

const ToLogout = ({navigation}) => (
  <ImageBtnWrap>
    <ImageButtonLogout  title="" onPress = {() => navigation.navigate('Login')}>
      <TextStyleLogout>로그아웃</TextStyleLogout>
    </ImageButtonLogout>
  </ImageBtnWrap>
);

function Mypage({navigation, route}) {
  const { IdOfUser, IdOfUserParam } = route.params;
  console.log('user : ', IdOfUser);
  // IdOfUser : Login Page에서 넘어온 ID값

  return (
    <View style={styles.container}>
      
      <View style={styles.item1}>
        <ToLogout
          navigation = {navigation}
        />
      </View>

      <View style={styles.item2}>
        <WrapCOL>

          <ButtonwrapROW>
            <ImageButton title="" onPress = {() => Linking.openURL('https://www.facebook.com/ARKO1004/')}>
              <TextStyleFaceInsta>facebook</TextStyleFaceInsta>
            </ImageButton>
            <ImageButton title="" onPress = {() => Linking.openURL('https://www.instagram.com/arkokorea/')}>
              <TextStyleFaceInsta>instagram</TextStyleFaceInsta>
            </ImageButton>
          </ButtonwrapROW>

          <TextStyleButton title="" onPress = {() => Linking.openURL('https://www.arko.or.kr/')}>
            <TextStyleText>문화예술데이터재단</TextStyleText>
          </TextStyleButton>
          <TextStyleTelEmail>[TEL] 010-1234-5678</TextStyleTelEmail>
          <TextStyleTelEmail>[EMAIL] abcd@gmail.com</TextStyleTelEmail>
          <TextStyleSWversion>소프트웨어 버전 : v1.0 </TextStyleSWversion>

        </WrapCOL>
      </View>

      <View style={styles.item3}>
        <ToTermPage
            navigation = {navigation}
          />
      </View>

    </View>
  );
}

// - layout을 가로로 3등분
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // 혹은 'column'
  },
  item1: {
    flex:0.2,
    marginLeft: 10,
    alignItems: 'flex-start',     // layout에서 왼쪽에 배치
    justifyContent: 'flex-end'    // layout에서 아래족에 배치
  },
  item2: {
    flex: 2,
    alignItems: 'flex-end',       // layout에서 오른쪽에 배치
    justifyContent: 'flex-end'    // layout에서 아래쪽에 배치
  },
  item3: {
    flex: 0.2,
    marginLeft: 10,
    marginBottom: 10,
    alignItems: 'flex-start',     // layout에서 왼쪽에 배치
    justifyContent: 'flex-end'    // layout에서 아래족에 배치
  }
});

// 이용약관 button
const ImageButtonTerm = styled.TouchableOpacity`
  marginLeft: 0px;
`

// 로그아웃 button
const ImageButtonLogout = styled.TouchableOpacity`
  marginLeft: 0px;
`

// facebook, instagram button
const ImageButton = styled.TouchableOpacity`
  background-color: #ffffff;
  marginLeft: 10px;
`

// button 2개를 row로 묶기 (facebook, instagram)
const ButtonwrapROW = styled.View`
  align-items: flex-end;
  flexDirection: row;
`

// button + text 묶기 (좌로 정렬)
const WrapCOL = styled.View`
  padding: 16px;
  flexDirection: column;
  align-itmes: flex-end;
`

// 이용약관 text style
const TextStyleTerms = styled.Text`
  font-size: 14px;
  color: #121212;
  text-decoration: underline;
  font-weight: bold;
`

// 로그아웃 text style
const TextStyleLogout = styled.Text`
  font-size: 14px;
  color: #121212;
  text-decoration: underline;
  font-weight: bold;
`

// facebook, instagram text style
const TextStyleFaceInsta = styled.Text`
  font-size: 14px;
  padding: 5px;
  color: #121212;
  font-weight: bold;
`

// 문화예술데이터재단 button
const TextStyleButton = styled.TouchableOpacity`
`

// '문화예술데이터재단' text style
const TextStyleText = styled.Text`
  font-size: 20px;
  color: #0091d4;
  font-weight: 600;
  padding: 10px;
  text-decoration: underline;
`

// tel, email text style
const TextStyleTelEmail = styled.Text`
  font-size: 15px;
  color: #121212;
  font-weight: 500;
  padding: 10px;
`

// sw version text style
const TextStyleSWversion = styled.Text`
  font-size: 14px;
  color: #121212;
  padding: 10px;
`

// 이용약관, 로그아웃 버튼 wrap
const ImageBtnWrap = styled.View`
  padding: 0px;
`
export default Mypage;
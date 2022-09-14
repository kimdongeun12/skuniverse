
import React from 'react';
import {Button, Text , View, Alert, StyleSheet, Linking, TouchableOpacity} from 'react-native';
import styled from "styled-components";
import storage from "./../../storage"
import axios from 'axios';

const ca_no = 1; // 문화예술회관 고유번호
const url = 'https://www.instagram.com/arkokorea/';   // 한국문화예술위원회 instagram url


function Mypage() {
  //const url = `${storage.server}/culture-arts/${ca_no}`;
  //searchDetail(url);
  //console.log(url);
  return (
    <View style={styles.container}>
      <View style={styles.item1}>
        <TextStyle_terms_logout>로그아웃</TextStyle_terms_logout>
      </View>
      <View style={styles.item2}>
        <WrapCOL>
          <ButtonwrapROW>
            <ImageButton
              title= "Facebook"
              onPress={() => Linking.openURL('https://www.facebook.com/ARKO1004')}
            />
            <ImageButton
              title= "Instagram"
              onPress={() => Linking.openURL('https://www.instagram.com/arkokorea')}
            />
          </ButtonwrapROW>
          <TextStyle_title>문화예술데이터재단</TextStyle_title>
          <TextStyle_tel_email>[TEL] 010-1234-5678</TextStyle_tel_email>
          <TextStyle_tel_email>[EMAIL] abcd@gmail.com</TextStyle_tel_email>
          <TextStyle_SWversion>소프트웨어 버전 : v1.0 </TextStyle_SWversion>
        </WrapCOL>
      </View>
      <View style={styles.item3}>
        {/* <ImageButtons title="" onPress = {() => navigation.navigate('이용약관')}>
          <Text>이용약관</Text>
        </ImageButtons> */}
        <TextStyle_terms_logout>문화누리카드 이용약관</TextStyle_terms_logout>
          {/* title= "문화누리카드 이용약관"
          color="#E91E63"
          onPress = {() => Alert.alert("[문화누리카드 이용약관]", "블라블라블라블라블라블라")} */}
      </View>
    </View>
  );
}

// const searchDetail = async (url) => {
//   try {
//       console.log(url);
//       let temp = await axios({
//         method: 'GET',
//         url:url,
//       })
//       temp = temp.data[0]
//       const cultureArt = {
//         SN: temp.SN,
//         ADDR: temp.ADDR,
//         ADSTRD_NM: temp.ADSTRD_NM,
//         CINEMA_NM: temp.CINEMA_NM,
//         CTPRVN_CD: temp.CTPRVN_CD,
//         EDUSPNTD_NM: temp.EDUSPNTD_NM,
//         EHBLL_NM: temp.EHBLL_NM,
//         FAX_NO: temp.FAX_NO,
//         FCLTY_NM: temp.FCLTY_NM,
//         HMPG_ADDR: temp.HMPG_ADDR,
//         INSTT_NM: temp.INSTT_NM,
//         LA_VAL: temp.LA_VAL,
//         LO_VAL: temp.LO_VAL,
//         OPNNG_YEAR_YY: temp.OPNNG_YEAR_YY,
//         RPRSNTV_NM: temp.RPRSNTV_NM,
//     };
//     console.log(cultureArt)
//   } catch(err) {
//     console.log(err);
//   }
// };

const ImageButtons = styled.TouchableOpacity`
  flex: 1;
  background-color: #ffffff;
  padding: 16px;
  margin-top: 8px;
  border-radius: 8px;
`

// - layout을 가로로 3등분
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // 혹은 'column'
  },
  item1: {
    flex:0.2,
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
    alignItems: 'flex-start',     // layout에서 왼쪽에 배치
    justifyContent: 'flex-end'    // layout에서 아래족에 배치
  }
});

// const MypageWrap = styled.View`
//   flex: 1;
//   flexDirection: row;
//   align-items: flex-end;
// `

// facebook, instagram button
const ImageButton = styled.Button`
  padding: 16px;
  font-size: 10px;
  font-weight: 100;
`

// button 2개를 row로 묶기
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

// 이용약관, 로그아웃 text style
const TextStyle_terms_logout = styled.Text`
  padding: 12px;
  font-size: 14px;
  color: 'rgb(45,45,40)';
  font-weight: 500;
`

// '문화예술데이터재단' text style
const TextStyle_title = styled.Text`
  font-size: 20px;
  color: #121212;
  font-weight: 600;
  padding: 10px;
`

// tel, email text style
const TextStyle_tel_email = styled.Text`
  font-size: 15px;
  color: #121212;
  font-weight: 500;
  padding: 10px;
`

// sw version text style
const TextStyle_SWversion = styled.Text`
  font-size: 14px;
  color: #121212;
  padding: 10px;
`

// 후에 이용약관은 ... text button 식으로 둘 생각
const Button_term = styled.Button`
  padding: 3px;
  font-size: 8px;
  font-weight: 100;
`

export default Mypage;
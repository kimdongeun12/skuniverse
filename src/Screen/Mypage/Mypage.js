
import React from 'react';
import {Button, Text , View, Alert} from 'react-native';
import styled from "styled-components";
import storage from "./../../storage"
import axios from 'axios';

const ca_no = 1; // 문화예술회관 고유번호

function Mypage() {
  //const url = `${storage.server}/culture-arts/${ca_no}`;
  //searchDetail(url);
  //console.log(url);
  return (
       <MypageWrap>
            {/* <Text>Its my page</Text> */}
            <WrapCOL>
              <ButtonwrapROW>
                <ImageButton
                title= "Facebook"
                color= "color(45,45,40)"
                onPress={() => Alert.alert("facebook~")}
                />
                <ImageButton
                title= "Instagram"
                color= "color(45,45,40)"
                onPress={() => Alert.alert("instagram~")}
                />
              </ButtonwrapROW>
              <TextStyle>문화예술데이터재단</TextStyle>
              <TextStyle_tel_email>[TEL] 010-1234-5678</TextStyle_tel_email>
              <TextStyle_tel_email>[EMAIL] abcd@gmail.com</TextStyle_tel_email>
              <TextStyle_SWversion> 소프트웨어 버전 : v1.0 </TextStyle_SWversion>
            </WrapCOL>
       </MypageWrap>
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

const MypageWrap = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`
const ImageButton = styled.Button`
  padding: 16px;
`
const ButtonwrapROW = styled.View`
  padding: 16px;
  flexDirection: row;
`
const WrapCOL = styled.View`
  padding: 16px;
`
const TextStyle = styled.Text`
  color: 'rgb(0,0,0)';
  padding: 10px;
`
const TextStyle_tel_email = styled.Text`
  color: 'rgb(0,0,0)';
  padding: 10px;
`
const TextStyle_SWversion = styled.Text`
  color: 'rgb(45,45,40)';
  padding: 10px;
`

export default Mypage;
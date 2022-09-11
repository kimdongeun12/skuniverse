
import React from 'react';
import {Text , View} from 'react-native';
import styled from "styled-components";
import storage from "./../../storage"
import axios from 'axios';

const ca_no = 1; // 문화예술회관 고유번호

function Mypage() {
  const url = `${storage.server}/culture-arts/${ca_no}`;
  searchDetail(url);
  return (
    <MypageWrap>
      <Text>Mypage</Text>
    </MypageWrap>
  );
}

const searchDetail = async (url) => {
  try {
      console.log(url);
      let temp = await axios({
        method: 'GET',
        url:url,
      })
      temp = temp.data[0]
      const cultureArt = {
        SN: temp.SN,
        ADDR: temp.ADDR,
        ADSTRD_NM: temp.ADSTRD_NM,
        CINEMA_NM: temp.CINEMA_NM,
        CTPRVN_CD: temp.CTPRVN_CD,
        EDUSPNTD_NM: temp.EDUSPNTD_NM,
        EHBLL_NM: temp.EHBLL_NM,
        FAX_NO: temp.FAX_NO,
        FCLTY_NM: temp.FCLTY_NM,
        HMPG_ADDR: temp.HMPG_ADDR,
        INSTT_NM: temp.INSTT_NM,
        LA_VAL: temp.LA_VAL,
        LO_VAL: temp.LO_VAL,
        OPNNG_YEAR_YY: temp.OPNNG_YEAR_YY,
        RPRSNTV_NM: temp.RPRSNTV_NM,
    };
    console.log(cultureArt)
  } catch(err) {
    console.log(err);
  }
};

const MypageWrap = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export default Mypage;
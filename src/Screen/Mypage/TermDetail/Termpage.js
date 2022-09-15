
import React , {useState , useEffect} from 'react';
import {Text , View } from 'react-native';
import styled from "styled-components";

function Termpage() {
        return (          
        <TermpageWrap>
          {/* <BannerWrap>
            <BannerImage
            source={{
              uri: 'https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_1280.jpg',
            }}
            resizeMode= "cover"
            />
          </BannerWrap> */}
            <TextContent>이용약관 블라블라블라블라~</TextContent>
        </TermpageWrap>
    );
}

const TermpageWrap = styled.View`
  padding : 16px 8px 0;
  background-color: #ffffff;
  flex: 1;
`
const BannerWrap = styled.View`
  width: 100%;
  padding: 0 8px;
  margin-bottom: 16px;
  overflow: hidden;
`
const BannerImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 16px;
`
const TextContent = styled.Text`
  font-size: 13px;
  padding: 5px;
  color: #121212;
`


export default Termpage;
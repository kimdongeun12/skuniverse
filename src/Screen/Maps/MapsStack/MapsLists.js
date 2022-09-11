
import React from 'react';
import {Text , View , Button , TouchableOpacity , Image , Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
import styled from "styled-components";

function MapsLists({navigation}) {
  return (
    <MapsWrap>
      <BannerWrap>
            <BannerImage
            source={{
              uri: 'https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_1280.jpg',
            }}
            resizeMode= "cover"
            />
      </BannerWrap>
      <ListsItemWrap>
        <ListsItem>
          <ItemImgWrap>
            <ItemImage
            source={{
              uri: 'https://tongglobalcdn.visitkorea.or.kr/cms/resource_etc/55/2390155_image_1.jpg',
            }}
            resizeMode= "cover"
            />
          </ItemImgWrap>
          <ItemInfoWrap>
            <ItemTitle>서울문화센터</ItemTitle>
            <ItemLocation ellipsizeMode='tail' numberOfLines={2}>지역명입니다.지역명입니다.지역명입니다.지역명입니다.지역명입니다.지역명입니다.지역명입니다.지역명입니다.지역명입니다.지역명입니다.</ItemLocation>
            <ItemDesc>상세 정보 및 예매</ItemDesc>
          </ItemInfoWrap>
        </ListsItem>
        <ListsItem>
          <ItemImgWrap>
            <ItemImage
            source={{
              uri: 'https://tongglobalcdn.visitkorea.or.kr/cms/resource_etc/55/2390155_image_1.jpg',
            }}
            resizeMode= "cover"
            />
          </ItemImgWrap>
          <ItemInfoWrap>
            <ItemTitle>서울문화센터</ItemTitle>
            <ItemLocation ellipsizeMode='tail' numberOfLines={2}>지역명입니다.지역명입니다.지역명입니다.지역명입니다.지역명입니다.지역명입니다.지역명입니다.지역명입니다.지역명입니다.지역명입니다.</ItemLocation>
            <ItemDesc>상세 정보 및 예매</ItemDesc>
          </ItemInfoWrap>
        </ListsItem>
        <ListsItem>
          <ItemImgWrap>
            <ItemImage
            source={{
              uri: 'https://tongglobalcdn.visitkorea.or.kr/cms/resource_etc/55/2390155_image_1.jpg',
            }}
            resizeMode= "cover"
            />
          </ItemImgWrap>
          <ItemInfoWrap>
            <ItemTitle>서울문화센터</ItemTitle>
            <ItemLocation ellipsizeMode='tail' numberOfLines={2}>지역명입니다.지역명입니다.지역명입니다.지역명입니다.지역명입니다.지역명입니다.지역명입니다.지역명입니다.지역명입니다.지역명입니다.</ItemLocation>
            <ItemDesc>상세 정보 및 예매</ItemDesc>
          </ItemInfoWrap>
        </ListsItem>
      </ListsItemWrap>
    </MapsWrap>
  );
}


const MapsWrap = styled.ScrollView`
  margin-top: 16px;
`
const BannerWrap = styled.View`
  width: 100%;
  padding: 0 8px;
  margin-bottom: 8px;
  overflow: hidden;
`
const BannerImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 16px;
`
const ListsItemWrap = styled.View`
  flex: 1;
  padding: 0 8px;
`

const ListsItem = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  background-color: #ffffff;
  padding: 16px;
  margin-top: 8px;
  border-radius: 8px;
  justify-content: center;
`

const ItemImgWrap = styled.View`
  flex: 4;
  height: 100px;
`

const ItemImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`
const ItemInfoWrap = styled.View`
  flex: 8;
  height: 100%;
  padding-left: 16px;
`
const ItemTitle = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: #121212;
  margin-bottom: 8px;
`
const ItemLocation = styled.Text`
   font-size: 16px;
`
const ItemDesc = styled.Text`
  font-size: 12px;
  color: #0091d4;
  font-weight: bold;
`


export default MapsLists;
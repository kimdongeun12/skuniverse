
import React , {useState , useEffect} from 'react';
import {Text , View , SafeAreaView , Button , TouchableOpacity, FlatList , Image , Dimensions} from 'react-native';
import styled from "styled-components";
import storage from "../../../storage"
import axios from 'axios';


// const ItemLists = [
//   {
//     id: 1,
//     title: "서울문화센터",
//     location : "지역명입니다."
//   },
//   {
//     id: 2,
//     title: "서울문화센터",
//     location : "지역명입니다."
//   },
//   {
//     id: 3,
//     title: "서울문화센터",
//     location : "지역명입니다."
//   },
//   {
//     id: 4,
//     title: "서울문화센터",
//     location : "지역명입니다."
//   },
//   {
//     id: 5,
//     title: "서울문화센터",
//     location : "지역명입니다."
//   },
//   {
//     id: 6,
//     title: "서울문화센터",
//     location : "지역명입니다."
//   },
//   {
//     id: 7,
//     title: "서울문화센터",
//     location : "지역명입니다."
//   },
// ];

const MapItems = ({title , location}) => (
  <View>
    <ListsItemBtn>
      <ItemImgWrap>
        <ItemImage
        source={{
          uri: 'https://tongglobalcdn.visitkorea.or.kr/cms/resource_etc/55/2390155_image_1.jpg',
        }}
        resizeMode= "cover"
        />
      </ItemImgWrap>
      <ItemInfoWrap>
        <ItemTitle>{title}</ItemTitle>
        <ItemLocation ellipsizeMode='tail' numberOfLines={2}>{location}</ItemLocation>
        <ItemDesc>상세 정보 및 예매</ItemDesc>
      </ItemInfoWrap>
    </ListsItemBtn>
  </View>
);

function MapsLists({navigation , route}) {
  const { districtParams, otherParam } = route.params;
  const [ItemLists, SetSearch] = useState([]);
  const url = `${storage.server}/culture-arts/district/${districtParams}/1`;
  
  
  const searchDetail = async (url) => {
    try {
      // console.log(url);
      let GetData = await axios({
        method: 'GET',
        url: url,
      })
      // console.log(GetData.data)
      console.log(GetData.data)
      SetSearch(GetData.data)
    } catch(err) {
      console.log(err);
    }
  };

  useEffect(() => {
    searchDetail(url)
  }, [otherParam]);

  return (
    <MapsWrap>
      {console.log(ItemLists)}
      <BannerWrap>
        <BannerImage
        source={{
          uri: 'https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_1280.jpg',
        }}
        resizeMode= "cover"
        />
      </BannerWrap>
      <ListsItem
        data={ItemLists}
        renderItem={({item}) => <MapItems title={item.fclty_nm} location = {item.addr}/>}
        keyExtractor={item => item.ca_no}
      />
    </MapsWrap>
  );
}


const MapsWrap = styled.View`
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

const ListsItem = styled.FlatList`
  flex: 1;
`
const ListsItemBtn = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  background-color: #ffffff;
  padding: 0 8px 16px;
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
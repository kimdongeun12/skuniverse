
import React , {useState , useEffect} from 'react';
import {Text , View , SafeAreaView , Button , TouchableOpacity, FlatList , Image , Dimensions} from 'react-native';
import styled from "styled-components";
import axios from 'axios';


let parseString = require('react-native-xml2js').parseString;


const API_KEY = '91da4ed2f8694f46b51e72c5c050061b';


const MapItems = ({navigation ,title , fcltynm , poster , genrenm , startDate
  , endDate , detailParams}) => (
  <ListItem>
    <ListsItemBtn onPress = {() => navigation.navigate('ItemDetail' , {detailParams})}>
      <ItemImgWrap>
        <ItemImage
        source={{
          uri: `${poster}`,
        }}
        resizeMode= "cover"
        />
      </ItemImgWrap>
      <ItemInfoWrap>
        <ItemGenrenm>{genrenm}</ItemGenrenm>
        <ItemTitle>{title}</ItemTitle>
        <ItemLocation ellipsizeMode='tail' numberOfLines={2}>{fcltynm}</ItemLocation>
        <ItemDesc>
          {
           `${startDate} ~ ${endDate}`
           }
        </ItemDesc>
      </ItemInfoWrap>
    </ListsItemBtn>
  </ListItem>
);

function MapsLists({navigation , route}) {
  const { districtParams, otherParam } = route.params;
  const [ItemLists, SetSearch] = useState([]);
  const [PageCount, SetPage] = useState(1);
  const [ShowPage, SetShowPage] = useState(5);
  // const [getStartDate, setStartDate] = useState();
  // const [getEndDate, setEndDate] = useState();

  let today = new Date();
  let StartTime = {
    year: today.getFullYear(),  //현재 년도
    month: (
      today.getMonth() + 1) > 9 
      ? 
      (today.getMonth() + 1) : '0' + (today.getMonth() + 1), // 현재 월
    date: today.getDate(), // 현제 날짜
  };

  let EndTime = {
    year: (
      (today.getMonth() + 5 ) <= 12 ? (today.getFullYear()) : (today.getFullYear() + 1)
    ),
    month: (
      (today.getMonth() + 4 ) > 12 ?
      ('01') : ((today.getMonth() + 4) > 9  ? (today.getMonth() + 4) : '0' + (today.getMonth() + 4))
    ), // 현재 월
    date: today.getDate(), // 현제 날짜
  };

  const url = `https://www.kopis.or.kr/openApi/restful/pblprfr?service=${API_KEY}&stdate=${StartTime.year}${StartTime.month}${StartTime.date}&eddate=${EndTime.year}${EndTime.month}${EndTime.date}&cpage=${PageCount}&rows=${ShowPage}&shprfnmfct=${districtParams.fclty_nm}`;
  
  
  const searchDetail = async (url) => {
    try {
      // console.log(url);
      let GetData = await axios({
        method: 'GET',
        url: url,
      })
      // console.log(GetData.data)
      parseString(GetData.data, function (err, result) {
        let ResultDb = JSON.parse(JSON.stringify(result));
        let ResultData = ResultDb.dbs.db;
        SetSearch([...ItemLists, ...ResultData]);
      });
    } catch(err) {
      console.log(err);
    }
  };

  useEffect(() => {
    _handleLoadMore()
    searchDetail(url)
  }, [otherParam]);

  const _handleLoadMore = () => { // 스크롤이 끝에 달하였을경우
    SetPage(PageCount + 1)
    if(ItemLists.length % ShowPage == 0){
      searchDetail(url);
    }else{
      console.log('데이터가 없엉')
      return false;
    }
  }

  const renderItem = ({item}) => (
    <MapItems 
      navigation={navigation} 
      detailParams= { {fclty_nm : item.fclty_nm , mt20id : item.mt20id } }
      title={item.prfnm} 
      fcltynm = {item.fcltynm}
      poster = {item.poster}
      genrenm = {item.genrenm}
      startDate = {item.prfpdfrom}
      endDate = {item.prfpdto}
    />
  )
  const Divider = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: 'black',
        }}
      />
    );
  }

  return (
    <MapsWrap>
      <BannerWrap>
        <BannerImage
          source={{
            uri : "http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg",
          }}
          resizeMode= "cover"
        />
      </BannerWrap>
      <ListsItem
        data={ItemLists}
        extraData={ItemLists}
        onEndReached={_handleLoadMore}
        onEndReachedThreshold={0.3}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
        keyExtractor={(item , index) => index}
      />
    </MapsWrap>
  );
}

const MapsWrap = styled.SafeAreaView`
  padding : 16px 8px 0;
  background-color: #ffffff;
  flex: 1;
  flex-wrap: wrap;
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
  width: 100%;
`

const ListItem = styled.View`
  flex: 1;
  width: 100%;
`

const ListsItemBtn = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  background-color: #ffffff;
  width: 100%;
  height: 200px;
  padding: 0 8px 16px;
  margin-top: 16px;
  border-radius: 8px;
  justify-content: center;
`

const ItemImgWrap = styled.View`
  flex: 4;
  height: 100%;
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
const ItemGenrenm = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #0091d4;
  margin-bottom: 8px;
`
const ItemLocation = styled.Text`
  font-size: 16px;
  margin-bottom: 8px;
`
const ItemTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #121212;
  margin-bottom: 8px;
`
const ItemDesc = styled.Text`
  font-size: 12px;
  color: #0091d4;
  font-weight: bold;
`


export default MapsLists;
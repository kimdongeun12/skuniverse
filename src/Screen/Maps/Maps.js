
import React , {useState , useEffect} from 'react';
import {Text , View , Button , TouchableOpacity , FlatList , Picker} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import styled from "styled-components";
import storage from "../../storage"
import axios from 'axios';

// const ca_no = 1; // 문화예술회관 고유번호



const MapListItem = ({navigation, title ,districtParams , width}) => (
  <ImageBtnWrap width = {width}>
    <ImageButton title="" onPress = {() => navigation.navigate('MapsLists' , {districtParams})}>
      <Text>{title}</Text>
    </ImageButton>
  </ImageBtnWrap>
);


function Maps({navigation}) {

  const [containerWidth, setContainerWidth] = useState(0);
  const numColumns = 2;

  const [MapCityLists, SetMapCityLists] = useState([]);
  const [MapDistrictLists, SetMapDistrictLists] = useState([]);
  const [SelectCity , SetCity] = useState(11)
  
  const CityUrl = `${storage.server}/culture-arts/city/`;
  const DistrictUrl = `${storage.server}/culture-arts/city/${SelectCity}`;
  
  
  const SearchCityDetail = async (url) => {
    try {
      let GetData = await axios({
        method: 'GET',
        url: url,
      })
      SetMapCityLists(GetData.data)
    } catch(err) {
      console.log(err);
    }
  };

  const SearchDistrictDetail = async (url) => {
    try {
      // console.log(url);
      let GetData = await axios({
        method: 'GET',
        url: url,
      })
      SetMapDistrictLists(GetData.data)
    } catch(err) {
      console.log(err);
    }
  };

  useEffect(() => {
    SetCity(11)
    SearchCityDetail(CityUrl)
    SearchDistrictDetail(DistrictUrl)
  }, []);

  useEffect(() => {
    SearchDistrictDetail(DistrictUrl)
  }, [SelectCity]);
  


  return (
    <MapsWrap horizontal={false}>
      <View>
        <Dropdown
          data={MapCityLists}
          value={SelectCity}
          maxHeight={300}
          labelField="city_nm"
          valueField="city_cd"
          search={false}
          onChange={item => {
            console.log(item.city_cd)
            SetCity(item.city_cd);
          }}
        />
      </View>
      <ItemListWrap numColumns={2}>
        <ListsItem
          data={MapDistrictLists}
          onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
          renderItem={({item}) => (
            <MapListItem
            navigation = {navigation}
            title={item.district_nm}
            districtParams={item.district_cd}
            width={containerWidth / numColumns}
          />
          )}
          keyExtractor={(item , index) => index}
          numColumns={numColumns}
        />
      </ItemListWrap>
    </MapsWrap>
  );
}


const MapsWrap = styled.View`
  flex: 1;
  width: 100%;
  padding: 16px 8px 0;
`
const ItemListWrap = styled.View`
  flex: 1;
`

const ListsItem = styled.FlatList`
  flex: 1;
`
const ImageBtnWrap = styled.View`
  width: ${(props) => props.width}px;
  padding: 0 8px 16px;
`

const ImageButton = styled.TouchableOpacity`
  flex: 1;
  background-color: #ffffff;
  padding: 16px;
  margin-top: 8px;
  border-radius: 8px;
`

export default Maps;

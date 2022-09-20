
import React , {useState , useEffect} from 'react';
import {Text , View , StyleSheet} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import styled from "styled-components";
import storage from "../../storage"
import axios from 'axios';

// const ca_no = 1; // 문화예술회관 고유번호




const MapListItem =  ({navigation , districtParams , imageUrl , title , width}) => (
  <ImageBtnWrap width={width} >
    <ImageButton title="" onPress = {() => navigation.navigate('MapsLists' , {districtParams , imageUrl})}>
      <ItemImgWrap>
        <ItemImage
        source={{
          uri: "http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg", // 해당 극장 이미지가 들어갔으면 좋겠음 , 로고도 괜찮을거같아요
        }}
        resizeMode= "cover"
        />
      </ItemImgWrap>
      <ImageText>{title}</ImageText>
    </ImageButton>
  </ImageBtnWrap>
);

function Maps({navigation}) {
  
  const [containerWidth, setContainerWidth] = useState(0);
  const numColumns = 2;

  const [MapCityLists, SetMapCityLists] = useState([]);
  const [MapDistrictLists, SetMapDistrictLists] = useState([]);
  const [MapDistrictHallLists, SetMapDistrictHallLists] = useState([]);

  const [SelectCity , SetCity] = useState(11)
  const [SelectDistrict , SetDistrict] = useState(11050)
  
  const CityUrl = `${storage.server}/culture-arts/city/`;
  const DistrictUrl = `${storage.server}/culture-arts/city/${SelectCity}`; 
  const DistrictHallUrl = `${storage.server}/culture-arts/district/${SelectDistrict}/1`;

  const SearchCityDetail = async (url) => {
    try {
      let GetCityData = await axios({
        method: 'GET',
        url: url,
      })
      SetMapCityLists(GetCityData.data)
    } catch(err) {
      console.log(err);
    }
  };

  const SearchDistrictDetail = async (url) => {
    try {
      let GetDistrictData = await axios({
        method: 'GET',
        url: url,
      })
      SetMapDistrictLists(GetDistrictData.data)
    } catch(err) {
      console.log(err);
    }
  };
  
  const SearchDistrictHallDetail = async (url) => {
    try {
      let GetDistrictHallData = await axios({
        method: 'GET',
        url: url,
      })
      SetMapDistrictHallLists(GetDistrictHallData.data)
    } catch(err) {
      console.log(err);
    }
  };

  useEffect(() => {
    SetCity(11)
    SearchCityDetail(CityUrl)
    SearchDistrictDetail(DistrictUrl)
    SearchDistrictHallDetail(DistrictHallUrl)
  }, []);

  useEffect(() => {
    SearchDistrictDetail(DistrictUrl)
  }, [SelectCity]);

  useEffect(() => {
    SearchDistrictHallDetail(DistrictHallUrl)
  }, [SelectDistrict]);
  

  const renderItem = ({item}) => (
    <MapListItem
      key={item.key}
      navigation = {navigation}
      title={item.fclty_nm}
      imageUrl = { item.img_url}
      districtParams={{district_cd : item.district_cd , fclty_nm : item.fclty_nm }}
      width={containerWidth}
    />
  )

  return (
    <MapsWrap horizontal={false}>
    {console.log( MapDistrictHallLists , MapDistrictHallLists.length)}
      <SelectWrap>
        <Dropdown
          style={styles.dropdown}
          data={MapCityLists}
          value={SelectCity}
          maxHeight={300}
          labelField="city_nm"
          valueField="city_cd"
          search={false}
          onChange={item => {
            SetCity(item.city_cd);
          }}
        />
        <Dropdown
          style={styles.dropdown}
          data={MapDistrictLists}
          value={SelectDistrict}
          maxHeight={300}
          labelField="district_nm"
          valueField="district_cd"
          search={false}
          onChange={item => {
            SetDistrict(item.district_cd);
          }}
        />
      </SelectWrap>
      <ItemListWrap>
        <ListsItem
          data={MapDistrictHallLists}
          onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
          renderItem={renderItem}
          keyExtractor={(item , index) => index}
        />
      </ItemListWrap>
    </MapsWrap>
  );
}


const MapsWrap = styled.SafeAreaView`
  flex: 1;
  width: 100%;
`

const SelectWrap = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 8px;
`

const ItemListWrap = styled.View`
  flex: 1;
`

const ListsItem = styled.FlatList`
  flex: 1;
`

const ImageBtnWrap = styled.View`
  width: ${(props) => props.width}px;
  height: 250px;
  padding: 0 8px 16px;;
`

const ImageButton = styled.TouchableOpacity`
  flex: 1;
  background-color: #ffffff;
  padding: 16px;
  margin-top: 8px;
  border-radius: 8px;
`

const ItemImgWrap = styled.View`
  flex: 1;
  height: 100px;
`

const ItemImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 8px
`

const ImageText = styled.Text`
  padding-top: 8px;
  width: 100%;
  text-align: center;
`


const styles = StyleSheet.create({
  dropdown: {
    flex: 1,
    width: 200,
    height: 50,
    backgroundColor: 'white',
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  }
});

export default Maps;

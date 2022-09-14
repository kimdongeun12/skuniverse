
import React , {useState , useEffect} from 'react';
import {Text , View , Button , TouchableOpacity , FlatList , Picker} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styled from "styled-components";
import storage from "../../storage"
import axios from 'axios';

// const ca_no = 1; // 문화예술회관 고유번호


const MapListItem = ({navigation, title , width}) => (
  <ImageBtnWrap width = {width}>
    <ImageButton title="" onPress = {() => navigation.push('MapsLists')}>
      <Text>{title}</Text>
    </ImageButton>
  </ImageBtnWrap>
);


function Maps({navigation}) {

  const [containerWidth, setContainerWidth] = useState(0);
  const numColumns = 2;

  const [MapLists, SetMapsLists] = useState([]);
  const [SelectCategory , SetCategory] = useState('')
  const url = `${storage.server}/culture-arts/city/${SelectCategory}`;
  
  
  const SearchDetail = async (url) => {
    try {
      // console.log(url);
      let GetData = await axios({
        method: 'GET',
        url: url,
      })
      // console.log(GetData.data)
      GetData.data.map((item) => {
        MapLists.push(item)
      })
    } catch(err) {
      console.log(err);
    }
  };

  useEffect(() => {
    SetCategory('')
    SearchDetail(url)
    console.log(MapLists)
  }, [SelectCategory]);
  
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];
  const [value, setValue] = useState(null);
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState([
  //   {label: 'Apple', value: 'apple'},
  //   {label: 'Banana', value: 'banana'}
  // ]);

  return (
    <MapsWrap horizontal={false}>
      <View>
        <Dropdown
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          searchPlaceholder="Search..."
          value={value}
          search={false}
          onChange={item => {
            setValue(item.value);
          }}
        />
      </View>
      {/* <ItemListWrap numColumns={2}>
        <ListsItem
          data={MapLists}
          onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
          renderItem={({item}) => (
            <MapListItem
            navigation = {navigation}
            title={item.city_nm}
            width={containerWidth / numColumns}
          />
          )}
          keyExtractor={(item , index) => index}
          numColumns={numColumns}
        />
      </ItemListWrap> */}
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
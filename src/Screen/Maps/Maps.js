
import React , {useState} from 'react';
import {Text , View , Button , TouchableOpacity , FlatList} from 'react-native';
import styled from "styled-components";

const MapLists = [
  {
    id: 1,
    title: "강남구",
  },
  {
    id: 2,
    title: "노원구",
  },
  {
    id: 3,
    title: "마포구",
  },
  {
    id: 4,
    title: "집가고싶다",
  },
];

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
  return (
    <MapsWrap horizontal={false}>
      <ItemListWrap numColumns={2}>
        <ListsItem
          data={MapLists}
          onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
          renderItem={({item}) => (
            <MapListItem
            navigation = {navigation}
            title={item.title}
            width={containerWidth / numColumns}
          />
          )}
          keyExtractor={item => item.id}
          numColumns={numColumns}
        />
      </ItemListWrap>
    </MapsWrap>
  );
}


const MapsWrap = styled.View`
  flex: 1;
  width: 100%;
  padding: 16px 8px 40px;
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
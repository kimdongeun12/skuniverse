import React from 'react';
import {Text , View , SafeAreaView , Button , TouchableOpacity, FlatList , Image , Dimensions} from 'react-native';
import styled from "styled-components";
import storage from "../storage"
import axios from 'axios';

const ItemDetail = ({ navigation , route }) => {
    const { detailParams, otherParam } = route.params;
    console.log(route.params)
    return (
        <ItemDetailWrap>

        </ItemDetailWrap>
    );
}


const ItemDetailWrap = styled.View`
  flex: 1;
  width: 100%;
  padding: 16px 8px 0;
`

export default ItemDetail;
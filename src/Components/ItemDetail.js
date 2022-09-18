import React , {useState , useEffect} from 'react';
import {Text , View , SafeAreaView , Button , TouchableOpacity, FlatList , Image , Dimensions} from 'react-native';
import styled from "styled-components";
import storage from "../storage"
import axios from 'axios';

const ItemDetail = ({ navigation , route }) => {
    const { detailParams, otherParam } = route.params;
    const [ItemInfo, SetSearchInfo] = useState([]);
    const url = `${storage.server}/culture-arts/${detailParams.ca_no}`;
  
    const searchDetail = async (url) => {
        try {
        // console.log(url);
        let GetData = await axios({
            method: 'GET',
            url: url,
        })
        // console.log(GetData.data)
            SetSearchInfo(GetData.data)
        } catch(err) {
        console.log(err);
        }
    };

    useEffect(() => {
        searchDetail(url)
    }, [otherParam]);

    return (
        <ItemDetailWrap>
            <ItemBannerImageWrap>
                <ItemBannerImage>

                </ItemBannerImage>
            </ItemBannerImageWrap>
            <ItemInfoWrap>
                <ItemInfoTitle></ItemInfoTitle>
                <ItemInfoDesc></ItemInfoDesc>
                <ItemInfoLocation></ItemInfoLocation>
            </ItemInfoWrap>
        </ItemDetailWrap>
    );
}


const ItemDetailWrap = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  padding: 16px 8px 0;
`
const ItemBannerImageWrap = styled.View`
  flex: 1;
`
const ItemBannerImage = styled.Image`
  flex: 1;
`

const ItemInfoWrap = styled.View`
`
const ItemInfoTitle = styled.Text`
`
const ItemInfoDesc = styled.Text`
`
const ItemInfoLocation = styled.Text`
`


export default ItemDetail;
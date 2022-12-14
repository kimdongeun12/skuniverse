import React , {useState , useEffect} from 'react';
import { Tab , TabView } from "@rneui/themed";
import styled from "styled-components";
import axios from 'axios';

let parseString = require('react-native-xml2js').parseString;


const API_KEY = '91da4ed2f8694f46b51e72c5c050061b';

const ItemDetail = ({ navigation , route }) => {
    const { detailParams, otherParam } = route.params;
    const [ItemInfo, SetSearchInfo] = useState([]);
    const [TabIndex, setTabIndex] = useState(0);
    // const url = `http://www.kopis.or.kr/openApi/restful/pblprfr/${detailParams.mt20id[0]}?service=${API_KEY}`;
    const url = `https://www.kopis.or.kr/openApi/restful/pblprfr/${detailParams.mt20id[0]}?service=${API_KEY}`;

    // const url = `${storage.server}/culture-arts/${detailParams.mt20id}`;
  
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
                SetSearchInfo(ResultDb.dbs.db[0])
            });
        } catch(err) {
        console.log(err);
        }
    };

    useEffect(() => {
        setTabIndex(0)
        searchDetail(url)
    }, [otherParam]);

    return (
        <ItemDetailWrap>
            {console.log(ItemInfo)}
            <DetailScrollView>
                <ItemBannerImageWrap>
                    <ItemBannerImage
                        source={{
                            uri : `${ItemInfo.poster}`,
                        }}
                        resizeMode= "cover"
                    />
                </ItemBannerImageWrap>
                <ItemInfoWrap>
                    <ItemInfoTitle>
                        {ItemInfo.prfnm}
                    </ItemInfoTitle>
                    <ItemInfoLocation>{ItemInfo.fcltynm}</ItemInfoLocation>
                    <ItemInfoDesc>
                        <ItemInfoDescDetailWrap>
                            <ItemInfoDescDetailTitle>?????? ??????</ItemInfoDescDetailTitle>
                            <ItemInfoDescDetailText>{ItemInfo.prfpdfrom} ~ {ItemInfo.prfpdto}</ItemInfoDescDetailText>
                        </ItemInfoDescDetailWrap>
                        <ItemInfoDescDetailWrap>
                            <ItemInfoDescDetailTitle>?????? ??????</ItemInfoDescDetailTitle>
                            <ItemInfoDescDetailText>{ItemInfo.prfruntime}</ItemInfoDescDetailText>
                        </ItemInfoDescDetailWrap>
                        <ItemInfoDescDetailWrap>
                            <ItemInfoDescDetailTitle>?????? ??????</ItemInfoDescDetailTitle>
                            <ItemInfoDescDetailText>{ItemInfo.prfage}</ItemInfoDescDetailText>
                        </ItemInfoDescDetailWrap>
                        <ItemInfoDescDetailWrap>
                            <ItemInfoDescDetailTitle>?????? ????????????</ItemInfoDescDetailTitle>
                            <ItemInfoDescDetailText>{ItemInfo.pcseguidance}</ItemInfoDescDetailText>
                        </ItemInfoDescDetailWrap>
                        <ItemInfoDescDetailWrap>
                            <ItemInfoDescDetailTitle>?????? ??????</ItemInfoDescDetailTitle>
                            <ItemInfoDescDetailText>{ItemInfo.genrenm}</ItemInfoDescDetailText>
                        </ItemInfoDescDetailWrap>
                        <ItemInfoDescDetailWrap>
                            <ItemInfoDescDetailTitle>?????? ??????</ItemInfoDescDetailTitle>
                            <ItemInfoDescDetailText>{ItemInfo.dtguidance}</ItemInfoDescDetailText>
                        </ItemInfoDescDetailWrap>
                    </ItemInfoDesc>
                    
                </ItemInfoWrap>
            </DetailScrollView>
        </ItemDetailWrap>
    );
}


const ItemDetailWrap = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  padding: 16px 8px 0;
  background-color: #ffffff;
`
const DetailScrollView = styled.ScrollView`
  flex: 1;
  width: 100%;
`
const ItemBannerImageWrap = styled.View`
  flex: 1;
`
const ItemBannerImage = styled.Image`
  width: 100%;
  height: 500px;
  
`

const ItemInfoWrap = styled.View`
    padding: 16px 8px;
`
const ItemInfoTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 8px;
`
const ItemInfoLocation = styled.Text`
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 8px;
`
const ItemInfoDesc = styled.View`
    margin-top: 16px;
`
const ItemInfoDescDetailWrap = styled.View`
    flex: 1;
    margin-bottom: 16px;
`
const ItemInfoDescDetailTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 8px;
    font-weight: bold;
`
const ItemInfoDescDetailText = styled.Text`
    font-size: 14px;
`

export default ItemDetail;
import React from 'react';
import {Text , View , SafeAreaView , Button , TouchableOpacity, FlatList , Image , Dimensions} from 'react-native';

const ItemDetail = ({ navigation , route }) => {
    const { detailParams, otherParam } = route.params;
    console.log(route.params)
    return (
        <>
            <View>
                <Text>detailParams</Text>
            </View>
        </>
    );
}

export default ItemDetail;
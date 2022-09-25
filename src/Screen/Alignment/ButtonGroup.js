import React, { useState,useEffect }  from 'react';
import {Text , View,  Alert, StyleSheet,SafeAreaView,
  FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';
import styled from "styled-components";
import { Chip, Button, RadioButton } from 'react-native-paper';
import { StylesContext } from '@material-ui/styles';

export const ButtonGroup = ({buttons, doSomethingAferClick}) => {

    const [clickedId, setClickedId] = useState(0)

    const handleClick = (item, id) => {
        setClickedId(id)
        doSomethingAferClick(item)
    }

    return (
        <View Style = {StylesContext.container}>
            {
                buttons.map((buttonLabel, index) => {
                    return (
                        <TouchableOpacity
                        onPress={(item) => handleClick(item, index)}
                            key={index}
                            style={[
                                index === clickedId ? styled.buttonActive : styles.button,
                                index === 0 ? { borderTopLeftRadius: 10, borderBottomLeftradius: 10 } : "",
                                index === 2 ? { borderTopRightRadius: 10, borderBottomRightradius: 10 } : ""
                            ]}>
                            <Text style={index === clickedId ? styles.textActive : styles.text}>
                                {buttonLabel}</Text>
                        </TouchableOpacity>
                    )
                })
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 1,
    },
    button :{
        backgroundColor: "#e0ddf0",
        margin: 4,
        borderRadius: 100,
        
    },
    buttonActive: {
        backgroundColor: "#0054ff",
        margin: 4,
        borderRadius: 100,
       
    },
    text:{
        color: "#04020f"
    },
    textActive : {
        color : "#04020f",
    }
})

import React, { useState,useEffect }  from 'react';
import {Text , View,  Alert, StyleSheet,SafeAreaView  , TouchableOpacity, FlatList , Image , Dimensions, ScrollView, StatusBar} from 'react-native';
import styled from "styled-components";
import { Chip, Button } from 'react-native-paper';

import axios from 'axios';

const Alignment = () => {
  const [agegroup, setagegroup] = useState(0);

  
  return (
    
    <View>
      <View style={styles.row}>

        <Button style={styles.btnset} mode="contained" onPress={() => {setagegroup(10); console.log(agegroup)}}>
        <Text style={styles.chipText}>10대</Text>
        </Button>

        <Button style={styles.btnset} mode="contained" onPress={() => {setagegroup(20); console.log(agegroup)}}>
        <Text style={styles.chipText}>20대</Text>
        </Button>

        <Button style={styles.btnset} mode="contained" onPress={() => {setagegroup(30); console.log(agegroup)}}>
        <Text style={styles.chipText}>30대</Text>
        </Button>

        <Button style={styles.btnset} mode="contained" onPress={() => {setagegroup(40); console.log(agegroup)}}>
        <Text style={styles.chipText}>40대</Text>
        </Button>

        <Button style={styles.btnset} mode="contained" onPress={() => {setagegroup(50); console.log(agegroup)}}>
        <Text style={styles.chipText}>50대</Text>
        </Button>

        <Button style={styles.btnset} mode="contained" onPress={() => {setagegroup(60); console.log(agegroup)}}>
        <Text style={styles.chipText}>60대</Text>
        </Button>
      </View>

    </View>
  );
  };



const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12
  },

  btnset: {
    backgroundColor: "#e0ddf0",
    margin: 4,
    borderRadius: 100,

  },

  chipText: {
    color: "#04020f"
  },

});

  

const AligmentWrap = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export default Alignment;
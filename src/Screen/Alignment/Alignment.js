
import React, { useState,useEffect }  from 'react';
import {Text , View,  Alert, StyleSheet,SafeAreaView,
  FlatList, Image , Dimensions, ScrollView, StatusBar, TouchableOpacity, TouchableHighlight} from 'react-native';
import styled from "styled-components";
import { Chip, Button, RadioButton } from 'react-native-paper';
import { ButtonGroup } from './ButtonGroup'

const Separator = () => (
  <View style={styles.separator} />
);


const Alignment = () => {
  const [agegroup, setagegroup] = useState(0);
  const [genderselect, setgenderselect] = useState(0);
  const [nationality, setnationality] = useState(0);

  const printgender = (item) => {
    setgenderselect(0);
    console.log(genderselect);
  }

  const printnation = (item) => {
    setnationality(0);
    console.log(nationality);
  }

  return (
    
    <View style={styles.container}>

      <View style={styles. btn1}>
        <Button style={styles.btnset} 
          mode="contained"
          onPress={() => { setagegroup(10); console.log(agegroup) }}>
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

      <Separator />

      <View style={styles. btn2}>
        <ButtonGroup buttons = {['남자', '여자']} 
        doSomethingAferClick={printgender}
        style={styles.btnset} mode="contained"
        />
      </View>

      {/* <View style={styles.btn2}>

        <Button style={styles.btnset} mode="contained" onChange={(e) => checkOnlyOne(e.target)}
          onPress={() => { setgenderselect(0); console.log(genderselect) }}>
          <Text style={styles.chipText}>남성</Text>
          
        </Button>
        <Button style={styles.btnset} mode="contained" onChange={(e) => checkOnlyOne(e.target)}
          onPress={() => { setgenderselect(1); console.log(genderselect) }}>
          <Text style={styles.chipText}>여성</Text>
        </Button>

      </View> */}


      <Separator />


      <View style={styles. btn3}>
        <ButtonGroup buttons = {['내국인', '외국인']} 
        doSomethingAferClick={printnation}
        style={styles.btnset} mode="contained"
        />
      </View>

      {/* <View style={styles.btn3}>

        <Button style={styles.btnset} mode="contained" onPress={() => { setnationality(0); console.log(nationality) }}>
          <Text style={styles.chipText}>내국인</Text>
        </Button>
        <Button style={styles.btnset} mode="contained" onPress={() => { setnationality(1); console.log(nationality) }}>
          <Text style={styles.chipText}>외국인</Text>
        </Button>
      </View> */}

    </View>

  );
  };



const styles = StyleSheet.create({

  btnset: {
    backgroundColor: "#e0ddf0",
    margin: 4,
    borderRadius: 100,
    
  },

  chipText: {
    color: "#04020f"
  },

  container: {
    flex: 1,
    flexDirection: 'column', 
    justifyContent: 'space-around',
    padding: 1,
  },

  btn1: {
    flex:0.1,     
    flexDirection: 'row',
    alignItems: 'center',
  },

  btn2: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  btn3: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
  },

  separator: { //선
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  
});

const AligmentWrap = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`

export default Alignment;
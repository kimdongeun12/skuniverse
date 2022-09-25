
import React, { useState,useEffect }  from 'react';
import {Text , View,  Alert, StyleSheet,SafeAreaView,
  FlatList, Image , Dimensions, ScrollView, StatusBar, TouchableOpacity, TouchableHighlight} from 'react-native';
import styled from "styled-components";
import { Chip, Button, RadioButton } from 'react-native-paper';
import { ButtonGroup } from './ButtonGroup'
import SwitchSelector from "react-native-switch-selector";

const Separator = () => (
  <View style={styles.separator} />
);

const genderOptions = [
  {label : '남성', value : 0},
  {label : '여성', value : 1},
];

const nationalityOptions = [
  {label : '내국인', value : 0},
  {label : '외국인', value : 1},
];

const Alignment = () => {
  const [agegroup, setagegroup] = useState(0);
  const [genderselect, setgenderselect] = useState(0);
  const [nationality, setnationality] = useState(0);

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
      <SwitchSelector
        options={genderOptions}
        initial={0}
        onChange={() => { setgenderselect(genderOptions.value); console.log(genderselect) }}
        textColor= "#04020f"
        selectedColor= "#0054ff"
        buttonColor= "#e0ddf0"
        borderColor= "#e0ddf0"
        hasPadding
      />
      </View>


      <Separator />

      <View style={styles. btn3}>
      <SwitchSelector
        options={nationalityOptions}
        initial={0}
        onChange={() => { setnationality(nationalityOptions.value); console.log(nationality) }}
        textColor="#04020f"
        selectedColor="#0054ff"
        buttonColor="#e0ddf0"
        borderColor="#e0ddf0"
        hasPadding
      />
      </View>
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

import React, { useState,useEffect }  from 'react';
import {Text , View,  Alert, StyleSheet,SafeAreaView , Button , TouchableOpacity, FlatList , Image , Dimensions} from 'react-native';
import styled from "styled-components";
import { Chip} from 'react-native-paper';
import axios from 'axios';

const Alignment = () => {
  const [select, setSelect] = useState(false);
  return (
    
    <View>
    <View style={styles.chip}>
      <Chip
        icon={select ? "check-bold" : "information"}
        style={styles.closeChip}
        selected={select}
        selectedColor={select ? 'skyblue' : 'black'}
        onClose={() => console.log('Close Chip')}
        onPress={() => setSelect(!select)}>
        10대
      </Chip>
    </View>
    </View>
  );
  };

  
  const styles = StyleSheet.create({
  chip: {
    width: 100,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  });

const AligmentWrap = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export default Alignment;
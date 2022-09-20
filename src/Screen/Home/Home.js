import React from 'react';
<<<<<<< HEAD
import {Text , View} from 'react-native';
import styled from "styled-components";

function Main() {
  return (
    <MainWrap>
      <Text>Main</Text>
    </MainWrap>
  );
}
=======
import { SafeAreaView, 
  View, 
  Image, 
  StyleSheet, 
  ScrollView, 
  Text, 
  TouchableOpacity, 
  Linking } from 'react-native';

import { SliderBox } from 'react-native-image-slider-box';

import Card1 from 'skuniverse/Assets/images/Card1.jpg';
import Card2 from 'skuniverse/Assets/images/Card2.jpg';
import Card3 from 'skuniverse/Assets/images/Card3.jpg';
>>>>>>> 1a92508899221d6cc0e4c7c8ad959b793dbfa1d1




function Home() {
  return ( <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <SliderBox style={styles.slider}
          images={[
            "http://www.naruart.or.kr/data/editor/2209/thumb-d981745cec2e6b1ec7eb71e7c80f4964_1662440580_7656_835x1181.jpg",
            "https://www.gangnam.go.kr/upload/editor/2022/07/15/b7770c87-4871-4519-873f-c4e6bab3b4df.jpg",
            "http://www.naruart.or.kr/data/editor/2209/thumb-783369461a8a681ad2294ca894f8a298_1662444664_0958_835x1178.jpg"
          ]}
          autoplay
          circleLoop /> 
        <Text style={styles.text}>
          Hi~~!!! I'm ARTTA ^^~
        </Text>
        <TouchableOpacity style = {styles.card1}
        onPress = {() => Linking.openURL('https://www.mnuri.kr/munhwa/introduceNuri.do')}>
        <Image source = {Card1} style = {styles.card1}/> 
        </TouchableOpacity> 
        <TouchableOpacity style = {styles.card2}
        onPress = {() => Linking.openURL('https://www.mnuri.kr/munhwa/cardIssueGuide.do')}>
        <Image source = {Card2} style = {styles.card2}/>
        </TouchableOpacity> 
        <TouchableOpacity style = {styles.card3}
        onPress = {() => Linking.openURL('https://www.mnuri.kr/help/customerService/faq.do')}>
        <Image source = {Card3} style = {styles.card3}/>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  slider: {
    width: 380,
    height: 600,
    resizeMode: 'contain',
  },
  scrollView: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 30
  },
  card1: {
    flex: 1,
    width: 370, 
    height: 450
  },
  card2: {
    flex: 1,
    width: 380, 
    height: 360
  },
  card3: {
    flex: 1,
    width: '100%', 
    height: 170
  },
});

export default Home;
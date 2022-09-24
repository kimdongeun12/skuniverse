import React from 'react';
import { SafeAreaView, 
  View, 
  Image, 
  StyleSheet, 
  ScrollView, 
  Text, 
  TouchableOpacity, 
  Linking } from 'react-native';

import { SliderBox } from 'react-native-image-slider-box';

import HomeImage1 from 'skuniverse/Assets/images/HomeImage1.jpg';
import HomeImage2 from 'skuniverse/Assets/images/HomeImage2.jpg';
import HomeImage3 from 'skuniverse/Assets/images/HomeImage3.jpg';
import Card1 from 'skuniverse/Assets/images/Card1.jpg';
import Card2 from 'skuniverse/Assets/images/Card2.jpg';
import Card3 from 'skuniverse/Assets/images/Card3.jpg';
import Arrta_icon from 'skuniverse/Assets/images/Arrta_icon.jpg';
import styled from "styled-components";
import { black } from 'react-native-paper/lib/typescript/styles/colors';






function Home() {
  return ( <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <SliderBox style={styles.slider}
          images = {[HomeImage1, HomeImage2, HomeImage3]}
          autoplay
          circleLoop /> 
        {/* <Text style={styles.text}>
          Hi~~!!! I'm ARTTA ^^~
        </Text> */}
        <View style={styles.Whitespace}></View>
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
        <View style={styles.Blackspace}>
          <Text style = {styles.text}>고객센터: 1800-abcd  (발신자부담)</Text>
          <Text style = {styles.text2}>고객센터 운영시간{'\n'}평일 09:00 ~ 18:00(점심시간: 12:00 ~ 13:00)</Text>
          <Text style = {styles.text3}>대표 : 권우철{'\n'}사업자등록번호 : abc-1234-abc{'\n'}주소 : 서울특별시 성북구 서경로 124{'\n'}ARTTA</Text>
          </View>
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
    padding: 22,
    fontSize: 20,
    fontWeight: 'bold',
    color:'#868686',
  },
  text2: {
    padding: 22,
    fontSize: 16,
    fontWeight: 'bold',
    color:'#868686',
  },
  text3: {
    padding: 22,
    fontSize: 13,
    fontWeight: 'bold',
    color:'#868686',
  },
  Whitespace: {
    flex: 1,
    width: 100, 
    height: 150
  },
  card1: {
    flex: 1,
    width: 380, 
    height: 470
  },
  card2: {
    flex: 1,
    width: 380, 
    height: 380
  },
  card3: {
    flex: 1,
    width: '100%', 
    height: 170
  },
  Blackspace: {
    flex: 1,
    width: 380, 
    height: 270,
    backgroundColor: '#f8f8f8',
  },
});

export default Home;
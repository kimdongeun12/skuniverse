import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabNavigator from "./Navigation/TabNavigator";

import styled from "styled-components";

 const App = () => {
  return (
    <NavigationContainer>
      {/* <AppWrap> */}
        <BottomTabNavigator />
      {/* </AppWrap> */}
    </NavigationContainer>
  )
 }
// const AppWrap = styled.ScrollView`
//   width: 100%;
//   padding: 0 16px;
// `

export default App;
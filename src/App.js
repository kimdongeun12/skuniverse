import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabNavigator from "./Navigation/TabNavigator";

import styled from "styled-components";

import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

 const App = () => {
  return (

    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {/* <AppWrap> */}
          <BottomTabNavigator />
        {/* </AppWrap> */}
      </NavigationContainer>
    </QueryClientProvider>
  )
 }
// const AppWrap = styled.ScrollView`
//   width: 100%;
//   padding: 0 16px;
// `

export default App;
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Main from './Pages/Main/Main';
import Alignment from './Pages/Alignment/Alignment';
import Maps from './Pages/Maps/Maps';
import Mypage from './Pages/Mypage/Mypage';

const TabNavigator = createBottomTabNavigator(
  {
    Main: {
      screen: Main,
    },
    Alignment: {
      screen: Alignment,
    },
    Maps: {
      screen: Maps,
    },
    Mypage: {
      screen: Mypage,
    }
});

export default createAppContainer(TabNavigator);

import AsyncStorage from '@react-native-async-storage/async-storage';
import config from './config';

exports.setData = async (item,value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(item, jsonValue);
        console.log(`[set] ${item}: ` + value)
    } catch (e) {
        console.log('saving error');
        // saving error
    }
}

exports.getData = async (item) => {
    try {
        const jsonValue = await AsyncStorage.getItem(item);
        console.log(`[get] ${item}: ` + JSON.parse(jsonValue));
        if(jsonValue)  return JSON.parse(jsonValue)
    } catch(e) {
        console.log('getting error');
    // error reading value
    }
}

//  테스트 필요
exports.delData = async (item) => {
    try {
        await AsyncStorage.removeItem(item);
        console.log('delete : ' + value)
    } catch(e) {
        console.log('deleting error');
    // error reading value
    }
}

exports.clearData = async () => {
    try {
        await AsyncStorage.clear();
        console.log('clear')
    } catch(e) {
        console.log('clear error');
    // error reading value
    }
}

exports.server = `http://${config.server}:3000`;
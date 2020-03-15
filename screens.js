
import App from './App'
import Weeds from './weeds'
import { Navigation } from 'react-native-navigation';


export function registerScreens() {
    Navigation.registerComponent('com.koalasolution.App', () => App);
    Navigation.registerComponent('com.koalasolution.Weeds', () => Weeds);
}
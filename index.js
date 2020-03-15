/** @format */

import { registerScreens } from './screens';
import { Navigation } from 'react-native-navigation';
import {AsyncStorage} from 'react-native';


registerScreens(); // this is where you register all of your app's screens
Navigation.setDefaultOptions({
    bottomTabs: {
        visible: true,
        animate: true, // Controls whether BottomTabs visibility changes should be animated
        drawBehind:true,
        backgroundColor:'#ffffff'
    },
});
let i = 0;                     //  set your counter to 1
let n = 0;

// for(i;i<=n+40000;i++){
//     console.log(i,'nashod...')
//
//     if(i > 39999) {






Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [{
                    component: {
                        name: 'com.koalasolution.App'
                    }
                }]
            }


        }
    });
});









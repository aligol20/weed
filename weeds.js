/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Dimensions,
    Image,
    ScrollView,
    FlatList,
    View,
    Modal,
    Alert,
    SectionList,
    TouchableHighlight,
    ActivityIndicator,
    AsyncStorage, KeyboardAvoidingView
} from 'react-native';
import ImageViewer from "react-native-image-zoom-viewer";
import ImageZoom from 'react-native-image-pan-zoom';
import Gallery from 'react-native-photo-gallery';
import {Navigation} from "react-native-navigation";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
let width= Dimensions.get('window').width;
let height= Dimensions.get('window').height;
export default class Weeds extends Component {
    static options(passProps) {
        return {
            statusBar: {
                visible: true,
                style: 'dark',
                drawBehind: false,
                backgroundColor: '#1e824c'


            },
            layout: {
                backgroundColor: '#ffffff',
                orientation: ['portrait'] // An array of supported orientations
            },
            topBar: {

                backButton: {
                    color: "white",
                    fontFamily: "Comfortaa-Light",
                    fontSize: 23,
                    title: "boo"
                },
                title: {
                    text: passProps.text,
                    fontSize: 23,
                    color: 'white',
                    fontFamily: "Comfortaa-Light",
                },
                animate: false,
                buttonColor: 'white',
                noBorder: true,
                visible: true,
                drawBehind: false,
                transparent: true,
                translucent: true,
                background: { color: '#1e824c' },
                elevation: 0,


            }
        };
    }
    constructor(props) {

        super(props);

        this.state = {
            language:'fa',
            index:0,
            modalVis:false,
            image:[],
            list:[],
            loading:true
        };


    }

    componentWillMount() {
        console.log(this.props.text,';lfkd;lfkdl')
        fetch('http://koalafruit.ir/api/get_this_family.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({family:this.props.text})
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson,'ldsjvkjdlgjs');
                    let list = [
                        {
                            images: [
                                {image: {uri: ''}, id: ''},
                                {image: {uri: ''}, id: ''},
                                {image: {uri: ''}, id: ''},
                                {image: {uri: ''}, id: ''},
                                {image: {uri: ''}, id: ''},
                                {image: {uri: ''}, id: ''},
                            ], name: ''
                        }];
                    console.log(responseJson, 'this family')
                    for (let i = 0; i < responseJson.length; i++) {
                        list[i] = [
                            {
                                images: [
                                    {image: {uri: responseJson[i]["COL 4"]}, id: responseJson[i]["COL 4"]},
                                    {image: {uri: responseJson[i]["COL 5"]}, id: responseJson[i]["COL 5"]},
                                    {image: {uri: responseJson[i]["COL 6"]}, id: responseJson[i]["COL 6"]},
                                    {image: {uri: responseJson[i]["COL 7"]}, id: responseJson[i]["COL 7"]},
                                    {image: {uri: responseJson[i]["COL 8"]}, id: responseJson[i]["COL 8"]},
                                    {image: {uri: responseJson[i]["COL 9"]}, id: responseJson[i]["COL 9"]},],
                                name: responseJson[i]["COL 2"],
                                thumb: {uri: responseJson[i]['thumbNails']}
                            }
                        ];


                    }
                    this.setState({list: list, loading: false})
                    console.log(list, 'this list')


            }) .catch((error) => {
            // console.error(error);
            this.setState({loading: false})

            Alert.alert(
                'Error in loading data...',
                'Please try again and be sure from your internet connection...',
                [

                    {text: 'OK', onPress: () =>   Navigation.push(this.props.componentId, {
                            component: {
                                name: 'com.koalasolution.App',

                            }
                        })},
                ],
                { cancelable: false }
            )
        });

    }
    componentDidMount(){
        fetch('http://koalafruit.ir/api/get_names.php', {
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson,'data')

            })
    }
    hospitals(){
        let fa= [
            {images:[
             {image:{uri:'http://koalafruit.ir/weeds/achillea_millefolium_1.jpg'},id:'achillea_millefolium_1'},
             {image:{uri:'http://koalafruit.ir/weeds/Achillea_millefolium_2.jpg'},id:'achillea_millefolium_2'},
             {image:{uri:'http://koalafruit.ir/weeds/Achillea_millefolium_3.jpg'},id:'achillea_millefolium_3'},
             {image:{uri:'http://koalafruit.ir/weeds/Achillea_millefolium_4.jpg'},id:'achillea_millefolium_4'},
             {image:{uri:'http://koalafruit.ir/weeds/Achillea_millefolium_5.jpg'},id:'achillea_millefolium_5'},
             {image:{uri:'http://koalafruit.ir/weeds/Achillea_millefolium_6.jpg'},id:'achillea_millefolium_6'},
            ],name:'kkkjkjkjk'}
        ];

        return fa;

    }

    render() {
        console.log(this.state.list,'ozozozozoz')
        return (
            <View style={styles.container}>

                    <FlatList
                        style={{width:width}}
                        renderItem={({item}) =>

                        {

                            return (
                                <View style={{backgroundColor:'transparent',width:width,alignItems:'center'}}>

                                <TouchableHighlight
                                        underlayColor='white'
                                        style={styles.button}
                                        onPress={()=>this.setState({modalVis:true,image:item[0].images})}>
                                        <View style={{flexDirection:'row',alignItems:'center'}}>

                                            <Image source={item[0].thumb}
                                                   style={{
                                                       alignItems: 'center',
                                                       width: 0.25 * width,
                                                       height: 0.25 * width,
                                                       justifyContent: 'center',
                                                       borderRadius:13,
                                                       margin: 7
                                                   }}>
                                            </Image>
                                            <Text style={{marginLeft:7,marginRight:7,color:'#336e7b',fontFamily: "Comfortaa-Light",fontSize:19,
                                                textAlign:'left'}}>{item[0].name}</Text>

                                        </View>
                                    </TouchableHighlight>
                                </View>
                            );


                        }


                        }

                        data={this.state.list}
                        keyExtractor={(item, index) => item + index}

                    />
                <Modal

                    visible={this.state.modalVis}
                    onRequestClose={() => {
                        this.setState({modalVis: false})
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'black'}}>
                        <Gallery
                            initialPaginationSize={3}
                            data={this.state.image} />
                    </View>
                </Modal>
                <Modal
                    transparent={true}
                    visible={this.state.loading}
                    onRequestClose={() => {
                    this.setState({loading: false})
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'center',backgroundColor:'rgba(0,0,0,0.7)',justifyContent:'center',width:width,height:height}}>
                       <View style={{width:width/2,height:width/2,backgroundColor:'white',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:7}}>

                           <ActivityIndicator
                               color = '#004000'
                               size= {33}/>
                           <Text style={{marginLeft:7,marginRight:7,color:'#336e7b',fontFamily: "Comfortaa-Light",fontSize:19,
                               textAlign:'left'}}>{'loading...'}</Text>
                       </View>
                    </View>
                </Modal>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',

        alignItems: 'center',
        backgroundColor: '#eeeeee',
    },
    buttonIn:{borderRadius:7,marginTop:5,flexDirection: 'row',justifyContent:'center',alignItems:'center'},
    buttonOut:{width:0.8*width,borderRadius:7,marginTop:5,flexDirection: 'row',backgroundColor: '#19b5fe',justifyContent: 'center',alignItems: 'center'},

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    titles:{
        fontFamily:'B Koodak',color: 'blue',textAlign:'center',paddingTop: 7,fontSize:17
    } ,
    city:{
        fontFamily:'B Koodak',color: 'blue',textAlign:'center',fontSize:23
    },
    line:{
        width:0.8*width,height:4,margin:1,borderRadius:2,backgroundColor:'blue'
    },
    button: {
        alignItems: 'center',
        width: 0.97 * width,
        flexDirection: 'row',
        borderRadius: 13,
        marginTop: 7,
        marginBottom:7,
        backgroundColor: 'white',
        shadowColor: "#000",

    },
});
module.export = Weeds;

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
    View,
    Linking,
    SectionList,
    TouchableHighlight,
    AsyncStorage, KeyboardAvoidingView, Modal, ActivityIndicator
} from 'react-native';
import {Navigation} from 'react-native-navigation';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
let width= Dimensions.get('window').width;
let height= Dimensions.get('window').height;
export default class App extends Component {
    static options(passProps) {
        return {
            statusBar: {
                visible: true,
                style: 'dark',
                drawBehind: false,
                backgroundColor: '#004000'


            },
            layout: {
                backgroundColor: '#ffffff',
                orientation: ['portrait'] // An array of supported orientations
            },
            topBar: {

                visible: false,
                drawBehind: true,
                animate: false,
            },
        };
    }
    constructor(props) {

        super(props);

        this.state = {
            language:'fa',
            index:0,
            aboutUs:false
        };


    }

    componentWillMount() {
        AsyncStorage.getItem('language',(err,store)=>{
            if(store){
                this.setState({language:JSON.parse(store)})
                switch(JSON.parse(store)) {
                    case 'fa':
                        this.setState({index : 0});
                        break;
                    case 'en':
                        this.setState({index:1});
                        break;
                    default:
                        this.setState({index : 0});

                }
            }
        })
    }

    language(){
        let fa={hospitalList:'مراکز بیمارستان زنان و زایمان',drList:'لیست متخصصان زنان و زایمان',teh:'تهران بزرگ',sar:'استان مازندران',tehteh:'شاخص‌ترین مراکز تخحصصی زنان و زایمان تهران'};
        let en={hospitalList:'Obstetrics and Gynecology Hospitals',drList:'Gynecologists list',teh:'Capital Tehran',sar:'Mazandaran State',tehteh:'The most specialized women’s gynecology centers in Tehran'};
        let final = {};
        console.log(this.state.language,';kfjgfj')
        switch(this.state.language) {
            case 'en':
                final = en;
                break;
            case 'fa':
                final = fa;
                break;
            default:
                final = fa;
        }
        return final;
    }
    city(){
        let fa={tehran:'تهران',sari:'ساری',babol:'بابل',amol:'آمل',qaem:'قایم شهر',babolSar:'بابل سر',mahmood:'محمودآباد',freydoon:'فریدون کنار',noor:'نور',
            noShahr:'نوشهر',chaloos:'چالوس',tonekabon:'تنکابن',ramsar:'رامسر',behshahr:'بهشهر',neka:'نکا',jooybar:'جویبار',savadKooh:'سوادکوه',gloogah:'گلوگله',kelar:'کلاردشت'};
        let en={tehran:'Tehran',sari:'sari',babol:'Babol',amol:'Amol',qaem:'QaemShahr',babolSar:'BabolSar',mahmood:'MahmoodAbad',freydoon:'FreydoonKenar',noor:'Noor',
            noShahr:'Noshahr',chaloos:'Chaloos',tonekabon:'Tonekabon',ramsar:'Ramsar',behshahr:'BehShahr',neka:'Neka',jooybar:'Jooybar',savadKooh:'SavadKooh',gloogah:'Glougah',kelar:'KlarDasht'};
        let final = {};
        console.log(this.state.language,';kfjgfj')
        switch(this.state.language) {
            case 'en':
                final = en;
                break;
            case 'fa':
                final = fa;
                break;
            default:
                final = fa;
        }
        return final;
    }
    hospitals(){
        let fa= [
            {title:'',data:[{name:'Ranunculaceae',image:require('./Ranunculaceae.jpg')}]},
            {title:'',data:[{name:'Solanaceae',image:require('./Solanaceae.jpg')}]},
            {title:'',data:[{name:'Equisetum',image:require('./Equisetum.jpg')}]},
            {title:'',data:[{name:'Convolvulaceae',image:require('./Convolvulaceae.jpg')}]},
            {title:'',data:[{name:'Orobanchaceae',image:require('./Orobanchaceae.jpg')}]},
            {title:'',data:[{name:'Rubiaceae',image:require('./Rubiaceae.jpg')}]},
            {title:'',data:[{name:'Typhaceae',image:require('./Typhaceae.jpg')}]},
            {title:'',data:[{name:'Brassicaceae',image:require('./Brassicaceae.jpg')}]},
            {title:'',data:[{name:'Poaceae',image:require('./Poaceae.jpg')}]},
            {title:'',data:[{name:'Fabaceae',image:require('./Fabaceae.jpg')}]},
            {title:'',data:[{name:'Asteraceae',image:require('./Asteraceae.jpg')}]},
            {title:'',data:[{name:'Amaranthaceae',image:require('./Amaranthaceae.jpg')}]},
            {title:'',data:[{name:'Chenopodiaceae',image:require('./Chenopodiaceae.jpg')}]},

        ];


        return fa;

    }

    render() {
        console.log(this.hospitals(),'ozozozozoz')
        return (
            <View style={{flex: 1, backgroundColor: 'white',alignItems:'center'}}>
                 <Image source={require('./weed_.png')}
                       style={{
                           width: width,
                           height:height,
                           position: 'absolute',
                           left: 0,
                           right: 0,
                           top: 0,
                           bottom: 0,
                           flexDirection: 'column',
                           alignItems: 'center'
                       }}>
                </Image>
                <View style={{flexDirection:'row',backgroundColor:'transparent',borderRadius:0,width:width,alignItems:'center',justifyContent:'center'}}>

                    <TouchableHighlight
                        underlayColor='transparent'
                        style={styles.button}
                        onPress={()=>this.setState({aboutUs:true})}>
                        <View style={{flexDirection:'row',margin:7,alignItems:'center',backgroundColor:'rgb(200,222,178)',borderRadius:7}}>
                        <Text style={styles.titles}>{'About us'}</Text>
                            <Image  source={require('./info.png')}
                                   style={{
                                       alignItems: 'center',
                                       width: 0.1 * width,
                                       height: 0.1 * width,
                                       justifyContent: 'center',
                                       borderRadius:13,
                                       margin: 7
                                   }}>
                            </Image>
                        </View>
                    </TouchableHighlight>
                </View>

                    <SectionList
                        style={{width:width,backgroundColor:'transparent'}}
                        renderItem={({item, index, section}) =>

                        {

                            return (
                                <View style={{backgroundColor:'transparent',width:width,alignItems:'center'}}>

                                    <TouchableHighlight
                                        underlayColor='#004000'

                                        style={styles.button_2}
                                    onPress={()=> {
                                        Navigation.push(this.props.componentId, {
                                        component: {
                                        name: 'com.koalasolution.Weeds',
                                            passProps: {
                                                text: item.name,

                                            }
                                    }
                                    });

                                    }}>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>

                                        <Image source={item.image}
                                               style={{
                                                   alignItems: 'center',
                                                   width: 0.25 * width,
                                                   height: 0.25 * width,
                                                   justifyContent: 'center',
                                                   borderRadius:13,
                                                   margin: 7
                                               }}>
                                        </Image>
                                    <Text style={{fontFamily:'Comfortaa-Bold',marginLeft:7,marginRight:7,color:'#ff9900',fontSize:23,textAlign:'center'} }>{item.name}</Text>

                                    </View>
                                    </TouchableHighlight>

                                </View>
                            );


                        }


                        }
                        renderSectionHeader={({section: {title}}) => (
                            <View style={{width:0,height:0}}>

                            </View>
                        )}
                        sections={this.hospitals()}
                        stickySectionHeadersEnabled = {true}
                        keyExtractor={(item, index) => item + index}
                    />

                <Modal
                    transparent={true}
                    visible={this.state.aboutUs}
                    onRequestClose={() => {
                        this.setState({aboutUs: false})
                    }}>
                    <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.7)',alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
                        <View style={styles.container}>
                            <View style={{flexDirection: 'row',alignItems:'flex-start',width:'100%',borderRadius:5}}>
                                <TouchableHighlight
                                    underlayColor='white'

                                    style={{margin:5,borderRadius:5,borderWidth: 0,alignItems:'center',flexDirection:'row',justifyContent:'center',borderColor:'#004000'}}
                                    onPress={() => this.setState({aboutUs:false})}>
                                    <Text style={styles.titles3}>{'close'}</Text>
                                </TouchableHighlight>
                            </View>
                            <Image source={require('./koala.png')} style={{
                                alignItems: 'center',
                                width:0.2*width,
                                height:0.2*width,
                                justifyContent:'center',
                                margin:7
                            }}>
                            </Image>

                            <Text style={styles.titles}>{'Supervisor:\n Dr Akbar ALIVERDI'}</Text>

                            <TouchableHighlight
                                underlayColor='white'

                                style={{backgroundColor: '#004000',borderRadius:7,margin:13,flexDirection: 'column',alignItems:'center',justifyContent:'center'}}
                                onPress={() => Linking.openURL('mailto:a.aliverdi@basu.ac.ir')}>
                                <Text style={styles.titles2}>{'Touch here for \nContact Supervisor'}</Text>
                            </TouchableHighlight>
                            <View style={{width:0.8*width,height:3,borderRadius:1,backgroundColor:'green',margin:5}}/>

                            <Text style={styles.titles}>{'Developer:\n Ali Kargar'}</Text>
                            <TouchableHighlight
                                underlayColor='white'

                                style={{backgroundColor: '#00bb9b',borderRadius:7,margin:13,flexDirection: 'column',alignItems:'center',justifyContent:'center'}}
                                onPress={() => Linking.openURL('mailto:Koalasolutiongroup@gmail.com')}>
                                <Text style={styles.titles2}>{'Touch here for \nContact Developer'}</Text>
                            </TouchableHighlight>
                            <Text style={styles.titles}>{'Winter 1397'}</Text>
                            <View style={{height:0.03*height}}/>

                        </View>
                    </View>
                </Modal>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius:5,
        width:'80%'
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
    titles:{fontFamily:'Comfortaa-Bold',marginLeft:7,marginRight:7,color:'#1d1c1a',fontSize:19,textAlign:'center'} ,
    titles3:{fontFamily:'Comfortaa-Bold',margin:3,color:'#1d1c1a',fontSize:13,textAlign:'center'} ,
    titles2:{fontFamily:'Comfortaa-Bold',marginLeft:7,marginRight:7,color:'#ffeb37',fontSize:19,textAlign:'center'} ,
    city:{
        fontFamily:'B Koodak',color: 'blue',textAlign:'center',fontSize:23
    },
    line:{
        width:0.8*width,height:4,margin:1,borderRadius:2,backgroundColor:'blue'
    },
    button: {
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 13,
        marginTop: 7,
        marginBottom:7,
        backgroundColor: 'rgb(200,222,178)',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.31,
        shadowRadius: 11.00,

        elevation: 7,

    },
    button_2: {
        alignItems: 'center',
        width: 0.89 * width,
        flexDirection: 'row',
        borderRadius: 13,
        margin:5,
        backgroundColor: '#124a1d',
        shadowColor: "#000",


    }
});
module.export = App;

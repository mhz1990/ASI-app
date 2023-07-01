import AppIntroSlider from 'react-native-app-intro-slider';
import { Text, Image,View, StyleSheet, TouchableOpacity } from 'react-native';
import {Link, useRouter } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
const slides = [
    {
      key: 's1',
      text: 'Want to help under-served students get an arts education? \nArt Sphere Inc makes it easy to volunteer, right from your phone!',
      image: require('../assets/images/intro1.png'),
      backgroundColor: '#20d2bb',
    },
    {
      key: 's2',
      text: 'Do research about musical instrument whenerever and wherever you have time.',
      image: require('../assets/images/intro2.png'),
      backgroundColor: '#febe29',
    },
    {
      key: 's3',
      text: 'Teachers use your research to create lesson plans and teaching materials for under-served schools and community centers.',
      image: require('../assets/images/intro3.png'),
      backgroundColor: '#22bcb5',
    },
    {
      key: 's4',
      text: ' We can also provide verification of your volunteer hours if you need it for school or work.',
      image: require('../assets/images/intro4.png'),
      backgroundColor: '#3395ff',
    },
  ];

const logoPlain = require('../assets/images/logo-plain.png');
const IntroSlider = (props)=>{
    const router = useRouter();
    
    const RenderItem = ({ item }) => {
        return (
        <View
        style={{
        flex: 1,
        backgroundColor: '#ff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100,
        }}>
            <Image source={logoPlain} style={styles.logoStyle} resizeMode='contain'/>
            <Image style={styles.introImageStyle} source={item.image} resizeMode='contain'/>
            <Text style={styles.introTextStyle}>{item.text}</Text>
            
            <TouchableOpacity 
                style={styles.buttonStyle}
                onPress={()=>router.push("/home")}
                >
                <Text style={styles.buttonTextStyle}>Create Account</Text>
            </TouchableOpacity>
        </View>
        );
    };
    const onDone = () => {
        props.setShowRealApp(true);
    };
    
    return (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          activeDotStyle={{backgroundColor: 'rgba(0, 0, 0, .9)'}}
          //onDone={onDone}
          //showSkipButton={true}
          showNextButton={false}
          showDoneButton={false}
          /*onSkip={onDone}
          renderSkipButton={() => (
            <Text style={styles.buttonTextStyle}>Skip</Text>
          )}
          renderDoneButton={() => (
            <Text style={styles.buttonTextStyle}>Done</Text>
          )}
          renderNextButton={() => (
            <Text style={styles.buttonTextStyle}>Next</Text>
          )}*/
        />
        )
}

export default IntroSlider;

const styles = StyleSheet.create({
    buttonStyle:{
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor:'#106256',
        paddingHorizontal:20,
        paddingVertical: 10,
    },
    logoStyle:{
      width:'40%',
      height:undefined,
      aspectRatio:1,
      marginBottom:20,
    },
    introImageStyle: {
      width: '80%',
      height: undefined,
      aspectRatio:1
    },
    introTextStyle: {
      fontSize: 18,
      color: 'black',
      textAlign: 'center',
      paddingVertical: 30,
      paddingHorizontal: 20,
    },
    buttonTextStyle: {
      color: 'white',
    },
  });
  
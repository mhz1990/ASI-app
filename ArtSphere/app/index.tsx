
import React, { useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';


import AppIntroSlider from 'react-native-app-intro-slider';

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };
  const logoPlain = require('../assets/images/logo-plain.png');
  const RenderItem = ({ item }) => {
    return (

      <View
        style={{
          flex: 1,
          backgroundColor: '#ff',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Image source={logoPlain} style={styles.logoStyle} resizeMode='contain'/>
        <Image style={styles.introImageStyle} source={item.image} resizeMode='contain'/>
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              Show login here if not opening app for first time
            </Text>
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
          renderSkipButton={() => (
            <Text style={styles.buttonTextStyle}>Skip</Text>
          )}
          renderDoneButton={() => (
            <Text style={styles.buttonTextStyle}>Done</Text>
          )}
          renderNextButton={() => (
            <Text style={styles.buttonTextStyle}>Next</Text>
          )}
        />
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
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
    color: 'black',
  },
});

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
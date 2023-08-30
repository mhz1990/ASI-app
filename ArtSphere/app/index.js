
import React, { useState } from 'react';

import {StyleSheet, Image, View
} from 'react-native';
import IntroSlider from '../components/IntroSlider';

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);
  return (
      <>
        <IntroSlider/>
        
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
    justifyContent: 'center',
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

import { useRouter } from "expo-router";
import { SafeAreaView, Text, TextInput, View,StyleSheet,Image,Button } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";

import { useState } from "react";
const logoPlain = require('../../assets/images/logo-plain.png')
const Login = () => {
    
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSignin = ()=>{
        if (email==="test" && password==="123"){
            router.push('/home')
        }
    }
    return (
      <SafeAreaView style={styles.container}>
        <Image source={logoPlain} style={styles.logoStyle} resizeMode="contain" />
  
        <View style={styles.inputContainer}>
          <Text>Email:</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Enter your email" 
            value={email}
            onChangeText={setEmail}
          />
  
          <Text>Password:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}

          />
  
        <TouchableOpacity style={styles.buttonStyle} onPress={handleSignin}> 
            <Text style={styles.buttonTextStyle}>Sign In</Text> 
          </TouchableOpacity>
        </View>
  
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>New to ASI?</Text>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => router.push('/')}> 
            <Text style={styles.buttonTextStyle}>Create an Account</Text> 
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "start",
      alignItems: "center",
      padding: 16,
    },
    buttonStyle:{
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor:'#106256',
        paddingHorizontal:20,
        paddingVertical: 10,
    },
    logoStyle: {
      width: 200,
      height: 200,
    },
    inputContainer: {
      padding: 20,
      width: "100%",
    },
    input: {
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    signupContainer: {
      marginTop: 20,
      flexDirection: "column",
      alignItems: "center",
    },
    signupText: {
      padding: 5,
    },
    buttonTextStyle: {
        color: 'white',
      },
  });
  
  export default Login;
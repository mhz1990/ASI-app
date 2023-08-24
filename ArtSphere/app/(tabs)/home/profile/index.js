import { Stack, useRouter } from "expo-router";
import { Button,View,StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import ProfileInfo from "../../../../components/ProfileInfo";
import ProfileList from "../../../../components/ProfileList";
export default ()=>{
    const router = useRouter();
    return (
        <View>
            <Stack.Screen options={{
                title:"Profile",
                headerStyle:{ backgroundColor: "#106256"},
                headerTintColor: '#fff',
                }}
            />
            <ProfileInfo />
            <ProfileList />
        </View>
    )
}


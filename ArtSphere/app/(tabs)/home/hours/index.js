import { Stack, useRouter } from "expo-router";
import { Button,View } from "react-native";
export default ()=>{
    const router = useRouter();
    return (
        <View>
            <Stack.Screen options={{
                title:"Hours",
                headerStyle:{ backgroundColor: "#106256"},
                headerTintColor: '#fff',
                }}
            />
            <Button title="go home" onPress={()=>router.push('/')}></Button>
        </View>
    )
}
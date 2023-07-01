
import {Tabs} from "expo-router";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
export default Layout = () =>{
    return (
        <Tabs screenOptions={
            {   
                headerShown: false,
                tabBarStyle:{backgroundColor:'#5e0e48'},
                tabBarActiveTintColor: 'rgba(255, 255, 255, 1)',
                tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.5)',
            }
        }>
            
            <Tabs.Screen name="hours" options={{
                title:"Hours",
                tabBarIcon:()=><MaterialCommunityIcons name="clock" size={32} color="white" />
            }} />
            <Tabs.Screen name="projects" options={{
                title: "My Projects",
                tabBarIcon:()=><FontAwesome name="pencil" size={32} color="white" />
            }}/>
            <Tabs.Screen name="profile" options={{
                title: "Profile",
                tabBarIcon:()=><FontAwesome name="user" size={32} color="white" />
            }}/>
        </Tabs>
    )
}
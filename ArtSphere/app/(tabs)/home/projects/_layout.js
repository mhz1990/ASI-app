import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
export default function Layout() {
    return (
        <>
        <Stack screenOptions={{
            headerShown:true,
            navigationBarColor:"#106256"
        }}>

        </Stack>
        <StatusBar backgroundColor="#fff" />
        </>
    );
}
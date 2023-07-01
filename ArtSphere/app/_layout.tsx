import { Slot, Stack } from "expo-router"
import { View, StyleSheet } from "react-native"
import { StatusBar } from "expo-status-bar"
export default function RootLayoutNav() {
    return (
      <>
        <Slot />
        <StatusBar style="dark"/>
      </>
      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  }
})
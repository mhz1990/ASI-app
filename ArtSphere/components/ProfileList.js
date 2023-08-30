import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import {Link, useRouter } from "expo-router";


export default function ProfileList({}){
  const data = [
    { id: "1", title: "Edit Profile" },
    { id: "2", title: "Share" },
    { id: "3", title: "Notifications" },
    { id: "4", title: "Contact" },
    { id: "5", title: "Privacy" },
    { id: "6", title: "Help" },
    { id: "7", title: "About ASI" },
    // Add more options here
  ];

  const router = useRouter();

  const renderItem = ({ item }) => {
    
    const handleItemPress = () => {
      if (item.title === "Notifications"){
        console.log("Notifications selected!");
        router.push("/home/profile/Notifications");
      }
    }

    return (
      <TouchableOpacity style={styles.itemContainer} onPress={handleItemPress}>
        <Text style={styles.itemText}>{item.title} </Text>
        <AntDesign name="right" size={24} color="black" />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  itemText: {
    fontSize: 19,
    marginVertical: 10
  },
  separator: {
    height: 1,
    backgroundColor: "#E5E5E5",
  },
});
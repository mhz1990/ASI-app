import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Notification(){
    const data = [
        { id: "1", title: "Personal Messages" },
        { id: "2", title: "Group Messages" },
        { id: "3", title: "Reactions" },
        { id: "4", title: "Mentions" },
        // Add more options here
    ];

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.itemContainer}>
                <Text style={styles.itemText}>{item.title}</Text>
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
}

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
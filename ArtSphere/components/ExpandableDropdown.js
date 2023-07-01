import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ExpandableDropdown = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDropdown = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={toggleDropdown}>
        <Text style={styles.headerText}>
          {props.title}
          <AntDesign name={isExpanded ? "up" : "down"} size={20} color="#000000" />
        </Text>
      </TouchableOpacity>

      {isExpanded && (
        <View style={styles.dropdown}>
          <Text style={styles.dropdownText}>
            This is the content of the dropdown section.
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   display:'flex',
  },
  header: {
    display:'flex',
    alignItems: 'center',
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 1,
  },
  headerText: {
    display:'flex',
    fontSize: 18,
    fontWeight: "bold",
    color:"#000"
  },
  dropdown: {
    backgroundColor: "#ffffff",
  },
  dropdownText: {
    fontSize: 16,
    padding: 16,
  },
});

export default ExpandableDropdown;

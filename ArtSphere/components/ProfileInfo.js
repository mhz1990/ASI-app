import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ProfileInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View style={styles.profilePic} />
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.name}>First Last</Text>
        <Text style={styles.role}>Research Volunteer</Text>
        <Text style={styles.additionalInfo}>Additional Line</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FAECAC",
    borderRadius: 8,
    padding: 16,
  },
  leftSection: {
    width: "40%",
    alignItems: "center",
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#dcdcdc",
  },
  rightSection: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  role: {
    fontSize: 16,
    marginBottom: 8,
  },
  additionalInfo: {
    fontSize: 14,
    color: "#555555",
    marginBottom: 16,
  },
  editButton: {
    backgroundColor: 'transparent',
    borderColor: "#106256",
    borderRadius: 20,
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: 'flex-start'
  },
  editButtonText: {
    color: "#106256",
    fontWeight: "bold",
  },
});
export default ProfileInfo;
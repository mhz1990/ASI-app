import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

const EditProfile = ({ closeModal }) => {
  const profile = {
    firstname: "Olivia",
    lastname: "Feldman",
    school: "Lower Merion HS",
    email: "olivia@lmds.edu",
    password: " ",
    avatar: "https://example.com/jane-doe-avatar.png",
  };
  const [firstname, setFirstName] = useState(profile.firstname);
  const [lastname, setLastName] = useState(profile.lastname);
  const [school, setSchool] = useState(profile.school);
  const [email, setEmail] = useState(profile.email);
  const [password, setPassword] = useState(profile.password);
  const [avatar, setAvatar] = useState(profile.avatar);

  const handleSubmit = () => {};

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <View style={styles.header}>
          <View style={styles.cancelContainer}>
            <TouchableOpacity onPress={closeModal} style={styles.cancelText}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.titleText}>Edit Profile</Text>
          <View style={styles.saveContainer}>
            <TouchableOpacity onPress={handleSubmit} style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://www.bootdey.com/img/Content/avatar/avatar3.png",
            }}
          />
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Change profile picture</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter First Name"
            value={firstname}
            onChangeText={setFirstName}
          />
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Last Name"
            value={lastname}
            onChangeText={setLastName}
          />
          <Text style={styles.label}>School or institution</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter School"
            value={school}
            onChangeText={setSchool}
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter New Password"
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.editButton}
            onPress={() =>
              handleSubmit({ firstname, lastname, school, email, avatar })
            }
          >
            <Text style={styles.editButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "100%",
    height: "90%",
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 5,
    paddingTop: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  cancelContainer: {
    flex: 1,
    alignItems: "flex-start", 
  },
  saveContainer: {
    flex: 1,
    alignItems: "flex-end", 
  },
  cancelText: {
    fontSize: 18,
    color: "#106256",
    fontWeight: "bold",
  },
  titleText: {
    fontSize: 16,
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
  },
  saveButton: {
    padding: 8,
    backgroundColor: "#ca619e",
    borderColor: "#ca619e",
    borderRadius: 20,
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 13,
    alignSelf: "center",
  },
  saveButtonText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
  },
  avatarContainer: {
    marginTop: 0,
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editButton: {
    backgroundColor: "transparent",
    borderColor: "#106256",
    borderRadius: 20,
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 100,
    width: 380,
    alignSelf: "center",
    marginTop: 20,
  },
  editButtonText: {
    color: "#106256",
    fontWeight: "bold",
    alignSelf: "center",
  },
  label: {
    marginTop: 20,
  },
  input: {
    backgroundColor: "transparent",
    borderColor: "#106256",
    borderRadius: 10,
    borderWidth: 2,
    padding: 15,
    paddingHorizontal: 10,
    textAlign: "left",
  },
});

export default EditProfile;

import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
  Button,
  View,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import ProfileInfo from "../../../../components/ProfileInfo";
import ProfileList from "../../../../components/ProfileList";
import EditProfile from "../../../../components/EditProfile";

export default () => {
  const [isEditing, setIsEditing] = useState(false);

  const onPress = () => {
    setIsEditing(true);
  };

  const closeModal = () => {
    setIsEditing(false);
  };

  const router = useRouter();
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Profile",
          headerStyle: { backgroundColor: "#106256" },
          headerTintColor: "#fff",
        }}
      />
      <ProfileInfo onPress={onPress} />
      <ProfileList />
      <Modal animationType="slide" transparent={false} visible={isEditing}>
        <EditProfile closeModal={closeModal} />
      </Modal>
    </View>
  );
};

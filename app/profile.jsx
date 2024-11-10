import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Link href="/" style={{ color: "blue", textDecorationLine: "underline" }}>
        Go home page
      </Link>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>HOME PAGE</Text>
      <Link
        href="profile"
        style={{ color: "blue", textDecorationLine: "underline" }}
      >
        Go to profile page
      </Link>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <View style={styles.container}>
      <Text testID="SignUpLabel" style={styles.label}>
        Sign Up
      </Text>
      <TextInput
        testID="SignUpEmailInput"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        testID="SignUpPasswordInput"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <TouchableOpacity
        testID="SignUpNavButton"
        onPress={() => navigation.goBack()}
      >
        <Text testID="SignUpNavButtonText">Go to SignIn</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {},
  input: {
    width: 200,
    height: 40,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
  },
});
export default Signup;

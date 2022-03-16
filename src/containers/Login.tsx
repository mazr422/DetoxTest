import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <View style={styles.container}>
      <Text testID="SignInLabel" style={styles.label}>
        Login
      </Text>
      <TextInput
        testID="SignInEmailInput"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        testID="SignInPasswordInput"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <TouchableOpacity
        testID="SignInNavButton"
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text testID="SignInNavButtonText">Go to SignUp</Text>
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
export default Login;

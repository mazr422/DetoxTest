import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/containers/Login";
import Signup from "./src/containers/SignUp";
const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      mode="modal"
      screenOptions={{
        cardStyle: { backgroundColor: "transparent" },
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="LogIn" component={Login} />
      <Stack.Screen name="SignUp" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthStack;

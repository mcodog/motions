import { View, Text } from "react-native";
import React from "react";
import "./styles/global.css";

//Routing
import { Redirect, Stack } from "expo-router";

//Paper
import { PaperProvider } from "react-native-paper";

const Index = () => {
  return (
    <PaperProvider>
      <Stack>
        <Stack.Screen name="auth/login" options={{ headerShown: false }} />
        <Stack.Screen name="auth/register" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <Redirect href="auth/login" />
    </PaperProvider>
  );
};

export default Index;

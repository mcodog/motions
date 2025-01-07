import { View, Text } from "react-native";
import React from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Feather, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import { Tabs } from "expo-router";
import "../styles/global.css";

const _layout = () => {
  const colorScheme = useColorScheme();

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="message-text-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

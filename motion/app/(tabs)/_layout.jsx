import { Tabs, Stack, usePathname } from "expo-router";
import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useColorScheme } from "@/hooks/useColorScheme";

import "../styles/global.css";

const _layout = () => {
  const colorScheme = useColorScheme();
  const pathname = usePathname();
  const isAdmin = true;

  if (!isAdmin && pathname.startsWith("/admin")) {
    return <Stack.Screen redirect="/" />;
  }

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
      <Tabs.Screen
        name="admin/index"
        options={{
          title: "Admin",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-cog-outline"
              size={24}
              color={color}
            />
          ),
          href: isAdmin ? undefined : null,
        }}
      />
    </Tabs>
  );
};

export default _layout;

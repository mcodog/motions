import { View, Text } from "react-native";
import React from "react";
import { Divider } from "react-native-paper";
import { ms } from "../app/styles/style";

const TextDivider = ({ text }) => {
  return (
    <View className="w-full flex-row items-center">
      <View className="flex-1">
        <Divider style={{ height: 1, marginHorizontal: ms(5) }} />
      </View>
      <Text>{text}</Text>
      <View className="flex-1">
        <Divider style={{ height: 1, marginHorizontal: ms(5) }} />
      </View>
    </View>
  );
};

export default TextDivider;

import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import ms from "../app/styles/style";

const ButtonArrowIcon = ({ text = "Sample", icon }) => {
  return (
    <View className="my-2 w-full">
      <Button
        className="w-full justify-center"
        style={{ height: ms(50) }}
        labelStyle={{
          height: ms(50),
        }}
        mode="contained"
      >
        <View className="h-full flex-row justify-between items-center w-full">
          <View className="flex-row justify-center gap-4">
            {icon === null ? null : (
              <MaterialIcons name={icon} size={24} color="white" />
            )}

            <Text
              style={{
                textAlignVertical: "center",
                fontSize: ms(14),
                color: "white",
              }}
            >
              {text}
            </Text>
          </View>
          <AntDesign name="right" size={24} color="white" />
        </View>
      </Button>
    </View>
  );
};

export default ButtonArrowIcon;

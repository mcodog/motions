import { View, Text } from "react-native";
import React from "react";
import ms from "../styles/style";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Button } from "react-native-paper";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import ButtonArrowIcon from "../../components/ButtonArrowIcon";

const profile = () => {
  return (
    <View className="flex-1 p-2">
      <View className="justify-center items-center" style={{ height: ms(300) }}>
        <View
          className="justify-center items-center"
          style={{
            position: "relative",
            borderRadius: 100,
            backgroundColor: "#6851a4",
            height: ms(150),
            width: ms(150),
          }}
        >
          <AntDesign
            className="text-center"
            name="user"
            size={60}
            color="white"
          />
          <View style={{ position: "absolute", bottom: ms(10), right: ms(5) }}>
            <EvilIcons
              style={{
                borderWidth: 4,
                borderRadius: 100,
                height: ms(38),
                width: ms(38),
                borderColor: "white",
                backgroundColor: "#6851a4",
                textAlignVertical: "center",
                textAlign: "center",
              }}
              name="pencil"
              size={28}
              color="white"
            />
          </View>
        </View>
        <View className="my-2">
          <Text className="text-center font-bold" style={{ fontSize: ms(32) }}>
            Mark Codog
          </Text>
          <Text className="text-center color-gray-700">codogmjo@gmail.com</Text>
        </View>
      </View>
      <View className="px-16 items-center">
        <Button className="w-1/2" mode="contained">
          Upgrade to PRO
        </Button>
      </View>
      <View className="my-10 px-16 items-center">
        <ButtonArrowIcon icon="shield" text="Privacy Settings" />
        <ButtonArrowIcon icon="access-time" text="Rental History" />
        <ButtonArrowIcon icon="support-agent" text="Help & Support" />
        <ButtonArrowIcon text="Logout" />
      </View>
    </View>
  );
};

export default profile;

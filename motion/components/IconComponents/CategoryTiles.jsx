import { View, Text, Pressable, Animated } from "react-native";
import React, { useRef, useEffect } from "react";

import {
  Feather,
  Fontisto,
  FontAwesome,
  FontAwesome6,
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import ms from "../../app/styles/style";

const CategoryTiles = ({ text, icon, state, setState, iconType }) => {
  const pseudoBorder = useRef(new Animated.Value(0)).current;
  let Icon;

  switch (iconType) {
    case "Fontisto":
      Icon = Fontisto;
      break;
    case "Feather":
      Icon = Feather;
      break;
    case "FontAwesome":
      Icon = FontAwesome;
      break;
    case "FontAwesome6":
      Icon = FontAwesome6;
      break;
    case "FontAwesome5":
      Icon = FontAwesome5;
      break;
    case "Ionicons":
      Icon = Ionicons;
      break;
    case "MaterialIcons":
      Icon = MaterialIcons;
      break;
    case "MaterialCommunityIcons":
      Icon = MaterialCommunityIcons;
      break;
    default:
      Icon = FontAwesome;
      break;
  }

  useEffect(() => {
    if (state == text) {
      Animated.timing(pseudoBorder, {
        toValue: 3,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(pseudoBorder, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  }, [state, pseudoBorder]);

  return (
    <Pressable
      //   style={state == text ? { borderBottomWidth: pseudoBorder } : ""}
      className="p-5 pb-7"
      onPress={() => {
        setState(text);
      }}
    >
      <View className="h-full justify-center items-center">
        <Icon
          name={icon}
          size={state == text ? ms(25) : ms(18)}
          color="black"
        />
      </View>
      <Text
        className="text-center"
        style={state == text ? { fontWeight: 700 } : { fontSize: ms(11) }}
      >
        {text}
      </Text>
      <Animated.View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "black",
          height: pseudoBorder.interpolate({
            inputRange: [0, 50],
            outputRange: [0, ms(50)],
          }),
        }}
      ></Animated.View>
    </Pressable>
  );
};

export default CategoryTiles;

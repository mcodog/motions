import {
  View,
  Text,
  Button as RNButton,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

//Custom Components
import FadeView from "../../components/FadeView";

//Styling
import { ms } from "../styles/style";

//React Paper
import { TextInput, Divider, Button } from "react-native-paper";
import { useRouter } from "expo-router";

const Register = () => {
  const router = useRouter();

  return (
    <FadeView className="flex-1 justify-center items-center px-10">
      <View>
        <Text className="my-3" style={{ fontSize: ms(28), fontWeight: 800 }}>
          Register
        </Text>
      </View>
      <Divider className="w-full my-2" />
      <View className="flex-row gap-5 my-1">
        <View className="flex-1 min-w-[100px]">
          <TextInput label="First Name" mode="outlined" />
        </View>
        <View className="flex-1 min-w-[100px]">
          <TextInput label="Last Name" mode="outlined" />
        </View>
      </View>
      <View className="flex-row gap-5 my-1">
        <View className="flex-1 min-w-[200px]">
          <TextInput label="Email" mode="outlined" />
        </View>
      </View>
      <View className="flex-row gap-5 my-1">
        <View className="flex-1 min-w-[200px]">
          <TextInput label="Password" mode="outlined" />
        </View>
      </View>
      <View className="flex-row gap-5 my-4">
        <TouchableWithoutFeedback>
          <Text
            className="flex-1"
            style={{
              backgroundColor: "#6851a4",
              borderRadius: ms(32),
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              textAlignVertical: "center",
              paddingHorizontal: ms(20),
              color: "white",
              fontWeight: 700,
              padding: ms(10),
            }}
          >
            Sign In
          </Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Text
            className="flex-1"
            style={{
              borderWidth: 1,
              borderColor: "black",
              backgroundColor: "white",
              borderRadius: ms(32),
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              textAlignVertical: "center",
              paddingHorizontal: ms(20),
              color: "black",
              fontWeight: 700,
              padding: ms(10),
              // fontSize: ms(12),
            }}
            onPress={() => {
              router.back();
            }}
          >
            Go Back
          </Text>
        </TouchableWithoutFeedback>
        {/* <Button
          className="flex-1"
          mode="outlined"
          onPress={() => {
            router.back();
          }}
        >
          Return to Log In Page
        </Button> */}
      </View>
    </FadeView>
  );
};

export default Register;

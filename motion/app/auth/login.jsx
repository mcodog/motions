import { View, Text } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

//Custom Components
import TextDivider from "../../components/TextDivider";
import FadeView from "../../components/FadeView";

//Styling
import { ms } from "../styles/style";

//React Paper
import { TextInput, Divider, Button, FAB } from "react-native-paper";

const Login = () => {
  const router = useRouter();

  return (
    <FadeView className="flex-1 justify-center items-center px-10">
      <View>
        <Text className="my-3" style={{ fontSize: ms(28), fontWeight: 800 }}>
          Login
        </Text>
      </View>
      <Divider className="w-full my-2" />
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
        <Button
          className="flex-1"
          mode="contained"
          onPress={() => router.push("(tabs)")}
        >
          Login
        </Button>
        <Button
          className="flex-1"
          mode="outlined"
          onPress={() => {
            router.push("auth/register");
          }}
        >
          Sign Up
        </Button>
      </View>
      <View className="my-4">
        <TextDivider text="Or Continue With" />
      </View>
      <View className="flex-row gap-5 my-2">
        <FAB icon="google" />
        <FAB icon="facebook" />
        <FAB icon="github" />
      </View>
    </FadeView>
  );
};

export default Login;

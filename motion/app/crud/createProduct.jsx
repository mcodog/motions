import { View, Text } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

import { Button, Divider, TextInput } from "react-native-paper";
import ms from "../styles/style";

const createProduct = () => {
  const router = useRouter();
  return (
    <View className="flex-1 justify-center p-2">
      <Text className="text-center font-bold" style={{ fontSize: ms(20) }}>
        Create a New Listing
      </Text>
      <Text className="text-center">Please out the following fields</Text>
      <Divider className="my-2" />
      <View className="my-2">
        <View className="flex-row gap-5 my-1">
          <View className="flex-1 min-w-[200px]">
            <TextInput label="Title" mode="outlined" />
          </View>
        </View>
        <View className="flex-row gap-5 my-1">
          <View className="flex-1 min-w-[200px]">
            <TextInput label="Location" mode="outlined" />
          </View>
        </View>
        <View className="flex-row gap-5 my-1">
          <View className="flex-1 min-w-[200px]">
            <TextInput label="Price" mode="outlined" />
          </View>
        </View>
        <View className="flex-row gap-5 my-1">
          <View className="flex-1 min-w-[200px]">
            <TextInput label="Price" mode="outlined" />
          </View>
          <View className="flex-1 justify-center min-w-[50px]">
            <Button icon="camera" mode="elevated" onPress={() => router.back()}>
              Upload Image
            </Button>
          </View>
        </View>
      </View>

      <View className="flex-row gap-5 my-1">
        <View className="flex-1 min-w-[200px]">
          <Button icon="plus" mode="contained" onPress={() => router.back()}>
            Create New Listing
          </Button>
        </View>
        <View className="flex-1 justify-center min-w-[200px]">
          <Button mode="outlined" onPress={() => router.back()}>
            Go Back
          </Button>
        </View>
      </View>
    </View>
  );
};

export default createProduct;

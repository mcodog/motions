import React from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

const ProductPage = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  // Debug logs
  console.log("All params:", params);

  return (
    <View>
      <Button onPress={() => router.back()}>Go Back</Button>
      <Text>Params: {JSON.stringify(params, null, 2)}</Text>
    </View>
  );
};

export default ProductPage;

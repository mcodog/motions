import { View, Text, Image } from "react-native";
import React from "react";
import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import ms from "../../app/styles/style";

const ProductCard = ({ data }) => {
  return (
    <View className="flex-col gap-5 p-5 py-1">
      <View style={{ elevation: 5, borderRadius: ms(32) }}>
        <View
          className="p-5"
          style={{
            // borderWidth: 1,
            height: ms(400),
            elevation: 5,
            borderRadius: ms(32),
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "70%",
              borderTopLeftRadius: ms(32),
              borderTopRightRadius: ms(32),
            }}
          >
            <Image
              source={{ uri: data.image }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "100%",
                borderTopLeftRadius: ms(32),
                borderTopRightRadius: ms(32),
              }}
            />
          </View>
          <View style={{ height: "70%" }}></View>
          <View className="flex-1 flex-row">
            <View className="w-2/3">
              <Text style={{ fontSize: ms(18), fontWeight: 600 }}>
                {data.location}
              </Text>
              <Text style={{ fontSize: ms(12) }}>{data.name}</Text>
            </View>
            <View className="w-1/3 items-end" style={{ padding: 1 }}>
              <Text style={{ fontSize: ms(20), fontWeight: 600 }}>
                <Feather name="heart" size={24} color="black" />
                {/* <FontAwesome name="star" size={ms(18)} color="black" />
              &nbsp; 4.2 */}
              </Text>
            </View>
          </View>
          <View className="flex-1 flex-row justify-evenly" s>
            <View className="flex-1 justify-center items-center" s>
              <Ionicons
                className="text-center mb-2"
                name="bed-outline"
                size={ms(18)}
                color="black"
              />
              <Text className="text-center" style={{ fontSize: ms(12) }}>
                4 Beds
              </Text>
            </View>
            <View className="flex-1 justify-center items-center" s>
              <MaterialCommunityIcons
                className="text-center  mb-2"
                name="bathtub-outline"
                size={ms(18)}
                color="black"
              />
              <Text className="text-center" style={{ fontSize: ms(12) }}>
                2 Baths
              </Text>
            </View>
            <View className="flex-1 justify-center items-center">
              <FontAwesome5
                className="text-center  mb-2"
                name="parking"
                size={ms(18)}
                color="black"
              />
              <Text className="text-center" style={{ fontSize: ms(12) }}>
                Parking Available
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

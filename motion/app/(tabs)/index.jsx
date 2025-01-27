import {
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

//Custom Components
import ElevatedButton from "../../components/ElevatedButton";
import FadeView from "../../components/FadeView";
import CategoryTiles from "../../components/IconComponents/CategoryTiles";
import ProductCard from "../../components/Card/ProductCard";
//Icons
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import ms from "../styles/style";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";

const sampleData = [
  {
    image: "https://picsum.photos/500/500",
    name: "Serene Paradise",
    location: "Taguig, Philippines",
  },
  {
    image: "https://picsum.photos/500/500",
    name: "Serene Paradise",
    location: "Taguig, Philippines",
  },
];

const index = () => {
  const [categoryFilter, setCategoryFilter] = useState("House");
  const router = useRouter();

  return (
    <FadeView className="flex-1 justify-start items-start">
      <View className="w-full py-2 px-7">
        <ElevatedButton
          elevation={10}
          text="Looking for Something?"
          search="true"
        />
      </View>
      <ScrollView
        style={{ borderColor: "gray", flexGrow: 0, borderBottomWidth: 1 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="px-5"
      >
        <View className="w-full h-24 flex-row">
          <CategoryTiles
            iconType="Ionicons"
            text="House"
            icon="home-outline"
            state={categoryFilter}
            setState={setCategoryFilter}
          />
          <CategoryTiles
            iconType="Ionicons"
            text="Condo"
            icon="business-outline"
            state={categoryFilter}
            setState={setCategoryFilter}
          />
          <CategoryTiles
            iconType="MaterialCommunityIcons"
            text="Pools"
            icon="pool"
            state={categoryFilter}
            setState={setCategoryFilter}
          />
          <CategoryTiles
            iconType="MaterialCommunityIcons"
            text="Beach Fronts"
            icon="island"
            state={categoryFilter}
            setState={setCategoryFilter}
          />
          <CategoryTiles
            iconType="MaterialCommunityIcons"
            text="Cabin"
            icon="cabin-a-frame"
            state={categoryFilter}
            setState={setCategoryFilter}
          />
          <CategoryTiles
            iconType="Feather"
            text="Bed n' Breakfast"
            icon="coffee"
            state={categoryFilter}
            setState={setCategoryFilter}
          />
          <CategoryTiles
            iconType="Fontisto"
            text="Trending"
            icon="fire"
            state={categoryFilter}
            setState={setCategoryFilter}
          />
          <CategoryTiles
            iconType="FontAwesome"
            text="Arctic"
            icon="snowflake-o"
            state={categoryFilter}
            setState={setCategoryFilter}
          />
          <CategoryTiles
            iconType="MaterialCommunityIcons"
            text="Camping"
            icon="campfire"
            state={categoryFilter}
            setState={setCategoryFilter}
          />
          <CategoryTiles
            iconType="MaterialCommunityIcons"
            text="Srufing"
            icon="surfing"
            state={categoryFilter}
            setState={setCategoryFilter}
          />
          <View className="w-8"></View>
        </View>
      </ScrollView>
      <View className="flex-1 w-full">
        <ScrollView>
          <View className="flex-col gap-2 p-2">
            {sampleData.map((item, i) => (
              <Pressable
                key={i}
                onPress={() => {
                  router.push(`product/${i}`);
                }}
              >
                <ProductCard data={item} />
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
    </FadeView>
  );
};

export default index;

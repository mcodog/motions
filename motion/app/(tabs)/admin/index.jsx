import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import ms from "../../styles/style";
import theme from "../../../constants/PaperTheme";

import { Button, DataTable, PaperProvider } from "react-native-paper";

import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const admin = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [numberOfItemsPerPageList] = useState([5, 10]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = useState([
    {
      key: 1,
      title: "Luxury Apartment",
      price: 1200,
      location: "New York, NY",
    },
    {
      key: 2,
      title: "Cozy Studio",
      price: 800,
      location: "San Francisco, CA",
    },
    {
      key: 3,
      title: "Spacious Condo",
      price: 1500,
      location: "Los Angeles, CA",
    },
    {
      key: 4,
      title: "Modern Loft",
      price: 1800,
      location: "Chicago, IL",
    },
    {
      key: 5,
      title: "Beachfront Villa",
      price: 2500,
      location: "Miami, FL",
    },
    {
      key: 6,
      title: "Downtown Apartment",
      price: 950,
      location: "Austin, TX",
    },
    {
      key: 7,
      title: "Penthouse Suite",
      price: 2200,
      location: "Seattle, WA",
    },
    {
      key: 8,
      title: "Suburban House",
      price: 1300,
      location: "Dallas, TX",
    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <PaperProvider theme={theme}>
      <View className="flex-1 p-2">
        <View className="flex-row p-2">
          <View className="flex-1">
            <Text>Welcome Back</Text>
            <Text className="font-bold" style={{ fontSize: ms(20) }}>
              Mark Codog
            </Text>
          </View>
          <View className="justify-center items-center flex-row gap-4">
            <SimpleLineIcons name="user" size={24} color="black" />
            <Ionicons name="settings-outline" size={24} color="black" />
          </View>
        </View>
        <View>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Title</DataTable.Title>
              <DataTable.Title numeric>Price</DataTable.Title>
              <DataTable.Title>Location</DataTable.Title>
            </DataTable.Header>

            {items.slice(from, to).map((item) => (
              <DataTable.Row key={item.key}>
                <DataTable.Cell>{item.title}</DataTable.Cell>
                <DataTable.Cell numeric>{item.price}</DataTable.Cell>
                <DataTable.Cell numeric>{item.location}</DataTable.Cell>
              </DataTable.Row>
            ))}

            <DataTable.Pagination
              page={page}
              numberOfPages={Math.ceil(items.length / itemsPerPage)}
              onPageChange={(page) => setPage(page)}
              label={`${from + 1}-${to} of ${items.length}`}
              numberOfItemsPerPageList={numberOfItemsPerPageList}
              numberOfItemsPerPage={itemsPerPage}
              onItemsPerPageChange={onItemsPerPageChange}
              showFastPaginationControls
              selectPageDropdownLabel={"Rows per page"}
            />
          </DataTable>
        </View>
        <View className="mt-2">
          <Button
            mode="contained"
            onPress={() => router.push("crud/createProduct")}
          >
            Create New Listing
          </Button>
        </View>
      </View>
    </PaperProvider>
  );
};

export default admin;

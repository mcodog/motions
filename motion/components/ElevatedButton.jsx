import { TouchableWithoutFeedback, Text } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";

import ms from "../app/styles/style";

const ElevatedButton = ({ text, search, elevation = 5 }) => {
  return (
    <TouchableWithoutFeedback>
      <Text
        style={{
          elevation: elevation,
          backgroundColor: "white",
          borderRadius: 32,
          padding: ms(10),
          paddingVertical: ms(15),
          textAlign: "center",
          fontSize: ms(13),
          fontWeight: 700,
        }}
      >
        {search ? (
          <>
            <Feather
              style={{ marginHorizontal: ms(5) }}
              name="search"
              size={13}
              color="black"
            />
            &nbsp; &nbsp;
          </>
        ) : null}
        {text}
      </Text>
    </TouchableWithoutFeedback>
  );
};

export default ElevatedButton;

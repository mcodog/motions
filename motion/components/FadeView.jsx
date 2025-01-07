import { View, Text, Animated } from "react-native";
import React, { useEffect, useRef } from "react";

const FadeView = ({ children, className }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 4,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View className={className} style={{ opacity: fadeAnim }}>
      {children}
    </Animated.View>
  );
};

export default FadeView;

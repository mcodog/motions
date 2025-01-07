import { Dimensions } from 'react-native';

// Get screen dimensions
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Base width and height that you designed your UI for
const BASE_WIDTH = 375; // Standard iPhone width
const BASE_HEIGHT = 812; // iPhone X/11/12/13 Pro height

// Function to scale based on screen width
export const sw = (size) => {
  return (SCREEN_WIDTH / BASE_WIDTH) * size;
};

// Function to scale based on screen height
export const sh = (size) => {
  return (SCREEN_HEIGHT / BASE_HEIGHT) * size;
};

// Function that scales based on both dimensions (useful for fonts and elements that should scale with both axes)
export const ms = (size, factor = 0.5) => {
  const wScale = SCREEN_WIDTH / BASE_WIDTH;
  const hScale = SCREEN_HEIGHT / BASE_HEIGHT;
  
  // Use the smaller scale as base
  const scale = Math.min(wScale, hScale);
  
  // Apply a factor to prevent too much scaling on larger screens
  return size + ((scale - 1) * size * factor);
};

export default ms
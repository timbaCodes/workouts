import { View, Text } from "react-native";
import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title : "exercices"}} />
      {/* <Stack.Screen name="[name]" options={{title : "exercicess"}} /> */}
    </Stack>
  );
}

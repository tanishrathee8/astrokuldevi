import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "none",
        contentStyle: {
          backgroundColor: "#120D1F",
        },
        presentation: "card",
      }}
    />
  );
}

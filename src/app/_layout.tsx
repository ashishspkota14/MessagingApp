// shared logic between multiple screens
//example tab navigator , static layouts

import { Slot, Stack, Tabs } from "expo-router";
import "../../global.css";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}

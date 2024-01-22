import React from "react";
import {DrawerNavigation} from "./src/navigation/DrawerNavigation";
import {StatusBar} from "expo-status-bar";

export default function App() {
  return (
      <>
        <StatusBar style={"auto"} translucent={true} />
        <DrawerNavigation/>
      </>
  )
}
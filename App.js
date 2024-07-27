import React from "react";
import { StatusBar } from "expo-status-bar";
import AppNavigator from "./navigation/AppNavigator";
import { registerRootComponent } from 'expo';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AppNavigator />
    </>
  );
}

registerRootComponent(App);
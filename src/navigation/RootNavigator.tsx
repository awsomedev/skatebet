import React, { useEffect, useRef } from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import HomeScreen from "../pages/home/HomeScreen";
import DetailsScreen from "../pages/details/DetailsScreen";
import {
  createStaticNavigation,
  NavigationContainerRef,
  ParamListBase,
} from "@react-navigation/native";
import NavigationManager from "./manager/NavigationManager";
import ProfileScreen from "../pages/profile/ProfileScreen";
import ScreenNames from "./screennames";
import { lightTheme } from "../styling/theme";

const commonOptions: NativeStackNavigationOptions = {
  headerBackButtonDisplayMode: "minimal",
  headerStyle: {
    backgroundColor: lightTheme.colors.background,
  },
  headerTintColor: "white",
  headerTitleStyle: { fontSize: 24, fontWeight: "400" },
  contentStyle: { backgroundColor: lightTheme.colors.background },
};

const Stack = createNativeStackNavigator({
  screens: {
    [ScreenNames.home]: {
      screen: HomeScreen,
      options: {
        headerShown: false,
        contentStyle: { backgroundColor: lightTheme.colors.background },
      },
    },
    [ScreenNames.details]: {
      screen: DetailsScreen,
      options: { ...commonOptions, headerTitle: "" },
    },
    [ScreenNames.profile]: {
      screen: ProfileScreen,
      options: { ...commonOptions, headerTitle: "" },
    },
  },
});

const Navigator = createStaticNavigation(Stack);

export const RootNavigator = () => {
  const navRef = useRef<NavigationContainerRef<ParamListBase>>(null);
  useEffect(() => {
    NavigationManager.ref = navRef.current;
  }, []);
  return <Navigator ref={navRef} />;
};

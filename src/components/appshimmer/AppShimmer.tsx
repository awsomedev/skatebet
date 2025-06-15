import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AutoSkeletonView } from "react-native-auto-skeleton";
import theme from "../../styling/theme";

const AppShimmer = ({
  children,
  isLoading,
}: {
  children: React.ReactNode;
  isLoading: boolean;
}) => {
  return (
    <AutoSkeletonView
      isLoading={isLoading}
      shimmerBackgroundColor={theme.colors.secondary}
      animationType="pulse"
    >
      {children}
    </AutoSkeletonView>
  );
};

export default AppShimmer;

const styles = StyleSheet.create({});

import { Text, View, Animated, Pressable, StyleSheet } from "react-native";
import React from "react";
import Tabs, { TabsProps } from "../../../components/tabs/Tabs";
import NavigationManager from "../../../navigation/manager/NavigationManager";
import ScreenNames from "../../../navigation/screennames";
import AppShimmer from "../../../components/appshimmer/AppShimmer";
import theme from "../../../styling/theme";

interface HomeHeaderProps extends TabsProps {
  scrollY: Animated.Value;
  loading: boolean;
}

const HomeHeader = ({
  scrollY,
  tabs,
  selectedTab,
  onTabPress,
  loading,
}: HomeHeaderProps) => {
  const animatedStyle = {
    transform: [
      {
        translateY: scrollY,
      },
    ],
  };

  const navigateToProfile = () => {
    NavigationManager.navigate({
      name: ScreenNames.profile,
    });
  };
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Text style={styles.title}>Sharp Bet</Text>
      <AppShimmer isLoading={loading}>
        <View style={styles.searchSection}>
          <Text style={styles.searchText}>Search</Text>
        </View>
        <Tabs tabs={tabs} selectedTab={selectedTab} onTabPress={onTabPress} />
      </AppShimmer>
      <Pressable style={styles.profileButton} onPress={navigateToProfile}>
        <Text style={styles.profileButtonText}>SS</Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    padding: theme.spaces.screenPadding,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: theme.colors.titleText,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
  },
  searchSection: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 5,
    height: 40,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 12,
  },
  searchText: {
    color: theme.colors.subtitleText,
    fontSize: 16,
  },
  profileButton: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: theme.colors.secondary,
    position: "absolute",
    top: 10,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  profileButtonText: {
    color: theme.colors.titleText,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeHeader;

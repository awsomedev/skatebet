import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import theme from "../../styling/theme";
import PredictionHistoryItem from "./component/PredictionHistoryItem";
import ProfileHeader from "./component/ProfileHeader";
import AppShimmer from "../../components/appshimmer/AppShimmer";

const profileData = {
  avatar: require("../../../assets/icon.png"), // Placeholder avatar
  username: "John Doe",
  abbr: "JD",
  balance: 1200,
  win: 8,
  loss: 3,
  history: [
    { id: "1", match: "Celtics vs Lakers", amount: 100, result: "Win" },
    { id: "2", match: "Warriors vs Nets", amount: 50, result: "Loss" },
    { id: "3", match: "Bulls vs Heat", amount: 200, result: "Win" },
  ],
};

const ProfileShimmer = () => {
  return (
    <FlatList
      style={styles.container}
      data={profileData.history}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <AppShimmer isLoading={true}>
          <ProfileHeader
            abbr={profileData.abbr}
            username={profileData.username}
            win={profileData.win}
            loss={profileData.loss}
            balance={profileData.balance}
            tabs={[]}
            selectedTab={{
              title: "Ongoing",
              titleColor: theme.colors.primary,
              key: "ongoing",
            }}
            onTabPress={() => {}}
          />
        </AppShimmer>
      }
      renderItem={({ item }) => (
        <AppShimmer isLoading={true}>
          <PredictionHistoryItem
            match={item.match}
            amount={item.amount}
            result={item.result as "Win" | "Loss"}
          />
        </AppShimmer>
      )}
      ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
    />
  );
};

export default ProfileShimmer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spaces.screenPadding,
  },
});

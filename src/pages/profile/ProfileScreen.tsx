import React, { useCallback, useMemo, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import theme from "../../styling/theme";
import ProfileHeader from "./component/ProfileHeader";
import PredictionHistoryItem from "./component/PredictionHistoryItem";
import { ProfileResponse } from "./model/profileresponse";
import { useFetch } from "../../service/hooks/useFetch";
import Endpoints from "../../service/endpoints/endpoints";
import { ITabs } from "../../components/tabs/Tabs";
import { PredictionStorage } from "../../utils/predictionstorage";
import { Prediction } from "../../types/prediction";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ProfileShimmer from "./ProfileShimmer";

const ProfileTabs: ITabs[] = [
  {
    title: "Ongoing",
    titleColor: theme.colors.primary,
    key: "ongoing",
  },
  {
    title: "Completed",
    titleColor: theme.colors.primary,
    key: "completed",
  },
];

const ProfileScreen = () => {
  const { bottom } = useSafeAreaInsets();

  const { data, loading, error } = useFetch<ProfileResponse>({
    endpoint: Endpoints.profile,
    method: "GET",
  });

  const [selectedTab, setSelectedTab] = useState<ITabs>(ProfileTabs[1]);

  const { abbreviation, bettingHistory, stats, username } = data?.data ?? {};

  const history = useMemo(() => {
    if (selectedTab.key === "ongoing") {
      return PredictionStorage.getAllPredictions();
    }
    return bettingHistory;
  }, [bettingHistory, selectedTab]);

  const renderItem = useCallback(({ item }: { item: Prediction }) => {
    const result =
      item.status === "won"
        ? "Win"
        : item.status === "lost"
        ? "Loss"
        : "Pending";
    return (
      <PredictionHistoryItem
        match={item.gameDetails.homeTeam + " vs " + item.gameDetails.awayTeam}
        amount={item.amount}
        result={result}
      />
    );
  }, []);

  const ItemSeparatorComponent = useCallback(() => {
    return <View style={{ height: 12 }} />;
  }, []);

  if (loading) {
    return <ProfileShimmer />;
  }

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={{ paddingBottom: bottom }}
      data={history}
      keyExtractor={(item) => item.id.toString() + item.gameId}
      ListHeaderComponent={
        <ProfileHeader
          abbr={abbreviation}
          username={username}
          win={stats?.totalWon}
          loss={stats?.totalLost}
          balance={stats?.availableBalance}
          tabs={ProfileTabs}
          selectedTab={selectedTab}
          onTabPress={setSelectedTab}
        />
      }
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparatorComponent}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spaces.screenPadding,
  },
});

export default ProfileScreen;

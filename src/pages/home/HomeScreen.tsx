import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAnimatedHeader } from "./hooks/useAnimatedHeader";
import { HomeTabs } from "./utils/constants";
import GameList from "./component/GameList";
import { ITabs } from "../../components/tabs/Tabs";
import { useFetch } from "../../service/hooks/useFetch";
import { HomeResponse } from "./models/home";
import Endpoints from "../../service/endpoints/endpoints";
import HomeHeader from "./component/HomeHeader";
import theme from "../../styling/theme";

const HomeScreen = () => {
  const { top, bottom } = useSafeAreaInsets();
  const { handleScroll, scrollY } = useAnimatedHeader();
  const [selectedTab, setSelectedTab] = useState<ITabs>(HomeTabs[0]);
  const options = useRef<object>({
    type: selectedTab.key,
  });

  const { data, loading, fetchData, poll } = useFetch<HomeResponse>({
    endpoint: Endpoints.dashboard,
    options,
  });

  const onTabPress = (tab: ITabs) => {
    setSelectedTab(tab);
    options.current = {
      type: tab.key,
    };
    fetchData();
  };

  useEffect(() => {
    const stopPolling = poll(10000);
    return stopPolling;
  }, []);

  return (
    <View style={[styles.container, { marginTop: top }]}>
      <GameList
        handleScroll={handleScroll}
        bottom={bottom}
        paddingTop={200}
        games={data?.data || []}
        loading={loading}
      />
      <HomeHeader
        scrollY={scrollY}
        tabs={HomeTabs}
        selectedTab={selectedTab}
        onTabPress={onTabPress}
        loading={loading && !data}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    overflow: "hidden",
  },
});

export default HomeScreen;

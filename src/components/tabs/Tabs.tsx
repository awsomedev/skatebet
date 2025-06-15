import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../../styling/theme";

export interface ITabs {
  title: string;
  titleColor: string;
  key: string;
}

export interface TabsProps {
  tabs: ITabs[];
  selectedTab: ITabs;
  onTabPress: (tab: ITabs) => void;
}

const Tabs = ({ tabs, selectedTab, onTabPress }: TabsProps) => {
  return (
    <View style={styles.tabsRow}>
      {tabs.map((tab) => (
        <TouchableOpacity
          onPress={() => {
            onTabPress(tab);
          }}
          key={tab.title}
          style={[
            styles.tab,
            selectedTab.title == tab.title && {
              borderWidth: 2,
              borderColor: theme.colors.primary,
              opacity: 1,
            },
          ]}
        >
          <Text
            style={[
              styles.tabText,
              { color: tab.titleColor },
              selectedTab.title == tab.title && {
                color: theme.colors.primary,
              },
            ]}
          >
            {tab.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default Tabs;

const styles = StyleSheet.create({
  tabsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: theme.colors.cardBackground,
    borderRadius: 5,
    alignItems: "center",
    opacity: 0.5,
  },
  tabText: {
    color: theme.colors.subtitleText,
    fontSize: 16,
    fontWeight: "500",
  },
});

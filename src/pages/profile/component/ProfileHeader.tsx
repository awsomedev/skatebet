import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import Tabs, { ITabs } from "../../../components/tabs/Tabs";
import theme from "../../../styling/theme";

interface ProfileHeaderProps {
  abbr?: string;
  username?: string;
  win?: number;
  loss?: number;
  balance?: number;
  tabs: ITabs[];
  selectedTab: ITabs;
  onTabPress: (tab: ITabs) => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  abbr,
  username,
  win,
  loss,
  balance,
  tabs,
  selectedTab,
  onTabPress,
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.avatar}>
        <Text style={styles.abbr}>{abbr ?? "SS"}</Text>
      </View>
      <Text style={styles.username}>{username ?? "User"}</Text>
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Wins</Text>
          <Text style={styles.statValue}>{win ?? 0}</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Losses</Text>
          <Text style={styles.statValue}>{loss ?? 0}</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Balance</Text>
          <Text style={styles.statValue}>${balance ?? 0}</Text>
        </View>
      </View>
      <Tabs tabs={tabs} selectedTab={selectedTab} onTabPress={onTabPress} />
      <View style={styles.sectionTitleContainer}>
        <SectionTitle title={`${selectedTab.title} Predictions`} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitleContainer: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
    backgroundColor: theme.colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  abbr: {
    color: theme.colors.titleText,
    fontSize: 22,
    fontWeight: "600",
  },
  username: {
    color: theme.colors.titleText,
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 8,
    marginBottom: 20,
    gap: 10,
  },
  statBox: {
    flex: 1,
    backgroundColor: theme.colors.cardBackground,
    borderRadius: 12,
    alignItems: "center",
    paddingVertical: 16,
  },
  statLabel: {
    color: theme.colors.subtitleText,
    fontSize: 14,
    marginBottom: 4,
  },
  statValue: {
    color: theme.colors.titleText,
    fontSize: 20,
    fontWeight: "bold",
  },
  sectionTitle: {
    color: theme.colors.titleText,
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 12,
    marginTop: 10,
  },
});

export default ProfileHeader;

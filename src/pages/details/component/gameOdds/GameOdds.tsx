import React from "react";
import { StyleSheet, View, Text } from "react-native";
import SectionTitle from "../../../../components/sectiontitle/SectionTitle";
import { Odds } from "../../../home/models/home";
import theme from "../../../../styling/theme";

const OddsItem = ({ title, value }: { title: string; value: string }) => {
  return (
    <View style={styles.oddsItem}>
      <Text style={styles.oddsItemText}>
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </Text>
      <Text style={styles.oddsItemValue}>{value}</Text>
    </View>
  );
};

const GameOdds = ({ odds }: { odds?: Odds }) => {
  if (!odds) return null;
  return (
    <View style={styles.container}>
      <SectionTitle title="Game Odds" />
      <View style={styles.oddsContainer}>
        {Object.entries(odds).map(([key, value]) => (
          <OddsItem key={key} title={key} value={value} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  oddsContainer: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: 10,
    padding: 10,
  },
  oddsItem: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  oddsItemText: {
    fontSize: 16,
    fontWeight: "500",
    color: theme.colors.subtitleText,
  },
  oddsItemValue: {
    fontSize: 16,
    fontWeight: "500",
    color: theme.colors.titleText,
  },
});

export default GameOdds;

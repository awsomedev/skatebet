import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../../../styling/theme";

interface TeamScoreCardProps {
  name: string;
  score: number;
  record: string;
}

const TeamScoreCard: React.FC<TeamScoreCardProps> = ({
  name,
  score,
  record,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.teamContainer} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.record}>{record}</Text>
      <Text style={styles.score}>{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.cardBackground,
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: 15,
    borderWidth: 1,
  },
  score: {
    color: theme.colors.success,
    fontSize: 40,
    fontWeight: "bold",
  },
  record: {
    color: theme.colors.subtitleText,
    fontSize: 22,
    marginBottom: 8,
  },
  name: {
    color: theme.colors.titleText,
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 8,
  },
  teamContainer: {
    width: 100,
    height: 100,
    backgroundColor: theme.colors.secondary,
    borderRadius: 12,
    marginBottom: 20,
  },
});

export default TeamScoreCard;

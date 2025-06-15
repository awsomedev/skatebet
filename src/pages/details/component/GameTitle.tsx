import React from "react";
import { StyleSheet, Text } from "react-native";
import { Team } from "../../home/models/home";
import theme from "../../../styling/theme";

interface GameTitleProps {
  homeTeam?: Team;
  awayTeam?: Team;
}

const GameTitle: React.FC<GameTitleProps> = ({ homeTeam, awayTeam }) => {
  if (!homeTeam || !awayTeam) {
    return null;
  }
  return (
    <Text style={styles.title}>
      {homeTeam?.name} ({homeTeam?.abbreviation}){" "}
      <Text style={{ fontSize: 20 }}>VS</Text> {awayTeam?.name} (
      {awayTeam?.abbreviation})
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: theme.colors.titleText,
  },
});

export default GameTitle;

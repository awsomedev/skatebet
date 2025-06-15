import React from "react";
import { StyleSheet, View } from "react-native";
import TeamScoreCard from "./TeamScoreCard";
import { Team } from "../model/apiResponse";

interface ScoreCardSectionProps {
  homeTeam?: Team;
  awayTeam?: Team;
}

const ScoreCardSection: React.FC<ScoreCardSectionProps> = ({
  homeTeam,
  awayTeam,
}) => {
  if (!homeTeam || !awayTeam) {
    return null;
  }

  return (
    <View style={styles.scoreContainer}>
      <TeamScoreCard
        name={homeTeam.name}
        score={homeTeam.score}
        record={homeTeam.record}
      />
      <TeamScoreCard
        name={awayTeam.name}
        score={awayTeam.score}
        record={awayTeam.record}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
});

export default ScoreCardSection;

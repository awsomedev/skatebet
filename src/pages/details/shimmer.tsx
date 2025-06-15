import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AppShimmer from "../../components/appshimmer/AppShimmer";
import TeamScoreCard from "./component/TeamScoreCard";
import GameOdds from "./component/gameOdds/GameOdds";
import PredictionSection from "./component/prediction/PredictionSection";
import Button from "../../components/Button";
import { Odds } from "../home/models/home";
import theme from "../../styling/theme";

const DetailShimmer = () => {
  return (
    <AppShimmer isLoading={true}>
      <View style={styles.container}>
        <Text style={styles.title}>
          {"Mock Data"} ({"Mock"}) <Text style={{ fontSize: 20 }}>VS</Text>{" "}
          {"Mock Dara"} ({"mock"})
        </Text>
        <View style={styles.scoreContainer}>
          <TeamScoreCard name={"Mock Data"} record={"Mock Data"} score={0} />
          <TeamScoreCard name={"Mock Data"} record={"Mock Data"} score={0} />
        </View>
        <GameOdds odds={{} as Odds} />
        <PredictionSection
          homeTeam={"Mock Data"}
          awayTeam={"Mock Data"}
          onPredictionSelection={(team) => {}}
          onAmountChange={(amt) => {}}
          preSelectedTeam={"Mock Data"}
          preSelectedAmount={"Mock Data"}
        />
        <Button
          title="Submit"
          variant="primary"
          height={50}
          onPress={() => {}}
        />
      </View>
    </AppShimmer>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: theme.spaces.screenPadding,
    gap: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
});
export default DetailShimmer;

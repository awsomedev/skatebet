import { StyleSheet, ScrollView } from "react-native";
import React from "react";
import GameOdds from "./component/gameOdds/GameOdds";
import PredictionSection from "./component/prediction/PredictionSection";
import Button from "../../components/Button";
import { RootStackParamList } from "../../navigation/manager/NavigationManager";
import ScreenNames from "../../navigation/screennames";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useFetch } from "../../service/hooks/useFetch";
import Endpoints from "../../service/endpoints/endpoints";
import { DetailsResponse } from "./model/apiResponse";
import DetailShimmer from "./shimmer";
import BettingDetails from "./component/betting/BettingDetails";
import GameTitle from "./component/GameTitle";
import ScoreCardSection from "./component/ScoreCardSection";
import usePrediction from "./hooks/usePrediction";
import theme from "../../styling/theme";

type ScreenRouteProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenNames.details
>;

const DetailsScreen = (props: ScreenRouteProps) => {
  const { gameId } = props.route.params;

  const { data, loading, error } = useFetch<DetailsResponse>({
    endpoint: Endpoints.details + "/" + gameId,
    method: "GET",
  });
  const { awayTeam, homeTeam, bettingStats, userBet, status } =
    data?.data ?? {};

  const {
    onPredictionSelection,
    onAmountChange,
    onSubmit,
    currentPrediction,
    preselectedTeam,
    preselectedAmount,
  } = usePrediction(gameId, homeTeam?.name ?? "", awayTeam?.name ?? "");

  const isCompleted = status === "completed";

  if (loading) {
    return <DetailShimmer />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <GameTitle homeTeam={homeTeam} awayTeam={awayTeam} />
      <ScoreCardSection homeTeam={homeTeam} awayTeam={awayTeam} />
      <GameOdds odds={data?.data.odds} />
      {isCompleted && (
        <BettingDetails bettingStats={bettingStats} userBet={userBet} />
      )}
      {!isCompleted && (
        <>
          <PredictionSection
            homeTeam={homeTeam?.name ?? ""}
            awayTeam={awayTeam?.name ?? ""}
            preSelectedTeam={preselectedTeam}
            preSelectedAmount={preselectedAmount}
            onPredictionSelection={onPredictionSelection}
            onAmountChange={onAmountChange}
          />
          <Button
            title={currentPrediction ? "Update" : "Submit"}
            variant="primary"
            height={50}
            onPress={onSubmit}
          />
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spaces.screenPadding,
    paddingVertical: 20,
    gap: 30,
  },
});

export default DetailsScreen;

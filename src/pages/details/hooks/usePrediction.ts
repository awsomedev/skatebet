import { View, Text, Alert } from "react-native";
import React, { useRef } from "react";
import { PredictionStorage } from "../../../utils/predictionstorage";

const usePrediction = (gameId: string, homeTeam: string, awayTeam: string) => {
  const currentPrediction = PredictionStorage.getPredictionById(gameId);
  const preselectedTeam =
    currentPrediction?.team === "home" ? homeTeam : awayTeam;
  const preselectedAmount = currentPrediction?.amount?.toString() ?? "";
  const selectedTeam = useRef<string>(preselectedTeam);
  const amount = useRef<string>(preselectedAmount);

  const onPredictionSelection = (team: string) => {
    selectedTeam.current = team;
  };
  const onAmountChange = (amt: string) => {
    amount.current = amt;
  };

  const onSubmit = () => {
    const action = currentPrediction
      ? PredictionStorage.updatePrediction
      : PredictionStorage.addPrediction;
    action({
      gameId: gameId,
      team: selectedTeam.current === homeTeam ? "home" : "away",
      amount: Number(amount.current),
      createdAt: new Date().toISOString(),
      gameDetails: {
        homeTeam: homeTeam ?? "",
        awayTeam: awayTeam ?? "",
        score: "",
      },
      id: Date.now(),
    });
    Alert.alert(
      currentPrediction
        ? "Prediction updated successfully"
        : "Prediction submitted successfully"
    );
  };
  return {
    onPredictionSelection,
    onAmountChange,
    onSubmit,
    selectedTeam,
    amount,
    currentPrediction,
    preselectedTeam,
    preselectedAmount,
  };
};

export default usePrediction;

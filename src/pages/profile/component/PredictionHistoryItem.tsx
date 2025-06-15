import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../../../styling/theme";

interface PredictionHistoryItemProps {
  match: string;
  amount: number;
  result: "Win" | "Loss" | "Pending";
}

const PredictionHistoryItem: React.FC<PredictionHistoryItemProps> = ({
  match,
  amount,
  result,
}) => {
  return (
    <View style={styles.historyItem}>
      <Text style={styles.matchText}>{match}</Text>
      <Text style={styles.amountText}>${amount}</Text>
      <Text
        style={[
          styles.resultText,
          result === "Win"
            ? styles.win
            : result === "Loss"
            ? styles.loss
            : styles.pending,
        ]}
      >
        {result}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  historyItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.cardBackground,
    borderRadius: 10,
    padding: 16,
    gap: 12,
  },
  matchText: {
    flex: 2,
    color: theme.colors.titleText,
    fontSize: 16,
  },
  pending: {
    color: theme.colors.primary,
  },
  amountText: {
    flex: 1,
    color: theme.colors.subtitleText,
    fontSize: 16,
    textAlign: "center",
  },
  resultText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
  },
  win: {
    color: theme.colors.success,
  },
  loss: {
    color: theme.colors.error,
  },
});

export default PredictionHistoryItem;

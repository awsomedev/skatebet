import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import SectionTitle from "../../../../components/sectiontitle/SectionTitle";
import TeamCard from "./TeamCard";
import theme from "../../../../styling/theme";

interface PredictionSectionProps {
  homeTeam: string;
  awayTeam: string;
  onPredictionSelection: (team: string) => void;
  onAmountChange: (amount: string) => void;
  preSelectedTeam: string;
  preSelectedAmount: string;
}

const PredictionSection = ({
  homeTeam,
  awayTeam,
  onPredictionSelection,
  onAmountChange,
  preSelectedTeam,
  preSelectedAmount,
}: PredictionSectionProps) => {
  const [selected, setSelected] = useState<string | null>(preSelectedTeam);
  const [amount, setAmount] = useState(preSelectedAmount);
  const onValueChange = (value: string) => {
    setAmount(value);
    onAmountChange(value);
  };

  const onTeamPress = (team: string) => {
    setSelected(team);
    onPredictionSelection(team);
  };
  return (
    <View style={styles.container}>
      <SectionTitle title="Make your prediction" />
      <View style={styles.teamCardRow}>
        <TeamCard
          name={homeTeam}
          selected={selected === homeTeam}
          onPress={() => onTeamPress(homeTeam)}
        />
        <TeamCard
          name={awayTeam}
          selected={selected === awayTeam}
          onPress={() => onTeamPress(awayTeam)}
        />
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amountLabel}>Prediction Amount</Text>
        <TextInput
          style={styles.amountInput}
          placeholder="Enter amount"
          placeholderTextColor={theme.colors.subtitleText}
          value={amount}
          onChangeText={onValueChange}
          keyboardType="numeric"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  teamCardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    marginBottom: 20,
  },
  amountContainer: {
    gap: 10,
  },
  amountLabel: {
    color: theme.colors.subtitleText,
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 2,
  },
  amountInput: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 24,
    fontSize: 16,
    color: theme.colors.subtitleText,
    marginBottom: 10,
  },
});

export default PredictionSection;

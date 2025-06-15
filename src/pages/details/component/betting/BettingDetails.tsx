import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SectionTitle from "../../../../components/sectiontitle/SectionTitle";
import theme from "../../../../styling/theme";

interface BettingStats {
  awayTeamAmount: number;
  awayTeamBets: number;
  homeTeamAmount: number;
  homeTeamBets: number;
  totalAmount: number;
  totalBets: number;
}

interface UserBet {
  amount: number;
  createdAt: string;
  formattedCreatedAt: string;
  id: number;
  status: "won" | "lost" | "pending";
  team: "home" | "away";
}

interface BettingDetailsProps {
  bettingStats?: BettingStats;
  userBet?: UserBet;
}

const BettingDetails = ({ bettingStats, userBet }: BettingDetailsProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "won":
        return theme.colors.success;
      case "lost":
        return theme.colors.error;
      default:
        return theme.colors.primary;
    }
  };

  if (!bettingStats && !userBet) {
    return null;
  }

  return (
    <View style={styles.container}>
      <SectionTitle title="Betting Stats" />
      {bettingStats && (
        <View style={styles.statsContainer}>
          <View style={styles.statRow}>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Home Team</Text>
              <Text style={styles.statValue}>
                ${bettingStats.homeTeamAmount}
              </Text>
              <Text style={styles.statSubtext}>
                {bettingStats.homeTeamBets} bets
              </Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Away Team</Text>
              <Text style={styles.statValue}>
                ${bettingStats.awayTeamAmount}
              </Text>
              <Text style={styles.statSubtext}>
                {bettingStats.awayTeamBets} bets
              </Text>
            </View>
          </View>
          <View style={styles.totalStats}>
            <Text style={styles.totalLabel}>Total Bets</Text>
            <Text style={styles.totalValue}>${bettingStats.totalAmount}</Text>
            <Text style={styles.totalSubtext}>
              {bettingStats.totalBets} bets placed
            </Text>
          </View>
        </View>
      )}

      {userBet && (
        <>
          <SectionTitle title="Your Bet" />
          <View style={styles.userBetContainer}>
            <View style={styles.userBetRow}>
              <Text style={styles.userBetLabel}>Amount</Text>
              <Text style={styles.userBetValue}>${userBet.amount}</Text>
            </View>
            <View style={styles.userBetRow}>
              <Text style={styles.userBetLabel}>Team</Text>
              <Text style={styles.userBetValue}>
                {userBet.team.toUpperCase()}
              </Text>
            </View>
            <View style={styles.userBetRow}>
              <Text style={styles.userBetLabel}>Status</Text>
              <Text
                style={[
                  styles.userBetValue,
                  { color: getStatusColor(userBet.status) },
                ]}
              >
                {userBet.status.toUpperCase()}
              </Text>
            </View>
            <View style={styles.userBetRow}>
              <Text style={styles.userBetLabel}>Placed On</Text>
              <Text style={styles.userBetValue}>
                {userBet.formattedCreatedAt}
              </Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  statsContainer: {
    gap: 15,
  },
  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
  },
  statBox: {
    flex: 1,
    backgroundColor: theme.colors.cardBackground,
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
  },
  statLabel: {
    color: theme.colors.subtitleText,
    fontSize: 14,
    marginBottom: 8,
  },
  statValue: {
    color: theme.colors.titleText,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  statSubtext: {
    color: theme.colors.subtitleText,
    fontSize: 12,
  },
  totalStats: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
  },
  totalLabel: {
    color: theme.colors.subtitleText,
    fontSize: 16,
    marginBottom: 8,
  },
  totalValue: {
    color: theme.colors.titleText,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  totalSubtext: {
    color: theme.colors.subtitleText,
    fontSize: 14,
  },
  userBetContainer: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: 12,
    padding: 15,
    gap: 12,
  },
  userBetRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userBetLabel: {
    color: theme.colors.subtitleText,
    fontSize: 16,
  },
  userBetValue: {
    color: theme.colors.titleText,
    fontSize: 16,
    fontWeight: "500",
  },
});

export default BettingDetails;

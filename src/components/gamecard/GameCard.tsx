import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import theme from "../../styling/theme";
import Button from "../Button";
import NavigationManager from "../../navigation/manager/NavigationManager";
import ScreenNames from "../../navigation/screennames";
import AppShimmer from "../appshimmer/AppShimmer";
import { Game } from "../../pages/home/models/home";

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "live":
      return theme.colors.success;
    case "completed":
      return theme.colors.error;
    default:
      return theme.colors.primary;
  }
};

const getStatusText = (status: string) => {
  switch (status.toLowerCase()) {
    case "live":
      return "LIVE";
    case "completed":
      return "COMPLETED";
    default:
      return "UPCOMING";
  }
};

const StatusData = {
  live: {
    color: theme.colors.error,
    text: "LIVE",
  },
  completed: {
    color: theme.colors.success,
    text: "COMPLETED",
  },
  upcoming: {
    color: theme.colors.primary,
    text: "UPCOMING",
  },
};

const GameCard = ({ loading, game }: { loading: boolean; game: Game }) => {
  const navigateToDetailScreen = () => {
    NavigationManager.navigate({
      name: ScreenNames.details,
      params: {
        gameId: game.id,
      },
    });
  };
  return (
    <Pressable onPress={navigateToDetailScreen} style={styles.cardContainer}>
      <AppShimmer isLoading={loading}>
        <View style={styles.headerRow}>
          <Text style={styles.leagueText}>NFL</Text>
          <Text style={styles.timeText}>{game.formattedStartTime}</Text>
        </View>
        <Text style={styles.matchupText}>
          {game.homeTeam.abbreviation} vs {game.awayTeam.abbreviation}
        </Text>
        <Text style={styles.recordText}>
          {game.homeTeam.abbreviation} ({game.homeTeam.record}) vs{" "}
          {game.awayTeam.abbreviation} ({game.awayTeam.record})
        </Text>
        <View style={styles.bottomRow}>
          <Button
            variant="secondary"
            title="View Odds"
            width={120}
            onPress={navigateToDetailScreen}
          />
          <View
            style={[
              styles.statusBadge,
              { backgroundColor: getStatusColor(game.status) },
            ]}
          >
            <Text style={styles.statusText}>{getStatusText(game.status)}</Text>
          </View>
        </View>
      </AppShimmer>
    </Pressable>
  );
};

export default GameCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: theme.colors.cardBorder,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  leagueText: {
    color: theme.colors.subtitleText,
    fontSize: 16,
    fontWeight: "500",
  },
  timeText: {
    color: theme.colors.subtitleText,
    fontSize: 16,
    fontWeight: "400",
  },
  matchupText: {
    color: theme.colors.titleText,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },
  recordText: {
    color: theme.colors.subtitleText,
    fontSize: 16,
    marginBottom: 20,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  statusText: {
    color: theme.colors.titleText,
    fontSize: 12,
    fontWeight: "600",
  },
});

import React from "react";
import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../../../../styling/theme";

interface TeamCardProps {
  name: string;
  logo?: any;
  selected?: boolean;
  onPress?: () => void;
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  logo,
  selected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.card, selected && styles.selectedCard]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {logo && <Image source={logo} style={styles.logo} resizeMode="contain" />}
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: theme.colors.cardBackground,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  name: {
    color: theme.colors.titleText,
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default TeamCard;

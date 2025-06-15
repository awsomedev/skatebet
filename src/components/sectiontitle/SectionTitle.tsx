import { Text, StyleSheet } from "react-native";
import React from "react";
import theme from "../../styling/theme";

const SectionTitle = ({ title }: { title: string }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: theme.colors.titleText,
  },
});

export default SectionTitle;

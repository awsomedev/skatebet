import React from "react";
import { Text, StyleSheet, DimensionValue, Pressable } from "react-native";
import theme from "../styling/theme";

interface ButtonProps {
  title: string;
  onPress: () => void;
  height?: number;
  width?: DimensionValue;
  variant?: "primary" | "secondary";
}

const BUTTON_COLORS = {
  primary: theme.colors.primary,
  secondary: theme.colors.secondary,
};

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  height = 45,
  width,
  variant = "primary",
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={(pressStatus) => [
        styles.button,
        {
          backgroundColor: BUTTON_COLORS[variant],
          height,
          width,
        },
        pressStatus.pressed && {
          transform: [{ scale: 0.95 }],
        },
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  text: {
    color: theme.colors.titleText,
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Button;

const lightTheme = {
  colors: {
    background: "#120E1B",
    cardBackground: "#171221",
    cardBorder: "#564C6C",
    titleText: "#fff",
    subtitleText: "#b3b0c3",
    primary: "#A394C7",
    secondary: "#2A233A",
    error: "#FF6B6B",
    success: "#51CF66",
  },
  spaces: {
    screenPadding: 20,
    itemPadding: 20,
  },
};
type Theme = typeof lightTheme;

const darkTheme: Theme = {
  colors: {
    background: "#F7F6FA",
    cardBackground: "#FFFFFF",
    cardBorder: "#DAD6E0",
    titleText: "#1E1B2C",
    subtitleText: "#5C5770",
    primary: "#6B5CA5",
    secondary: "#EAE6F3",
    error: "#D64545",
    success: "#2F9E44",
  },
  spaces: {
    screenPadding: 20,
    itemPadding: 20,
  },
};

export default lightTheme;

export { darkTheme, lightTheme };
export type { Theme };

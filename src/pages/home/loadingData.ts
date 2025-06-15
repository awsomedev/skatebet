export const loadingData = Array.from({ length: 10 }, (_, index) => ({
  id: index.toString(),
  awayTeam: {
    abbreviation: "NYJ",
    name: "New York Jets",
    record: "10-7",
  },
  homeTeam: {
    abbreviation: "BUF",
    name: "Buffalo Bills",
    record: "13-3",
  },
  odds: {
    favorite: "NYJ",
    spread: "1.5",
  },
  formattedStartTime: "13/06/2025 06 AM",
  startTime: "2021-09-01T12:00:00Z",
  status: "upcoming",
}));

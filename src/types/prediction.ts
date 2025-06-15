interface GameDetails {
  awayTeam: string;
  homeTeam: string;
  score: string;
}
interface Prediction {
  amount: number;
  createdAt: string;
  gameDetails: GameDetails;
  gameId: string;
  id: number;
  status?: "won" | "lost";
  team: "home" | "away";
}

export type { Prediction, GameDetails };

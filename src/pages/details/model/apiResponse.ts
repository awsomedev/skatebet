interface Team {
  abbreviation: string;
  name: string;
  record: string;
  score: number;
}

interface Odds {
  favorite: string;
  spread: string;
}

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

interface GameDetails {
  awayTeam: Team;
  homeTeam: Team;
  formattedStartTime: string;
  id: string;
  odds: Odds;
  startTime: string;
  status: string;
  bettingStats: BettingStats;
  userBet?: UserBet;
}

export interface DetailsResponse {
  data: GameDetails;
  message: string;
  status: string;
  timestamp: string;
}

export type { Team, Odds, BettingStats, UserBet, GameDetails };

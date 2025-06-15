import { Prediction } from "../../../types/prediction";

interface Stats {
  availableBalance: number;
  totalLost: number;
  totalPlayed: number;
  totalWon: number;
}

interface ProfileData {
  abbreviation: string;
  bettingHistory: Prediction[];
  stats: Stats;
  username: string;
}

export interface ProfileResponse {
  data: ProfileData;
  message: string;
  status: string;
  timestamp: string;
}

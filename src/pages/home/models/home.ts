interface Team {
  abbreviation: string;
  name: string;
  record: string;
}

interface Odds {
  favorite: string;
  spread: string;
}

interface Game {
  awayTeam: Team;
  homeTeam: Team;
  id: string;
  odds: Odds;
  startTime: string;
  formattedStartTime: string;
  status: string;
}

interface HomeResponse {
  data: Game[];
  message: string;
  status: string;
  timestamp: string;
}

export type { Team, Odds, Game, HomeResponse };

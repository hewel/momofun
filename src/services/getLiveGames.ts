import ky from 'ky';

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  profile_url: string;
}

type Games = Game[];

export const getLiveGames = () => ky.get('http://192.168.0.20:8080/api1/games').json<Games>();

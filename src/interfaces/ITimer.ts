import { Player } from "../models/ClassPlayer";

export interface ITimer {
    currentPlayer: Player | null;
    restart: () => void;
    
}
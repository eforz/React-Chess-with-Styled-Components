import { Board } from "../models/ClassBoard";
import { Player } from "../models/ClassPlayer";

export interface IBoardComponentProps {
    children?: React.ReactNode | React.ReactChild;
    board: Board;
    setBoard: (board: Board) => void;
    swapPlayer: () => void;
    currentPlayer: Player | null;
}
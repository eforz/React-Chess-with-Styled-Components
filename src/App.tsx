import { useEffect, useState } from 'react';
import AppWrapper from './components/styledComponents/AppWrapper';
import BoardComponent from './components/styledComponents/BoardComponent';
import Flex from './components/styledComponents/Flex';
import { Board } from './models/ClassBoard';
import { Colors } from './models/Colors';
import { Player } from './models/ClassPlayer';
import LostFigures from './components/styledComponents/LostFigures';
import Timer from './components/styledComponents/Timer';


function App() {

  const [board, setBoard] = useState(new Board())
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

  useEffect(() => {
    restart()
    setCurrentPlayer(whitePlayer)
  }, [])

  function restart() {
    const newBoard = new Board();
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  console.log(board)

  return (
    <div className="App">
      <AppWrapper>
          <Flex align='center' justify='center'>
            <Timer restart={restart} currentPlayer={currentPlayer}/>
          </Flex>
          <BoardComponent 
            board={board} 
            setBoard={setBoard}
            currentPlayer={currentPlayer}
            swapPlayer={swapPlayer}
          />
          <Flex align='center' justify='center'>
            <LostFigures 
              title='Black figures' 
              figures={board.lostBlackFigures}
            />
            <LostFigures 
              title='White figures' 
              figures={board.lostWhiteFigures}
            />
          </Flex>
      </AppWrapper>
    </div>
  );
}

export default App;

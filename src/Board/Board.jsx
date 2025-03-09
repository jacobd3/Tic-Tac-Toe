import styles from "./Board.module.css";
import GridElement from "./GridCell";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import { PlayerContext } from "../providers/ActivePlayerProvider";
import { ScoreContext } from "../providers/ScoreProvider";

export default function Board() {
  const [activePlayer, setActivePlayer] = useContext(PlayerContext);
  const [score, setScore] = useContext(ScoreContext);
  const [cells, setCells] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [isGameActive, setIsGameActive] = useState(false);

  function calculateWinner(cells) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        const nextScore = score.slice();
        if (activePlayer == 1) {
          nextScore[0]++;
          setScore(nextScore);
        } else {
          nextScore[1]++;
          setScore(nextScore);
        }
        setCells(Array(9).fill(null));
      }
      if (!cells.includes(null)) {
        setCells(Array(9).fill(null));
        setActivePlayer(Math.floor(Math.random() * (2 - 1 + 1) + 1));
      }
    }
    return null;
  }

  function startGameHandler() {
    setCells(Array(9).fill(null));
    setActivePlayer(Math.floor(Math.random() * (2 - 1 + 1) + 1));
    setIsGameActive(true);
    setScore([0, 0]);
  }

  function cellClickHandler(i) {
    const nextCells = cells.slice();
    if (isGameActive) {
      if (cells[i]) return;

      if (xIsNext) {
        nextCells[i] = "X";
        setCells(nextCells);
      } else {
        nextCells[i] = "O";
        setCells(nextCells);
      }

      calculateWinner(nextCells);
      activePlayer == 1 ? setActivePlayer(2) : setActivePlayer(1);
      setXIsNext(!xIsNext);
    }
  }

  return (
    <main>
      <div className={styles.start_btn_wrapper}>
        <Button
          variant="contained"
          sx={{ borderRadius: "10px", background: "#185a9d" }}
          onClick={startGameHandler}
        >
          new game
        </Button>
      </div>
      <div className={styles.board_wrapper}>
        <div className={styles.board}>
          <GridElement
            value={cells[0]}
            onCellClick={() => cellClickHandler(0)}
          />
          <GridElement
            value={cells[1]}
            onCellClick={() => cellClickHandler(1)}
          />
          <GridElement
            value={cells[2]}
            onCellClick={() => cellClickHandler(2)}
          />
          <GridElement
            value={cells[3]}
            onCellClick={() => cellClickHandler(3)}
          />
          <GridElement
            value={cells[4]}
            onCellClick={() => cellClickHandler(4)}
          />
          <GridElement
            value={cells[5]}
            onCellClick={() => cellClickHandler(5)}
          />
          <GridElement
            value={cells[6]}
            onCellClick={() => cellClickHandler(6)}
          />
          <GridElement
            value={cells[7]}
            onCellClick={() => cellClickHandler(7)}
          />
          <GridElement
            value={cells[8]}
            onCellClick={() => cellClickHandler(8)}
          />
        </div>
      </div>
    </main>
  );
}

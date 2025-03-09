import styles from "./PlayerTwoTable.module.css";
import clsx from "clsx";
import { useContext } from "react";
import { PlayerContext } from "../providers/ActivePlayerProvider";
import { ScoreContext } from "../providers/ScoreProvider";

export default function PlayerTwoTable() {
  const [activePlayer] = useContext(PlayerContext);
  const [score] = useContext(ScoreContext);

  const userScoreStyle = clsx({
    [styles.active_player_score]: activePlayer === 2,
  });
  return (
    <div className={`${styles.table} table`}>
      <h1 className={userScoreStyle}>Player 2 score: {score[1]}</h1>
    </div>
  );
}

import styles from "./PlayerOneTable.module.css";
import clsx from "clsx";
import { PlayerContext } from "../providers/ActivePlayerProvider";
import { ScoreContext } from "../providers/ScoreProvider";
import { useContext } from "react";

export default function PlayerOneTable() {
  const [activePlayer] = useContext(PlayerContext);
  const [score] = useContext(ScoreContext);

  const userScoreStyle = clsx({
    [styles.active_player_score]: activePlayer === 1,
  });
  return (
    <div className={`${styles.table} table`}>
      <h1 className={userScoreStyle}>Player 1 score: {score[0]}</h1>
    </div>
  );
}

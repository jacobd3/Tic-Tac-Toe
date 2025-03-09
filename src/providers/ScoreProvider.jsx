import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ScoreContext = createContext();

export default function ScoreProvider({ children }) {
  const [score, setScore] = useState([0, 0]);

  return (
    <ScoreContext.Provider value={[score, setScore]}>
      {children}
    </ScoreContext.Provider>
  );
}

ScoreProvider.propTypes = {
  children: PropTypes.node,
};

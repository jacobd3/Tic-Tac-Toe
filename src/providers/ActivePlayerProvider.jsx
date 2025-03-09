import { useState, createContext } from "react";
import PropTypes from "prop-types";

export const PlayerContext = createContext();

export default function ActivePlayerProvider({ children }) {
  const [activePlayer, setActivePlayer] = useState();

  return (
    <PlayerContext.Provider value={[activePlayer, setActivePlayer]}>
      {children}
    </PlayerContext.Provider>
  );
}

ActivePlayerProvider.propTypes = {
  children: PropTypes.node,
};

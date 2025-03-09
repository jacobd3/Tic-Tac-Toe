import Board from "./Board/Board";
import PlayerOneTable from "./Players/PlayerOneTable";
import PlayerTwoTable from "./Players/PlayerTwoTable";
import ActivePlayerProvider from "./providers/ActivePlayerProvider";
import ScoreProvider from "./providers/ScoreProvider";

function App() {
  return (
    <>
      <ScoreProvider>
        <ActivePlayerProvider>
          <PlayerOneTable />
          <Board />
          <PlayerTwoTable />
        </ActivePlayerProvider>
      </ScoreProvider>
    </>
  );
}

export default App;

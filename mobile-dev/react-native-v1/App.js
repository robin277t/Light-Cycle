import DPad from "./components/d-pad";
import Countdown from "./components/countdown";
import GameOver from "./components/gameovermodal"

export default function App() {
  return ( 
    <>
    <Countdown />
    <DPad />
    <GameOver />
    </>
    );
}
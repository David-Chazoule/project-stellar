import type { View } from "../../types/gameState";

type Props = {
  setView: React.Dispatch<React.SetStateAction<View>>;
};

function Welcome({ setView }: Props) {
  return (
    <div>
      Welcome
      <div>
        <button onClick={() => setView("missions")}>Continuer</button>
      </div>
    </div>
  );
}

export default Welcome;

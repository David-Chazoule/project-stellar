import { StartGameStep } from "./StartGameFlow";

type Props = {
  startStep: StartGameStep;
  setStartStep: React.Dispatch<React.SetStateAction<StartGameStep>>;
};

function Welcome({ startStep, setStartStep }: Props) {
  return <div>Welcome</div>;
}

export default Welcome;

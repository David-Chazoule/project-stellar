import Button from "@/components/Ui/Button";
import { locations, sectorNames, type LocationId } from "@/data/locations";

type Props = {
  destinationId: LocationId;
  onContinue: () => void;
  travelDuration: number;
};

function TravelArrival({ destinationId, onContinue, travelDuration }: Props) {
  const destination = locations[destinationId];

  return (
    <div className="start-panel">
      <div>vous ete arrivé a destination. Mars.</div>

      <div className="button-box">
        <Button onClick={onContinue}>ACCÉDER AU BRIEFING</Button>
      </div>
    </div>
  );
}

export default TravelArrival;

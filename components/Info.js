import useStore from "../lib/store";

export default function BulletPoints() {
  const bulletPoints = useStore(state => state.info);

  return (
    <ul>
      {bulletPoints.map(point => <li>{point}</li>)}
    </ul>
  );
}
import useStore from "../lib/store";

export default function BulletPoints() {
  const bulletPoints = useStore(state => state.info);

  return (
    <ul>
      {bulletPoints.map((point, i) => <li key={i} >{point}</li>)}
    </ul>
  );
}
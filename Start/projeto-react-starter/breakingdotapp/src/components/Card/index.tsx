import "./style.css";

export type CardProps = {
  name: string;
  time: string;
}

export function Card(props: CardProps) {
  return (
    <div className="card">
      <strong className="name">{props.name}</strong>
      <small className="hour">{props.time}</small>
    </div>
  );
}

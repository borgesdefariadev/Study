import "./style.css";

export function Card(props) {
  return (
    <div className="card">
      <strong className="name">{props.name}</strong>
      <small className="hour">{props.hour}</small>
    </div>
  );
}

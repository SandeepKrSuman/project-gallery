import "./Credit.css";

export default function Credit(props) {
  return (
    <p className="credit">
      {`${props.ptitle} by`}
      <a href={props.gh}> {props.userName} </a>
    </p>
  );
}

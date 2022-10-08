import "./Credit.css";

export default function Credit(props) {
  return (
    <p className="credit">
      {`${props.art} by`}
      <a href={props.gh}> {props.userName} </a>
    </p>
  );
}

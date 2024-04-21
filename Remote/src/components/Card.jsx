import "./Card.css";

function Host(props) {
  // eslint-disable-next-line react/prop-types
  return <div className="host">Hey {props.name}, I'm the Remote app 👋</div>;
}

export default Host;

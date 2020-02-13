import React from "react";

export default function Prices(props) {
  const [currency, setCurrency] = React.useState("USD");
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          Bitcoin rate for {props.bpi.bpi.USD.description} :{" "}
          <span className="badge badge-primary">{props.bpi.bpi.USD.code}</span>
          <strong>{props.bpi.bpi.USD.rate}</strong>
        </li>
      </ul>
    </div>
  );
}

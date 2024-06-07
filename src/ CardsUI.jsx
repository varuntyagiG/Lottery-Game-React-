import { Button } from "./Button";
import "./Card.css";

function Cards() {
  return (
    <div className="box">
      <h3>Standard Plan</h3>
      <h2>
        <span className="dollar">&#x24;</span>
        <b className="num">49</b>
        <span className="mouth">/month</span>
      </h2>
      <ul>
        <li>2 term members</li>
        <li>20 GB Cloud Storage</li>
        <li>Integration help</li>
        <li>sketch Files</li>
        <li>Complete Documentation</li>
      </ul>
      <Button info={"choose Plan"} />
    </div>
  );
}

export { Cards };

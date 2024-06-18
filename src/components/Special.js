import Card from "./Card";
import { Link } from "react-router-dom";

const Special = ({ data }) => {
  return (
    <section id="special" className="container mb-3">
      <div id="special-header">
        <h2 id="h2-special">This Week Specials!</h2>
        <Link className="txt-dec-none" to="online-menu">
            <button className="online-menu-btn">Online Menu</button>
        </Link>
      </div>
      <div className="special-body">
        {data.map((element, index) => {
          return <Card key={index} data={element} />;
        })}
      </div>
    </section>
  );
};

export default Special;
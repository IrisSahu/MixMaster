import { Link, useOutletContext } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailCard";

const CocktailCard = ({ image, name, id, info, glass }) => {
  const data = useOutletContext()
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
        <div className="footer">
          <h4>{name}</h4>
          <h5>{glass}</h5>
          <p>{info}</p>
          <Link to={`/cocktail/${id}`} className="btn">details</Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default CocktailCard;

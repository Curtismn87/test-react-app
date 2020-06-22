import React from "react";
import { fetchNutritionInfo } from "../components/USDA-API/API-caller";

const Home = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetchNutritionInfo()
    .then((items) => {
      setItems(items);
    })
  }, []);

  const usdaItems = items.map((item) => (
      <div className="food col-sm" key={item.fdcId}><p>{item.description}</p>
        <div key={item.foodCode}>{item.foodNutrients.map((nutrients) => (
            <div key={nutrients.number}>{nutrients.name}: {nutrients.amount}</div>
        ))}</div>
      </div>
  ));

  return <div className="container"><div className="row">{usdaItems}</div></div>;
};

export default Home;



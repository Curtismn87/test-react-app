import React from "react";
import { fetchNutritionInfo } from "../components/USDA-API/API-caller";

import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import * as Cards from "../styles/Cards";

const Home = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetchNutritionInfo()
    .then((items) => {
      setItems(items);
    })
  }, []);

  const usdaItems = items.map((item) => (
      <div key={item.fdcId} style={Cards.spacing}>
        <Card style={Cards.fixedSize}>
          <CardBody>
            <CardTitle>
              {item.description}
            </CardTitle>
            <CardText>
              {item.foodNutrients.map((nutrients) => (
                  <div key={nutrients.number}>{nutrients.name}: {nutrients.amount}</div>
              ))}
            </CardText>
          </CardBody>
        </Card>
      </div>
  ));

  return <div className="container"><div className="row">{usdaItems}</div></div>;
};

export default Home;



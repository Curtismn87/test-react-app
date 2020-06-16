import React from "react";
import { InputGroup, InputGroupText, Input, Card, CardText, CardBody,
  CardTitle } from 'reactstrap';
import * as Cards from '../styles/Cards';
import { queryNutritionInfo } from "../components/USDA-API/API-caller";

const Search = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    queryNutritionInfo('burger')
    .then((items) => {
      setItems(items.foods);
    })
  }, []);

  const usdaItems = items.map((item) => (
      <div key={item.fdcId} style={Cards.spacing}>
      <Card>
        <CardBody>
          <CardTitle>
            {item.description}
          </CardTitle>
          <CardText>
            {item.foodNutrients.map((nutrients) => (
                <div key={nutrients.nutrientId}>{nutrients.nutrientName}: {nutrients.value}</div>
            ))}
          </CardText>
        </CardBody>
      </Card>
      </div>
  ));

  return (
    <div className="container">
      <div className="row">
        <InputGroup>
          <InputGroupText>
            <Input placeholder="Search Here..."/>
          </InputGroupText>
        </InputGroup>
      </div>
      <div className="row">{usdaItems}</div>
    </div>
  );
};

export default Search;



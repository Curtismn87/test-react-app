import React from "react";
import { InputGroup, InputGroupText, Input, Card, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';
import * as Cards from '../styles/Cards';
import { queryNutritionInfo } from "../components/USDA-API/API-caller";

const Search = () => {
  const [items, setItems] = React.useState([]);
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    queryNutritionInfo('burger')
    .then((items) => {
      setItems(items.foods);
    })
  }, []);

  const usdaItems = items.map((item) => (
      <div key={item.fdcId} style={Cards.spacing}>
      <Card>
        <CardBody style={Cards.fixedSize}>
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

  const queryFoods = () => {
    queryNutritionInfo(query)
    .then((items) => {
      setItems(items.foods);
    })
  };

  return (
    <div className="container">
      <div className="row">
        <InputGroup>
          <InputGroupText>
            <Input onChange={e => setQuery(e.target.value)} placeholder="Search Here..."/>
          </InputGroupText>
          <Button outline color="primary" onClick={queryFoods}>Find Foods</Button>{' '}
        </InputGroup>
      </div>
      <div className="row">{usdaItems}</div>
    </div>
  );
};

export default Search;



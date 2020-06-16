import React from "react";
import { fetchNutritionInfo, queryNutritionInfo } from "../components/USDA-API/API-caller";

const Search = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    queryNutritionInfo({
      "query": "Hot Dog",
      "dataType": [
        "Foundation",
        "SR Legacy"
      ],
      "pageSize": 25,
      "pageNumber": 2,
      "sortBy": "dataType.keyword",
      "sortOrder": "asc",
    })
    .then((items) => {
      setItems(items.foods);
    })
  }, []);

  const usdaItems = items.map((item) => (
      <div className="food col-sm" key={item.fdcId}><p>{item.description}</p>
        {item.foodNutrients.map((nutrients) => (
            <div key={nutrients.nutrientId}>{nutrients.nutrientName}: {nutrients.value}</div>
        ))}
      </div>
  ));

  return <div className="container"><div className="row">{usdaItems}</div></div>;
};

export default Search;


